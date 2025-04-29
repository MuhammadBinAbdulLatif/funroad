import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import SearchFilter, { SearchFilterLoading } from '@/components/search-filter'
import { getQueryClient, trpc } from '@/trpc/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Metadata } from 'next'
import React, { Suspense } from 'react'

type Props = {
    children: React.ReactNode
}
export const metadata: Metadata = {
    title: "About funroad | Multi-tenant Digital Product Marketplace",
    description:
      "Learn about funroad, the all-in-one platform for creators to build, sell, and grow their digital product businesses.",
  }
  
const layout = async ({children}: Props) => {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(trpc.categories.getMany.queryOptions())
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className='flex-1 bg-[#f4f4f0] '>
        <div className='w-screen '>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<SearchFilterLoading />}>
      <SearchFilter  />
      </Suspense>
      </HydrationBoundary>
      </div>
        {children}
        </div>
        <Footer />
    </div>
  )
}

export default layout