import type {CollectionConfig} from 'payload'

export const Products: CollectionConfig = {
    slug: 'products',
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true
        },
        {
            name: 'description',
            type: 'text',
            minLength: 500,
            admin: {
                description: 'Write a detailed description. This makes your product and the vendor look more professional and dedicated and hence more sales.'
            }
        }, {
            name: 'price',
            type: 'number',
            required: true,
            admin: {
                description: 'Price in USD'
            }
        }, {
            name: 'category',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: false,
            required: true
        }, {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            admin: {
                description: 'The image of the product that will be shown on your page.'
            }
        },
        {
            name: 'cover',
            type: 'upload',
            relationTo: 'media',
            required: false,
            admin: {
                description: 'The image that will be shown on the product-specific page as cover image'
            }
        },
        {
            name: 'refundPolicy',
            type: 'select',
            options: ['30-day', '14-day','7-day','3-day','1-day', 'no-refunds'],
            defaultValue: '30-day'
        }, {
            name: 'tags',
            type: 'relationship',
            relationTo: 'tags',
            hasMany: true,
            required: true
        }
    ],
}