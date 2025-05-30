import ProductFilters from '@/components/products/product-filters'
import ProductList, { ProductListSkeleton } from '@/components/products/product-list'
import ProductSort from '@/components/products/product-sort'
import {  getQueryClient, trpc } from '@/trpc/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { SearchParams } from 'nuqs'
import React, { Suspense } from 'react'

type Props = {
    params: Promise<{
        slug: string
    }>,
    searchParams: Promise<SearchParams>
}

const page = async ({params, searchParams}: Props) => {
    const {slug} = await params;
    const filter = await searchParams;
    const queryClient = getQueryClient()
    const tags = typeof filter.tags === 'string' 
      ? filter.tags.split(',').map((tag: string) => tag.trim()).filter((tag: string) => tag !== '') 
      : [];
      console.log(filter)
    void queryClient.prefetchQuery(
      trpc.products.getMany.queryOptions({
        tenantSlug: slug,
        maxPrice: filter.maxPrice as string | null | undefined,
        minPrice: filter.minPrice as string | null | undefined,
        tags: tags as string[] | null | undefined,
        sort: filter.sort as "curated" | "trending" | "hot_and_new" | null | undefined
      })
    );
    
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='px-4 lg:px-12 py-8 flex flex-col gap-4 '>
        <div className='flex flex-col lg:flex-row lg:items-center gap-y-2 lg:gap-y-0 justify-between'>
          <p className='text-2xl font-medium'>
            Curated for you
          </p>
          <ProductSort />

        </div>
        <div className='grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-8 gap-y-6 gap-x-12'>
          <div className='lg:col-span-2 xl:col-span-2'>
          <div>
           <ProductFilters />
          </div>
          </div>
      <div className='lg:col-span-4 xl:col-span-6'>
 
     
      <Suspense fallback={<ProductListSkeleton />}>
      <ProductList tenantSlug={slug} />
      </Suspense>
      </div>
      </div>
      </div>
    </HydrationBoundary>
  )
}

export default page