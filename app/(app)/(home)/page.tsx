import SearchFilter, { SearchFilterLoading } from '@/components/search-filter.tsx';
import { getQueryClient, trpc } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';

export default function Home() {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(trpc.categories.getMany.queryOptions())
  return (
    <div className='flex flex-col'>
      <div className='w-screen'>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<SearchFilterLoading />}>
      <SearchFilter  />
      </Suspense>
      </HydrationBoundary>
      </div>
    </div>
  );
}
