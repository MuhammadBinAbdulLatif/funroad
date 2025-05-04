'use client'

import { TriangleAlertIcon } from "lucide-react"

const  errro = () => {
    return (
        <div className='border my-10 border-black border-dashed flex items-center justify-center p-5 flex-col gap-y-4 bg-white w-full rounded-lg'>
            <TriangleAlertIcon />
            <p className='text-base font-medium'>
                Product is no longer available
            </p>
        </div>
    )
}

export default  errro 
