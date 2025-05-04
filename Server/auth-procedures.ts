import z from 'zod'
import { headers as getHeaders } from "next/headers";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { TRPCError } from '@trpc/server';
import { cookies as getCookies } from 'next/headers';
import { AUTH_COOKIE } from '@/constants/auth';
import { stripe } from '@/lib/stripe';
export const authRouter = createTRPCRouter({
    session: baseProcedure.query(async ({ ctx }) => {
        const headers = await getHeaders()
        const session = await ctx.db.auth({headers})
        return session
    }),
    verify: protectedProcedure.mutation(async ({ctx})=> {
        const user = await ctx.db.findByID({
            collection: 'users',
            id: ctx.session.user.id,
            depth: 0
        })
         if(!user){
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: 'User not found'
            })
         }
         const tenantId = user.tenants?.[0].tenant as string
         const tenant = await ctx.db.findByID({
            collection: 'tenants',
            id: tenantId
         })
         if(!tenant) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: 'Tenant not found'
            })
         }
         const accountLink = await stripe.accountLinks.create({
            //@ts-expect-error because we are right.
            account: tenant.stripeAccountId,
            refresh_url: `${process.env.NEXT_PUBLIC_APP_URL}/admin`,
            return_url: `${process.env.NEXT_PUBLIC_APP_URL}/admin`,
            type: 'account_onboarding'
         })
         if(!accountLink.url) {
            throw new TRPCError({
                code: 'BAD_REQUEST',
                message: 'Failed to create verification link'
            })
         }
         return {url: accountLink.url}
    }),
    register: baseProcedure.input(z.object({
        email: z.string().email(),
        password: z.string().nonempty().min(8,{message: 'Password must be 8 characters or long'}),
        username: z.string().min(3, {message: "Username must be alteast three characters"}).max(56, {message: 'Username must be less than 56 characters'}).regex(/^[a-zA-Z0-9_]+$/, {message: 'Username must only contain letters, numbers and underscores'}).refine((val)=> !val.includes('--'), {message: 'Username cannot contain --'}).transform((val)=> val.toLowerCase())

    })).mutation(async ({ input,ctx }) => {
        await ctx.db.find({
            collection: 'users',
            where: {
                email: {
                    equals: input.email
                }
            }
        }).then((res)=> {
            if(res.totalDocs > 0){
                throw new TRPCError({
                    code: 'CONFLICT',
                    message: 'Email already exists'
                })
            }
        })

        await ctx.db.find({
            collection: 'users',
            where: {
                username: {
                    equals: input.username
                }
            }
        }).then((res)=> {
            if(res.totalDocs > 0){
                throw new TRPCError({
                    code: 'CONFLICT',
                    message: 'Username already exists'
                })
            }
        })
        const account = await stripe.accounts.create({})
        if(!account) {
            throw new TRPCError({
                code: 'BAD_REQUEST',
                message: 'Failed to crate the stripe account'
            })
        }
        const tenant = await ctx.db.create({
            collection: 'tenants',
            data: {
                name: input.username,
                slug: input.username,
                stripeAccountId: account.id,
                stripeDetailsSubmitted: false
            }
        })
        await ctx.db.create({
            collection: 'users',
            data: {
                email: input.email,
                username: input.username,
                password: input.password,
                tenants: [
                    {
                        tenant: tenant,
                        id: tenant.id
                    }
                ]
            }
        })
       
        const data = await ctx.db.login({
            collection: 'users',
            data: {
                email: input.email,
                password: input.password
            }
           })
           if(!data || !data.token){
            throw new TRPCError({
                code: 'UNAUTHORIZED',
                message: 'Invalid Credentials'
            })
           } 
           const cookies = await getCookies()
           cookies.set(AUTH_COOKIE, data.token, {
            httpOnly: true,
            path: '/'
            // TODO: Ensure cross-domain cookie sharing
           })
    }),
    login: baseProcedure.input(z.object({
        email: z.string().email(),
        password: z.string(),

    })).mutation(async ({ input,ctx }) => {
       const data = await ctx.db.login({
        collection: 'users',
        data: {
            email: input.email,
            password: input.password
        }
       })
       if(!data || !data.token){
        throw new TRPCError({
            code: 'UNAUTHORIZED',
            message: 'Invalid Credentials'
        })
       } 
       const cookies = await getCookies()
       cookies.set(AUTH_COOKIE, data.token, {
        httpOnly: true,
        path: '/'
        // TODO: Ensure cross-domain cookie sharing
       })
       return data
    }),
    logout: baseProcedure.mutation(async ()=> {
        const cookies = await getCookies()
        cookies.delete(AUTH_COOKIE)
    })
     
  })