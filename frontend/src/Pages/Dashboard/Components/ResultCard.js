import React from 'react'

function ResultCard(params) {
  return (
    <>
      <a href="/card:1">
        <div className='h-28 bgColor border-solid border-gray-300 border-2 mt-3 flex items-center p-3 justify-between hover:bg-gray-300 '>

          <div className='flex-col'>

            <h2 className='text-2xl font-semibold'>{params.data.Dustbin_Id}</h2>
            
            <div className='text-xl self-end mt-2 flex items-center'>

              <h4>Status:</h4>

              <div className='ml-4 h-5 w-5 bg-red-600 rounded-md'></div>

            </div>

          </div>

          <h2 className='self-end text-gray-500'>
            Pincode: {params.data.pincode} | lat: {params.data.latitude} long: {params.data.longitude}
          </h2>

        </div>
      </a>
    </>
  )
}

export default ResultCard
