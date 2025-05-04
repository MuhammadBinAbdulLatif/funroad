
import ProductView from '@/components/Library/product-view';
import { ProductCardSkeleton } from '@/components/products/product-card';
import { getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import React, { Suspense } from 'react'

type Props = {
    params: Promise<{productId: string;}>
}

const page = async ({params}: Props) => {
    const {productId} = await params;
    const queryClient = getQueryClient()
    void queryClient.prefetchQuery(trpc.library.getOne.queryOptions({
        productId
    }))
    void queryClient.prefetchQuery(trpc.reviews.getOne.queryOptions({
        productId
    }))
  return (
   <HydrationBoundary state={dehydrate(queryClient)}>
    <Suspense fallback={<ProductCardSkeleton/>}>
    <ProductView productId={productId} />
    </Suspense>
   </HydrationBoundary>
  )
}

export default page