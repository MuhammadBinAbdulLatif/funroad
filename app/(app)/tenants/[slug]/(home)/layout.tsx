import Footer from '@/components/Tenants/Footer'
import Navbar, { NavbarSkeleton } from '@/components/Tenants/Navbar'
import { getQueryClient, trpc } from '@/trpc/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import React, { Suspense } from 'react'

type Props = {
    children: React.ReactNode
    params: Promise<{slug: string}>
}

const layout = async ({children,params}: Props) => {
  const {slug} = await params;
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(trpc.tenants.getOne.queryOptions({
    slug: slug
  }))

  return (
    <div className='min-h-screen bg-[#f4f4f4] flex flex-col'>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<NavbarSkeleton />}>
      <Navbar slug={slug} />
      </Suspense>
      </HydrationBoundary>
        <div className='flex-1'>
        <div className='max-w-(--breakpoint-xl) mx-auto'>
        {children}
        </div>
        </div>
        <Footer />
    </div>
    
  )
}

export default layout