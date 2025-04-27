
import { authRouter } from '@/Server/auth-procedures';
import { createTRPCRouter } from '../init';
import { categoriesRouter } from '@/Server/categories-procedure';
export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  auth: authRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;