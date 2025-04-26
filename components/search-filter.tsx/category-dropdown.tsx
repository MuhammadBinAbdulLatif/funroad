'use client'
import { Category } from '@/payload-types'
import React, { useRef, useState } from 'react'
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { useDropdownPosition } from './use-dropdown-position';
import SubCategoryMenu from './sub-category-menu';

type Props = {
    category: Category;
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

    <Button variant={'elevated'} className={cn('h-8 px-2 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary hover:text-black', isActive && !isNavigationHovered && 'bg-white border-primary' )}>
    {category.name}
   </Button>
   </div>
   {category.subcategories && category.subcategories.length > 0 && (
    <div className={cn('opacity-0 absolute -bottom-3 border-b-[10px] w-0 h-0 border-l-[10px] border-r-[10px] border-l-transparent border-r-transparent border-b-black left-1/2 -translate-x-1/2 ', isOpen && 'opacity-100')} />
   )}
   <SubCategoryMenu category={category} isOpen={isOpen} position={dropDownPosition} />
   
   </div>
  )
}

export default CategoryDropDown