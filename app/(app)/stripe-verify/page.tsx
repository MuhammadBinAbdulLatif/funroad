'use client'

import { useTRPC } from '@/trpc/client'
import { useMutation } from '@tanstack/react-query'
import { LoaderIcon } from 'lucide-react'
import React, { useEffect } from 'react'

const Pag = () => {
    const trpc = useTRPC()
    const {mutate: verify} = useMutation(trpc.auth.verify.mutationOptions({
        onSuccess: (data) => {
            window.location.href = data.url
        },
        onError: ()=> {
            window.location.href = '/'
        }
    }))
    useEffect(()=> {
        verify()
    }, [verify])
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <LoaderIcon className='animate-spin text-black' />
    </div>
  )
}

export default Pag
