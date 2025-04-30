import React from 'react'
import { Button } from '../ui/button';
import { CircleXIcon } from 'lucide-react';

type Props = {
    total: number 
    onCheckout: () => void;
    isCanceled?: boolean;
    isPending?: boolean;
}

const CheckoutSidebar = ({onCheckout,total,isCanceled,isPending}: Props) => {
  return (
    <div className='border rounded-md overflow-hidden bg-white flex flex-col'>
        <div className='flex items-center justify-between p-4 border-b'>
            <h4 className='font-medium'>
                Total
            </h4>
            <p className='font-medium text-lg'>
            {new Intl.NumberFormat('en-Us', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(total)}
            </p>
        </div>
        <div className='p-4 flex items-center justify-center'>
            <Button variant={'elevated'} onClick={onCheckout} disabled={isPending} size={'lg'} className='text-base w-full text-white bg-primary hover:bg-pink-400 hover:text-primary'>
                Checkout
            </Button>
        </div>
        {isCanceled && (
            <div className='p-4 flex justify-center items-center border-1'>
                <div className='bg-red-100 border w-full border-red-400 font-medium px-4 py-3 rounded flex items-center'>
                    <div className='flex items-center'>
                        <CircleXIcon className='size-6 mr-2 fill-red-500 text-red-100' />
                        <span >
                            Checkout failed. Please try again
                        </span>
                    </div>

                </div>
            </div>
        )}
    </div>
  )
}

export default CheckoutSidebar