
import { authRouter } from '@/Server/auth-procedures';
import { createTRPCRouter } from '../init';
import { categoriesRouter } from '@/Server/categories-procedure';
import { productsRouter } from '@/Server/product-procedures';
import { TagsRouter } from '../../Server/tag-procedures';
import {  TenantsRouter } from '@/Server/tenant-procedures';
import { checkoutRouter } from '@/Server/checkout-procedures';
import { LibraryRouter } from '@/Server/library-procedures';
export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  auth: authRouter,
  products: productsRouter,
  tags: TagsRouter,
  tenants: TenantsRouter,
  checkout: checkoutRouter,
  library: LibraryRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;