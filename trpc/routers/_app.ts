
import { authRouter } from '@/Server/auth-procedures';
import { createTRPCRouter } from '../init';
import { categoriesRouter } from '@/Server/categories-procedure';
import { productsRouter } from '@/Server/product-procedures';
export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  auth: authRouter,
  products: productsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;