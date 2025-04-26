import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import { Metadata } from 'next'
import React from 'react'

type Props = {
    children: React.ReactNode
}
export const metadata: Metadata = {
    title: "About funroad | Multi-tenant Digital Product Marketplace",
    description:
      "Learn about funroad, the all-in-one platform for creators to build, sell, and grow their digital product businesses.",
  }
const layout = ({children}: Props) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className='flex-1 bg-[#f4f4f0] py-4'>
        {children}
        </div>
        <Footer />
    </div>
  )
}

export default layout