import { isSuperAdmin } from '@/lib/access'
import { Tenant } from '@/payload-types'
import { lexicalEditor, UploadFeature } from '@payloadcms/richtext-lexical'
import type {CollectionConfig} from 'payload'

export const Products: CollectionConfig = {
    slug: 'products',
    admin: {
        useAsTitle: 'name',
        description: 'You must verify your account before creating products with stripe.'
    },
    access: {
        read: () => true,
        create: ({req}) => {
            if(isSuperAdmin(req.user)) return true
            const tenant = req.user?.tenants?.[0].tenant as Tenant
            return Boolean(tenant?.stripeDetailsSubmitted)
        },
        delete: ({req}) => isSuperAdmin(req.user)
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true
        },
        {
            name: 'description',
            type: 'richText',
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
        }, {
            name: 'content',
            type: 'richText',
            editor: lexicalEditor({
                features: ({ defaultFeatures, })=> [
                    ...defaultFeatures,
                    UploadFeature({
                        collections: {
                            media: {
                                fields: [
                                    {
                                        name: 'name',
                                        type: 'text'
                                    }
                                ]
                            }
                        }
                    
                    })
                ],
            }),

            admin: {
                description: "Protected content only visible to customers after purchase. Add product documentation, downloadable files, getting started guides and bonus materials. Supports markdown formatting."
            }
        },
        {
            name: 'isArchived',
            label: 'Archive',
            type: 'checkbox',
            defaultValue: false,
            admin: {
                description: "If checked, the product will be archived"
            }
        }
    ],
}