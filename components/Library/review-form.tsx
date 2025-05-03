'use client'
import { ReviewformSchema, ReviewsGetOneOutput } from '@/types/review-types';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { StarPicker } from './star-picker';
import { useTRPC } from '@/trpc/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

type Props = {
    productId: string;
    initialData?: ReviewsGetOneOutput
}

const ReviewFrom = ({productId,initialData}: Props) => {
    const trpc = useTRPC()
    const queryClient = useQueryClient()
    const createReview = useMutation(trpc.reviews.create.mutationOptions({
        onSuccess: ()=> {
            toast.success('Review submitted successfully')
            queryClient.invalidateQueries(trpc.reviews.getOne.queryOptions({
                productId,

            }))
            setIsPreview(true)
        },
        onError: (error)=> {
            toast.error(error.message)
        }
    }))
    const updateReview = useMutation(trpc.reviews.update.mutationOptions({
        onSuccess: ()=> {
            toast.success('Review updated successfully')
            queryClient.invalidateQueries(trpc.reviews.getOne.queryOptions({
                productId,

            }))
            setIsPreview(true)
        },
        onError: (error)=> {
            toast.error(error.message)
        },
    }))
    const [isPreview, setIsPreview] = useState(!!initialData)
    const form = useForm<z.infer<typeof ReviewformSchema>>({
        resolver: zodResolver(ReviewformSchema),
        defaultValues: {
            rating: initialData?.rating ?? 0,
            description: initialData?.description ?? '',
        }
    })
    const onSumbit = (data: z.infer<typeof ReviewformSchema>)=> {
        if(initialData) {
            updateReview.mutate({
                reviewId: initialData.id,
                rating: data.rating,
                description: data.description
            })
        } else {
            createReview.mutate({
                productId,
                rating: data.rating,
                description: data.description
            })
        }
    }
  return (
    <Form {...form}>
        <form className='flex flex-col gap-y-4' onSubmit={form.handleSubmit(onSumbit)}>
            <p className='font-medium'>
                {isPreview ? 'Your rating:': 'Liked it? Give it a rating'}
            </p>
            <FormField control={form.control} name='description' render={({field})=> (
                <FormItem>
                    <FormControl>
                        <Textarea placeholder='Want to leave a review?' disabled={isPreview} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                
            )} />
             <FormField control={form.control} name='rating' render={({field})=> (
                <FormItem>
                    <FormControl>
                        <StarPicker value={field.value} onChange={field.onChange} disabled={isPreview} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                
            )} />
            {!isPreview && (
                <Button  variant={'elevated'} disabled={createReview.isPending || updateReview.isPending} type='submit' size={'lg'} className='bg-black text-white hover:bg-pink-400 hover:text-primary'>
                    {createReview.isPending || updateReview.isPending ? (
                        <div className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Loading...
                        </div>
                    ) : initialData ? 'Update review' : 'Post review'}
                </Button>
            )}
            {isPreview && (
                <Button disabled={updateReview.isPending} onClick={()=> setIsPreview(false)} size={'lg'} type='button' variant={'elevated'} className='w-fitt'>
                    Edit
                </Button>
            )}
        </form>
    </Form>
  )
}

export default ReviewFrom