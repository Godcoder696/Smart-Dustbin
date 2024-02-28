import React from 'react'
import ResultCard from './ResultCard'

function ResultBox() {
  return (
    <>
      <div className='h-svh mt-3 p-4 border-solid border-2 border-gray-300'>
        <div className='h-full overflow-y-scroll'>
          <ResultCard/>
          <ResultCard/>
          <ResultCard/>
          <ResultCard/>
        </div>
      </div>
    </>
  )
}

export default ResultBox
