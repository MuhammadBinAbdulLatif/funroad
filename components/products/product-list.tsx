'use client'
import { useProductFilters } from '@/hooks/use-product-filters'
import { useTRPC } from '@/trpc/client'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import React from 'react'
import ProductCard, { ProductCardSkeleton } from './product-card'
import { Button } from '../ui/button'
import { InboxIcon } from 'lucide-react'

type Props = {
    category: string | undefined
}
const ProductList = ({category}:Props) => {
    const trpc  = useTRPC()
    const [filters] = useProductFilters()
    const {data, hasNextPage, isFetchingNextPage, fetchNextPage} = useSuspenseInfiniteQuery(trpc.products.getMany.infiniteQueryOptions({category, ...filters, limit: 10}, {
        getNextPageParam: (lastPage) => {
            return lastPage.docs.length ? lastPage.nextPage : undefined
        }
    }))
    if(data.pages?.[0]?.docs.length === 0) {
        return (
            <div className='border border-black border-dashed flex items-center justify-center p-5 flex-col gap-y-4 bg-white w-full rounded-lg'>
                <InboxIcon />
                <p className='text-base font-medium'>
                    No product found
                </p>
            </div>
        )
    }
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 x:grid-cols-4 2xl:grid-cols-4 gap-4'>
       {data?.pages.flatMap((page) =>
  page.docs.map((product) => (
    <ProductCard 
      id={product.id} 
      name={product.name} 
      imageUrl={product.image?.url} 
      authorUsername="antonio" 
      authorImageUrl={undefined} 
      reviewRating={3} 
      reviewCount={5} 
      price={product.price} 
      key={product.id} 
    />
  ))
)}

    </div>
    <div className='flex justify-center pt-8'>
        {hasNextPage && (
            <Button disabled={isFetchingNextPage} onClick={()=> fetchNextPage} className='font-medium disabled:opacity-50 text-base bg-white' variant={'elevated'} >
                Load more
            </Button>
        )}
    </div>
    </>
  )
}

export default ProductList


export const ProductListSkeleton = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 x:grid-cols-4 2xl:grid-cols-4 gap-4'>
              {Array.from({length: 10}).map((_, index)=> (
                <ProductCardSkeleton key={index} />
              )) }
        </div>
    )
}