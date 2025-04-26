
import React from 'react'
import CategoryDropDown from './category-dropdown'
import { modifiedCategory } from '@/types/CustomCategory'

type Props = {
    data: modifiedCategory[]
}

const Categories = ({data}: Props) => {
  return (
    <div className='relative w-full'>
        <div className='flex flex-nowrap'>
        {data.map((category) => (
            <div key={category.id}>
                <CategoryDropDown category={category} isActive={false} isNavigationHovered={false} />
            </div>
        ))}
        </div>
    </div>  
  )
}

export default Categories