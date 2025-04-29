import z from 'zod'
import { headers as getHeaders } from "next/headers";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { TRPCError } from '@trpc/server';
import { cookies as getCookies } from 'next/headers';
import { AUTH_COOKIE } from '@/constants/auth';
export const authRouter = createTRPCRouter({
    session: baseProcedure.query(async ({ ctx }) => {
        const headers = await getHeaders()
        const session = await ctx.db.auth({headers})
        return session
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
        const tenant = await ctx.db.create({
            collection: 'tenants',
            data: {
                name: input.username,
                slug: input.username,
                stripeAccountId: 'test',
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