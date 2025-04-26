import React from 'react'
import SearchInput from './search-input'
import Categories from './Categories'

type Props = {
  data: any
}
const SearchFilter = ({data}: Props) => {
  return (
    <div className='px-4 lg:px-12 py-2  border-b flex flex-col gap-2 w-full '>
      <SearchInput />
      <Categories data={data} />
    </div>
  )
}

export default SearchFilter