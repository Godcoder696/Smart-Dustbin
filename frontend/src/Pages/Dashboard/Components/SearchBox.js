import React from 'react';
import { IoRefresh } from "react-icons/io5";
import SearchBar from './SearchBar';
import SortBy from './SortBy';
import Route from './Route';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { BiAnalyse } from "react-icons/bi";

function SearchBox() {
  return (
    <div className='mt-10 w-50 h-16 flex items-center justify-between space-x-4'>
      <SearchBar/>
      <SortBy/>
      <button className=''>
        <IoRefresh size={30}/>
      </button>
      <Link to='/dashboard/analysis' className='px-7 py-4 bg-sky-500 hover:bg-sky-700 text-white rounded-lg font-semibold flex items-center justify-evenly'>
        <BiAnalyse size={24} />
        <span className='ml-3'>Analyse</span>
      </Link>
      <Route></Route>
    </div>
  )
}

export default SearchBox
