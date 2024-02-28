import React from 'react'
import ResultNav from './ResultNav'

function ResultControls() {
  return (
    <>
        <div className='mt-3 flex justify-between w-full items-center'>
            <ResultNav/>
            <h2>Results Found: 100 </h2>
        </div> 
    </>
  )
}

export default ResultControls
