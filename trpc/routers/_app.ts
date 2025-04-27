
import { createTRPCRouter } from '../init';
import { categoriesRouter } from '@/Server/categories-procedure';
export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;