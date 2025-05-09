// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor, UploadFeature } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig, Config } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import {multiTenantPlugin} from '@payloadcms/plugin-multi-tenant'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { categories } from './collections/Categories'
import { Products } from './collections/Products'
import { Tags } from './collections/Tags'
import { Tenants } from './collections/Tenants'
import { Orders } from './collections/Orders'
import { Reviews } from './collections/Reviews'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      beforeNavLinks: ['@/components/global/stripe-verify#StripeVerify']
    }
  },
  collections: [Users, Media, categories, Products, Tags, Tenants, Orders, Reviews],
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
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    multiTenantPlugin<Config>({
      collections: {
        products: {
        },
        
      },
      tenantsArrayField: {
        includeDefaultField: false
      }, 
      userHasAccessToAllTenants: (user) => Boolean(user?.roles?.includes('super-admin')),
      tenantField: {
        name: 'tenant',
      }
    })
    // storage-adapter-placeholder
  ],
})