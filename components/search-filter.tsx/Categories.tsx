import { Category } from '@/payload-types'
import React from 'react'
import CategoryDropDown from './category-dropdown'

type Props = {
    data: any
}

const Categories = ({data}: Props) => {
  return (
    <div className='relative w-full'>
        <div className='flex flex-nowrap'>
        {data.map((category: Category) => (
            <div key={category.id}>
                <CategoryDropDown category={category} isActive={false} isNavigationHovered={false} />
            </div>
        ))}
        </div>
    </div>  
  )
}

export default Categories