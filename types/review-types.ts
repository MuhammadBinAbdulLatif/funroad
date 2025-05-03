import {inferRouterOutputs} from '@trpc/server'
import type { AppRouter } from '@/trpc/routers/_app'
import * as z from 'zod'

export type ReviewsGetOneOutput = inferRouterOutputs<AppRouter>['reviews']['getOne']
export const ReviewformSchema = z.object({
    rating: z.number().min(1, {message: 'Rating is required'}).max(5),
    description: z.string().min(1, {message: 'Description is required'})
})

