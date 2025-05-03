'use client'
import { useTRPC } from '@/trpc/client';
import {  useSuspenseQuery } from '@tanstack/react-query';
import React from 'react'
import ReviewFrom from './review-form';

type Props = {
    productId: string;
}

const ReviewSidebar = ({productId}: Props) => {
    const trpc = useTRPC();
    const {data} = useSuspenseQuery(trpc.reviews.getOne.queryOptions({
        productId
    }))
  return (
    <ReviewFrom productId={productId} initialData={data} />
)
}

export default ReviewSidebar