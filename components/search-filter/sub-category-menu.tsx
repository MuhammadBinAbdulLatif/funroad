
import { modifiedCategory } from '@/types/CustomCategory';
import Link from 'next/link';
import React from 'react'

type Props = {
    category: modifiedCategory;
    isOpen: boolean;
    position: {top: number, left: number}
}

const SubCategoryMenu = ({category,isOpen,position}: Props) => {
 if(!isOpen || !category.subcategories || (category.subcategories.length === 0)) return null
 const backgroundColor = category.color || '#f5f5f5'
 return (
    <div className='fixed z-50' style={{top: position.top, left: position.left}}>
{/* Invisble brigdge */}
<div className='h-3 w-60' />
<div className='w-60 text-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[2px] -translate-y-[2px] overflow-hidden border' style={{backgroundColor: backgroundColor}}>
    {category.subcategories?.map((subcategory) => (
        <Link key={subcategory.slug} href={`/${category.slug}/${subcategory.slug}`} className='w-full text-left p-4  hover:bg-black hover:text-white flex items-center '>
            {subcategory.name}
        </Link>
    ))}

</div>
    </div>
 )
}

export default SubCategoryMenu