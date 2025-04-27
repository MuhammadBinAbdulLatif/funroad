'use client'
import { useProductFilters } from '@/hooks/use-product-filters'
import { useTRPC } from '@/trpc/client'
import { useSuspenseQuery } from '@tanstack/react-query'

import React from 'react'

type Props = {
    category: string | undefined
}
const ProductList = ({category}:Props) => {
    const trpc  = useTRPC()
    const [filters] = useProductFilters()
    const {data} = useSuspenseQuery(trpc.products.getMany.queryOptions({category, ...filters}))
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 x:grid-cols-4 2xl:grid-cols-4 gap-4'>
        {data?.docs.map((product)=> (
            <div key={product.id} className='border rounded-md bg-white' >
                <h2 className='text-lg p-2 font-medium'>
                    {product.name}
                </h2>
                <div className='flex items-center justify-center'>
                <h2 className='font-medium text-green-400 p-2'>
                    ${product.price}
                </h2>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ProductList


export const ProductListSkeleton = () => {
    return (
        <div>
            loading...
        </div>
    )
}