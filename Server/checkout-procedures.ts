import { stripe } from "@/lib/stripe";
import { generateTenantUrl } from "@/lib/utils";
import {  Media, Tenant } from "@/payload-types";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { CheckoutMetaData, ProductMetadata } from "@/types/product-metadata";
import { TRPCError } from "@trpc/server";
import type Stripe from "stripe";
import { z } from "zod";


export const checkoutRouter = createTRPCRouter({
    purchase:protectedProcedure.input(z.object({
        productIds: z.array(z.string().min(1)),
        tenantSlug: z.string().min(1)
    })).mutation(async( {ctx, input})=> {
         const products = await ctx.db.find({
            collection: 'products',
            depth: 2,
            where: {
                and: [
                    {
                        id: {
                            in: input.productIds
                        }
                    }, {
                        'tenant.slug': {
                            equals: input.tenantSlug
                        }
                    }
                ]
            },
            select: {
                content: false
            }
            
         })
         if(products.totalDocs !==input.productIds.length){
            throw new TRPCError({
                code: 'NOT_FOUND', message: 'Products not found'
            })
         }
         const tenantData = await ctx.db.find({
            collection: 'tenants',
            limit: 1,
            pagination: false,
            where: {
                slug: {
                    equals: input.tenantSlug
                }
            }
         })
         const tenant = tenantData.docs[0]
         if(!tenant){
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: 'Tenant not found'
            })
         }
         if(!tenant.stripeDetailsSubmitted){
            throw new TRPCError({
                code: 'BAD_REQUEST',
                message: 'Tenant not allowed to sell products'
            })
         }
         const totalAmount = products.docs.reduce(
            (acc,item) => acc + item.price * 100, 0
         )
         const platformFeeAmount = Math.round(
            totalAmount * 0.1      )
         const lineItems:Stripe.Checkout.SessionCreateParams.LineItem[] = products.docs.map((product) => ({
            quantity:1,
            price_data: {
                unit_amount: product.price * 100,
                currency: 'usd',
                product_data: {
                    name: product.name,
                    metadata: {
                        stripeAccountId: tenant.stripeAccountId,
                        id: product.id,
                        name: product.name,
                        price: product.price
                    } as ProductMetadata
                }
            }
         }))
         const checkout = await stripe.checkout.sessions.create({
            customer_email: ctx.session.user.email,
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/${generateTenantUrl(tenant.name)}/checkout?success=true`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/${generateTenantUrl(tenant.name)}/checkout?cancel=true`,
            mode: 'payment',
            line_items: lineItems,
            metadata: {
                userId: ctx.session.user.id
            } as CheckoutMetaData,
            payment_intent_data : {
                application_fee_amount : platformFeeAmount
            }
         }, {
            stripeAccount: tenant.stripeAccountId
         })
         if(!checkout.url) {
            throw new TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                message: 'Error trying to create a payment'
            })
         }
         return {url: checkout.url}
    }),
  getProducts: baseProcedure
    .input(
      z.object({
       ids: z.array(z.string())
      })
    )
    .query(async ({ ctx, input }) => {
      
      

      const data = await ctx.db.find({
        collection: "products",
        depth: 2, // Populate category, image, 
        where: {
            id: {
                in: input.ids
            }
        },
        select: {
            content: false
        }
      });
      if(data.totalDocs !== input.ids.length) {
        throw new TRPCError({code: 'NOT_FOUND', message: "Some of the products are not found"})
      }

      return {
        ...data,
        totalPrice: data.docs.reduce((acc, product)=> acc + product.price, 0),
        docs: data.docs.map((doc)=> ({
          ...doc,
          image: doc.image as Media || null,
          tenant: doc.tenant as Tenant & {image: Media | null}
        }))
      }
    }),
});
