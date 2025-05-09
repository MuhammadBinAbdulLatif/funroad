import { isSuperAdmin } from '@/lib/access'
import type { CollectionConfig } from 'payload'

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  admin: {
    useAsTitle: 'slug',
  },
  access: {
    create: ({req}) => isSuperAdmin(req.user),
    delete: ({req}) => isSuperAdmin(req.user)
  } ,
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
        access: {
          create: ({req}) => isSuperAdmin(req.user)
        }
        
    }, {
        name: 'stripeAccountId',
        type: 'text',
        access: {
          update: ({req}) => isSuperAdmin(req.user)
        },
        admin: {
          description: 'Your stripe connect id.'
        }
    }, {
        name: 'stripeDetailsSubmitted',
        type: 'checkbox',
        admin: {
            readOnly: true,
            description: 'You cannot create products until you submit your Stripe details'
        },
        access: {
          update: ({req}) => isSuperAdmin(req.user)
        },

    }, {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
    }
  ],
}
