import React from 'react'
import { Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbList,BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb'
import Link from 'next/link'
type Props = {
    activeCategory: string
    activeCategoryName: string | null;
    activeSubCategoryName: string | null;

}

const BreadCrumbNavigation = ({activeCategory,activeCategoryName,activeSubCategoryName}: Props) => {
    if(!activeCategoryName || activeCategory === 'all') return null

  return (
    <Breadcrumb>
    <BreadcrumbList>
    {activeSubCategoryName ? (
        <>
        <BreadcrumbItem>
        <BreadcrumbLink asChild className='text-lg font-medium underline text-primary'>
        <Link href={`/${activeCategory}`}>
        {activeCategoryName} 
        </Link>
        </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className='text-primary text-lg font-medium' >
        /
        </BreadcrumbSeparator>
        <BreadcrumbItem>
        <BreadcrumbPage className='text-lg font-medium  text-primary'>
       {activeSubCategoryName}
        </BreadcrumbPage>
        </BreadcrumbItem>
        </>
        
    ): (
        <BreadcrumbItem>
        <BreadcrumbLink asChild className='text-lg font-medium underline text-primary'>
        <Link href={`/${activeCategory}`}>
        {activeCategoryName} 
        </Link>
        </BreadcrumbLink>
        </BreadcrumbItem>
    )}
    </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadCrumbNavigation