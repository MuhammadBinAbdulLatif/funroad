'use client'
import {  BookmarkCheckIcon, ListFilterIcon, SearchIcon } from 'lucide-react';
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { modifiedCategory } from '@/types/CustomCategory';
import CategoriesSidebar from './categories-sidebar';
import { Button } from '../ui/button';
import { useTRPC } from '@/trpc/client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

type Props = {
    disabled?: boolean;
    data?: modifiedCategory[]
}

const SearchInput = ({disabled, data}: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const trpc = useTRPC()
    const session = useQuery(trpc.auth.session.queryOptions())
  return (
    <div className='flex items-center gap-2 w-full '>
      <CategoriesSidebar data={data} open={isSidebarOpen} onOpenChange={setIsSidebarOpen}  />
        <div className='relative w-full'>
            <SearchIcon className='absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500' />
            <Input className='pl-8' placeholder='Search Products' disabled={disabled} />
        </div>
        <Button variant={'elevated'} className='size-12 shrink-0 flex lg:hidden ' onClick={() => setIsSidebarOpen(true)}>
          <ListFilterIcon className='size-4' />
        </Button>
        {session.data?.user && (
          <Link href={'/library'}>
            <Button variant={'elevated'} className='flex items-center gap-2'>
              <BookmarkCheckIcon className='mr-2' />
              Library
            </Button>
          </Link>
        )}
    </div>
  )
}

export default SearchInput