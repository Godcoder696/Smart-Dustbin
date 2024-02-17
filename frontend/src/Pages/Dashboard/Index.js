import React from 'react'
import { MdRefresh } from "react-icons/md";

function Index() {
  return (
    <>
      <div className='flex flex-col items-center h-full w-full bg-red-400'>
        <span className='w-5/6 text-left font-semibold text-5xl'>
          Smart Waste Management
        </span>

        <nav className='mt-16 w-5/6 flex justify-around items-center'>
          <span>
            <MdRefresh size={"30px"}/>
          </span>
          <div className='w-3/5 border-white border-2 h-12'>
            
          </div>
          <span>All</span>
        </nav>
      </div>
    </>
  )
}

export default Index
