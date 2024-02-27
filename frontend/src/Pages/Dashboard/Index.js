import React from 'react'

import SearchBox from './Components/SearchBox';
import ResultBox from './Components/ResultBox';
import ResultControls from './Components/ResultControls';

function Index() {
  return (
    <>
      <div className='flex-col h-full w-full'>
        <h1 className='text-3xl font-semibold'>SMART WASTE MANAGEMENT</h1>
        <h3 className='mt-10 text-xl font-semibold'>Dashboard</h3>
        <SearchBox/>
        <ResultControls/>
        <ResultBox/>
      </div>
    </>
  )
}

export default Index
