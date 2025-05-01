import {  Media, Tenant } from "@/payload-types";
import {createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { z } from "zod";

export const LibraryRouter = createTRPCRouter({
  getMany: protectedProcedure
    .input(
      z.object({
        cursor: z.number().default(1),
        limit: z.number().default(10),
      })
    )
    .query(async ({ ctx, input }) => {
      console.log('inp', input)
      
      

      const data = await ctx.db.find({
        collection: "orders",
        depth: 0, // Populate category, image, 
        page: input.cursor,
        limit: input.limit,
        where: {
            user: {
                equals: ctx.session.user.id
            }
        }
      });
      const productIds = data.docs.map((order)=> order.product)
      const productsData = await ctx.db.find({
        collection: 'products',
        pagination:false,
        where: {
            id: {
                in: productIds
            }
        }
      })

      return {
        ...productsData,
        docs: productsData.docs.map((doc)=> ({
          ...doc,
          image: doc.image as Media || null,
          tenant: doc.tenant as Tenant & {image: Media | null}
        }))
      }
    }),
});
