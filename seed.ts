import { getPayload } from "payload";
import config  from "./payload.config"
import { categories } from "./constants/categories";


export const seedTags = async () => {
    const payload = await getPayload({config})
  const tags = [
    'New',
    'Trending',
    'Easy',
    'Hard',
    'Popular',
    'Recommended',
    "Editor's Pick",
    'Beginner Friendly',
    'Intermediate',
    'Advanced Level',
    'Fast Learning',
    'Top Rated',
    'Hot Deal',
    'Featured',
    'Exclusive',
    'Recently Updated',
    'Best Seller',
    'Limited Time',
    'Flash Sale',
    'Free Course',
    'Paid Course',
    'Premium',
    'Free Snippets',
    'Short Snippets',
    'Long Course',
    'Detailed Guide',
    'Quick Tips',
    'Hackathon Ready',
    'Portfolio Booster',
    'Career Starter',
    'Interview Prep',
    'Certification Included',
    'Live Project',
    'Code Along',
    'Self Paced',
    'Mentor Support',
    'Community Access',
    'Hands-on Practice',
    'Theory Focused',
    'Practical Oriented',
    'Updated for 2025',
    'Bug-Free',
    'Clean Code',
    'Optimization Focused',
    'Deployment Ready',
    'Mobile Friendly',
    'SEO Optimized',
    'API Integration',
    'Latest Trends',
    'Real World Examples',
  ];

  for (const tag of tags) {
    await payload.create({
      collection: 'tags',
      data: {
        name: tag,
      },
    });
  }

  console.log('✅ Status Tags seeded successfully!');
};


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

const createAdmin = async () => {
  const payload = await getPayload({config})
  const admin = await payload.create({
    collection: 'tenants',
    data: {
      name: 'admin',
      slug: 'admin',
      stripeAccountId: 'test',
      stripeDetailsSubmitted: false
    }
  })
 await payload.update({
    collection: 'users',
    data: {
      tenants: [
        {
          id: admin.id,
          tenant: admin
        }
      ]
    },
    where: {
      email: {
        equals: 'helloworld@demo.com'
      }
    }
  });
  
}
await createAdmin()
process.exit(0)