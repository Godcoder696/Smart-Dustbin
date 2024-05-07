import React from 'react';
import { IoRefresh } from "react-icons/io5";
import SearchBar from './SearchBar';
import SortBy from './SortBy';
import Route from './Route';

function SearchBox() {
  return (
    <div className='mt-10 w-50 h-16 flex items-center justify-between'>
      <SearchBar/>
      <SortBy/>
      <button className=''>
        <IoRefresh size={30}/>
      </button>
      
      <Route></Route>
    </div>
  )
}

export default SearchBox
