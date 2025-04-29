import { Category, Media, Tenant } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { Sort, Where } from "payload";
import { z } from "zod";

function getAllSubcategorySlugs(category: Category): string[] {
  let slugs: string[] = [];
  if (category.subcategories && Array.isArray(category.subcategories)) {
    for (const sub of category.subcategories) {
      slugs.push(sub.slug);
      slugs = slugs.concat(getAllSubcategorySlugs(sub)); // recursive call
    }
  }
  return slugs;
}
const sortValues = ['curated', 'trending', 'hot_and_new'] as const

export const productsRouter = createTRPCRouter({
  getMany: baseProcedure
    .input(
      z.object({
        category: z.string().nullable().optional(),
        minPrice: z.string().nullable().optional(),
        maxPrice: z.string().nullable().optional(),
        tags: z.array(z.string()).nullable().optional(),
        sort:z.enum(sortValues).nullable().optional(),
        cursor: z.number().default(1),
        limit: z.number().default(10),
        tenantSlug: z.string().nullable().optional()
      })
    )
    .query(async ({ ctx, input }) => {
      const where: Where = {};
      console.log('inp', input)
      let sort:Sort = '-createdAt'
      if(input.sort === 'trending') {
        sort = '-name'
      }
      if(input.sort === 'hot_and_new') {
        sort = '+createdAt'
      }

      // Handle price filter
      if (input.minPrice || input.maxPrice) {
        where.price = {};

        if (input.minPrice) {
          where.price.greater_than_equal = Number(input.minPrice);
        }

        if (input.maxPrice) {
          where.price.less_than_equal = Number(input.maxPrice);
        }
      }
      if(input.tenantSlug) {
        where['tenant.slug'] = {
          equals: input.tenantSlug
        }
      }

      // Handle category filter
      if (input.category) {
        const categoriesData = await ctx.db.find({
          collection: "categories",
          limit: 1,
          pagination: false,
          where: {
            slug: {
              equals: input.category,
            },
          },
        });
        if(input.tags && input.tags.length > 0) {
          where['tags.name'] = {
            in: input.tags
          }
        }

        const formattedData = categoriesData.docs.map((doc) => ({
          ...doc,
          subcategories: (doc.subcategories?.docs ?? []).map((sub) => ({
            ...(sub as Category),
            subcategories: undefined,
          })),
        }));

        const parentCategory = formattedData[0];

        if (parentCategory) {
          const allSlugs = [
            parentCategory.slug,
            ...getAllSubcategorySlugs(parentCategory as Category),
          ];

          where["category.slug"] = { in: allSlugs };
        }
      }

      console.log(sort)

      const data = await ctx.db.find({
        collection: "products",
        depth: 2, // Populate category, image, 
        where,
        sort: sort,
        page: input.cursor,
        limit: input.limit
      });

      return {
        ...data,
        docs: data.docs.map((doc)=> ({
          ...doc,
          image: doc.image as Media || null,
          tenant: doc.tenant as Tenant & {image: Media | null}
        }))
      }
    }),
});
