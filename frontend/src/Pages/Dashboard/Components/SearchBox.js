import React from 'react'
import SearchBar from './SearchBar'
import SortBy from './SortBy'
import { IoRefresh } from "react-icons/io5";

function SearchBox() {
  return (
    <div className='mt-10 w-50 h-16 flex items-center'>
      <SearchBar/>
      <SortBy/>
      <button className='ml-5'>
        <IoRefresh size={30}/>
      </button>
    </div>
  )
}

export default SearchBox
