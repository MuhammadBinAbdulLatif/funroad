import { Category } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { Where } from "payload";
import { z } from "zod";

function getAllSubcategorySlugs(category: Category): string[] {
  let slugs: string[] = [];
  if (category.subcategories && Array.isArray(category.subcategories)) {
    for (const sub of category.subcategories) {
      slugs.push(sub.slug);
      // Recursively collect from deeper levels
      slugs = slugs.concat(getAllSubcategorySlugs(sub));
    }
  }
  return slugs;
}

export const productsRouter = createTRPCRouter({
    getMany: baseProcedure.input(
        z.object({
            category: z.string().nullable().optional(),
            minPrice: z.string().nullable().optional(),
            maxPrice: z.string().nullable().optional()
        })
    ).query(async ({ctx, input}) => {
        const where:Where = {
            price: {}
        };

        if(input.minPrice && input.maxPrice) {
            where.price = {
                less_than_equal: input.maxPrice,
                greater_than_equal: input.minPrice
            }
        } else if (input.minPrice) {
            where.price = {
                greater_than_equal: input.minPrice
            }
        } else if(input.maxPrice) {
            where.price = {
                less_than_equal: input.minPrice
            }
        }
        
        if(input.category) {
            const categoriesData = await ctx.db.find({
                collection: 'categories',
                limit: 1,
                pagination: false,
                where: {
                    slug: {
                        equals: input.category
                    }
                }
            })
            const formattedData = categoriesData.docs.map((doc)=> (
                {
                  ...doc,
                  subcategories: (doc.subcategories?.docs ?? []).map((doc)=> ({
                    ...(doc as Category),
                    subcategories: undefined
                  }))
                }
               ))
               const subCategories = []
               const parentCategory = formattedData[0]
               if(parentCategory) {
                subCategories.push(
                    ...parentCategory.subcategories.map((subcategory)=> subcategory.slug)
                )
               }

            
                let allSlugs = [];
                if (parentCategory) {
                  allSlugs = [parentCategory.slug, ...getAllSubcategorySlugs(parentCategory as Category)];
                  where['category.slug'] = { in: allSlugs };
                }
        }
         const data = await ctx.db.find({
          collection: 'products',
          depth: 1,
          where
         })
         
        
         return data;
    })
    })