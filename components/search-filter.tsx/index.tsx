import React from 'react'
import SearchInput from './search-input'
import Categories from './Categories'
import { modifiedCategory } from '@/types/CustomCategory'

type Props = {
  data: modifiedCategory[]
}
const SearchFilter = ({data}: Props) => {
  return (
    <div className='px-4 lg:px-12 py-2  border-b flex flex-col gap-2 w-full '>
      <SearchInput data={data} />
      <div className='hidden lg:block'>
      <Categories data={data} />
      </div>
    </div>
  )
}

export default SearchFilter