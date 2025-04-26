'use client'
import React, { useRef, useState } from 'react'
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { useDropdownPosition } from './use-dropdown-position';
import SubCategoryMenu from './sub-category-menu';
import { modifiedCategory } from '@/types/CustomCategory';
import Link from 'next/link';

type Props = {
    category: modifiedCategory;
    isActive?: boolean;
    isNavigationHovered?: boolean;
}

const CategoryDropDown = ({category,isActive,isNavigationHovered}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropDownRef = useRef<HTMLDivElement>(null);
    const {getDropdownPosition} = useDropdownPosition(dropDownRef)
    const onMouseEnter = () => {
        if(category.subcategories) {
            setIsOpen(true)
        }
    };
    const onMouseLeave = () => {
        setIsOpen(false)
    };
    const dropDownPosition = getDropdownPosition();
  return (
   <div className='relative' ref={dropDownRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <div className='relative'>

    <Button variant={'elevated'} className={cn('h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary hover:text-black', isActive && !isNavigationHovered && 'bg-white border-primary', isOpen && 'bg-white border-primary shadow-[4px_4px_0px_0px] -translate-x-[4px] -translate-y-[4px]' ) }>

    <Link href={`/${category.slug === 'all' ? '': category.slug}`} className='flex items-center'>
    {category.name}
    </Link>
   </Button>
   </div>
   
   {category.subcategories && category.subcategories.length > 0 && (
    <div className={cn('opacity-0 absolute -bottom-3 border-b-[10px] w-0 h-0 border-l-[10px] border-r-[10px] border-l-transparent border-r-transparent border-b-black left-1/2 -translate-x-1/2 ', isOpen && 'opacity-100',)} />
   )}
   <SubCategoryMenu category={category} isOpen={isOpen} position={dropDownPosition} />
   
   </div>
  )
}

export default CategoryDropDown