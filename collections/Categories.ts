import type {CollectionConfig} from 'payload'

export const categories: CollectionConfig = {
    slug: 'categories',
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        }
    ]
}