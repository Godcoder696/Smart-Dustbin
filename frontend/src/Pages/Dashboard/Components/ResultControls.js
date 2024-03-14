import React from 'react'
import ResultNav from './ResultNav'

function ResultControls(params) {
  return (
    <>
        <div className='mt-3 flex justify-between w-full items-center'>
            <ResultNav/>
            <h2>Results Found: {params.data.length} </h2>
        </div> 
    </>
  )
}

export default ResultControls
