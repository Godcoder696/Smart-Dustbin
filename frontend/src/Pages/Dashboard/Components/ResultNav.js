import React from 'react'
import { GrFormPrevious,GrFormNext } from "react-icons/gr";

function ResultNav() {
  return (
    <>
        <div className='h-12 w-48 border-solid border-gray-300 border-2 bgColor flex justify-evenly items-center'>
            <button className='w-2/6 bg-gray-300 h-full flex items-center justify-center hover:bg-gray-400'>
                <GrFormPrevious size={30}/>
            </button>      

            <div className='w-2/6 flex justify-center items-center'>
                1/1
            </div>

            <button className='w-2/6 bg-gray-300 h-full flex items-center justify-center hover:bg-gray-400'>
                <GrFormNext size={30}/>
            </button>
        </div>
    </>
  )
}

export default ResultNav
