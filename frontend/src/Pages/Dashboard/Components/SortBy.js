import React from 'react'

function SortBy() {
  return (
    <>
      <div className='h-full w-1/6 border-solid border-gray-300 border-2 bgColor flex justify-evenly items-center'>
        <h5 className='w-3/6 text-center'>Sort by</h5>
        <div className='h-full w-1 bg-gray-300'></div>
        {/* <label for="sort" className='w-3/6 text-center'>All</label> */}
        <select name="sort" id="sort" className='h-full w-3/6 text-center bg-transparent cursor-pointer hover:bg-gray-300'>
          <option value="all">All</option>
          <option value="all">Filled</option>
          <option value="all">Empty</option>
        </select>
      </div>
    </>
  )
}

export default SortBy
