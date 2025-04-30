import CheckoutNavbar from '@/components/Cart/navbar';
import Footer from '@/components/Tenants/Footer';
import React from 'react'

type Props = {
    children: React.ReactNode,
    params: Promise<{slug: string}>;
}

const layout = async ({children,params}: Props) => {
    const {slug} = await params;
  return (
    <div className='min-h-screen bg-[#f4f4f0] flex flex-col'>
        <CheckoutNavbar slug={slug} />
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