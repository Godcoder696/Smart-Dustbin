import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

function SearchBar() {
  return (
    <div className='bgColor w-4/6 h-full flex border-solid border-gray-300 border-2 justify-between items-center px-3'>

        <input type="text" className='bg-transparent h-4/5 w-4/6 p-4 ' placeholder='Enter PIN'/>

        <button className='bg-sky-500 hover:bg-sky-700 h-4/5 w-1/5 text-white flex items-center justify-evenly px-7 rounded-lg'>

            <IoSearchOutline size={30}/>

            <h5 className='text-lg font-semibold'>SEARCH</h5>

        </button>
    </div>
  )
}

export default SearchBar
