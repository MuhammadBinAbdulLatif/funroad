import { getPayload } from "payload";
import config  from "./payload.config"
import { categories } from "./constants/categories";

const seed = async () => {
    const payload = await getPayload({config})
    for (const categorie of categories) {
        const parentCategory = await payload.create({
            collection: 'categories',
            data: {
                name: categorie.name,
                slug: categorie.slug,
                color: categorie.color,
                parent: null
            },
        })
        for (const subcategory of categorie.subcategories || []) {
            await payload.create({
                collection: 'categories',
                data: {
                    name: subcategory.name,
                    slug: subcategory.slug,
                    parent: parentCategory.id,
                },
            })
        }
    }
}

await seed()
process.exit(0)