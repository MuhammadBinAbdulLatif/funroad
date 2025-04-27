import {inferRouterOutputs} from '@trpc/server'
import type { AppRouter } from '@/trpc/routers/_app'

export type CategoriesGetMany = inferRouterOutputs<AppRouter>['categories']['getMany']
export type CategoriesGetManyOutputSingle = CategoriesGetMany[0]