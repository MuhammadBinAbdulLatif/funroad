import { ProductCardSkeleton } from '@/components/products/product-card';
import ProductView from '@/components/Tenants/ProductView';
import { getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import React, { Suspense } from 'react'

type Props = {
    params: Promise<{
      productId: string;
      slug: string
    }>
}

const page = async ({params}: Props) => {
  const {productId,slug} = await params;
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.products.getOne.queryOptions({id: productId}))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<ProductCardSkeleton />}>
      <ProductView productId={productId} tenantSlug={slug} />
      </Suspense>
    </HydrationBoundary>
  )
}

export default page