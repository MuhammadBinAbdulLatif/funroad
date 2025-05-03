import LibraryView from '@/components/Library/library-view'
import { getQueryClient, trpc } from '@/trpc/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { headers } from 'next/headers';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import React from 'react'
import { redirect } from 'next/navigation';

async function page() {
    const queryClient = getQueryClient();
    const headersList = await headers();
    const payload = await getPayload({ config: configPromise });
    const session = await payload.auth({ headers: headersList });

    if (session.user) {
        void queryClient.prefetchInfiniteQuery(trpc.library.getMany.infiniteQueryOptions({
            limit: 10
        }));
        
    }
    if(!session.user) {
        return redirect('/sign-in')
    }

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
                <LibraryView/>
        </HydrationBoundary>
    );
}

export default page;
