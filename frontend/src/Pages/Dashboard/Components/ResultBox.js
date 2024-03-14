import React, { useState } from 'react'
import ResultCard from './ResultCard'

function ResultBox(params) {
  let [data,setData]= useState(params.data);

  return (
    <>
      <div className='h-svh mt-3 p-4 border-solid border-2 border-gray-300'>
        <div className='h-full overflow-y-scroll'>
          {
            data.map((obj,id)=>{
              return (
                <ResultCard key={id} data={obj}/>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default ResultBox
