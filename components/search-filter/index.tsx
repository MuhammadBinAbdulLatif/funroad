'use client'
import React from 'react'
import SearchInput from './search-input'
import Categories from './Categories'
import { useTRPC } from '@/trpc/client'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import BreadCrumbNavigation from './breadcrumb-navigation'

const SearchFilter = () => {
  const trpc = useTRPC()
  const {data} = useSuspenseQuery(trpc.categories.getMany.queryOptions())
  const params = useParams()
  const categoryParam = params.category as string | undefined
  const activeCategoryData = data.find((category) => category.slug === categoryParam)
  const activeCategory = activeCategoryData?.slug || 'all'
  const acitveCategoryColor = activeCategoryData?.color || 'white'
  const activeCategoryName = activeCategoryData?.name || null
  const acitveSubcategory = params.subcategory  as string | undefined 
  const activeSubCategoryName = activeCategoryData?.subcategories.find((category) => category.slug === acitveSubcategory)?.name || null
  return (
    <div className='px-4 lg:px-12 py-2  border-b flex flex-col gap-2 w-full ' style={{backgroundColor: acitveCategoryColor}}>
      <SearchInput data={data} />
      <div className='hidden lg:block'>
      <Categories data={data} />
      </div>
      <BreadCrumbNavigation activeCategoryName={activeCategoryName} activeCategory={activeCategory} activeSubCategoryName={activeSubCategoryName} />
    </div>
  )
}

export default SearchFilter
export const SearchFilterLoading = () => {
  
  return (
    <div className='px-4 lg:px-12 py-2  border-b flex flex-col gap-2 w-full ' style={{backgroundColor: '#f5f5f5'}}>
      <SearchInput  disabled />
      <div className='hidden lg:block'>
        <div className='h-10'/>
      </div>
    </div>
  )
}
