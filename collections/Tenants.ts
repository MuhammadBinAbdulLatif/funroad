import type { CollectionConfig } from 'payload'

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  admin: {
    useAsTitle: 'slug',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Store Name',
      admin: {
        description: 'This is the name of the store (e.g Antonios store)'
      }
    }, {
        name: 'slug',
        type: 'text',
        index: true,
        required: true,
        unique: true,
        admin: {
            description: "this is the subdomain for the store (e.g [slug].funroad.com)"
        },
        
    }, {
        name: 'stripeAccountId',
        type: 'text',
        admin: {
            readOnly: true
        }
    }, {
        name: 'stripeDetailsSubmitted',
        type: 'checkbox',
        admin: {
            readOnly: true,
            description: 'You cannot create products until you submit your Stripe details'
        }
    }, {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
    }
  ],
}
