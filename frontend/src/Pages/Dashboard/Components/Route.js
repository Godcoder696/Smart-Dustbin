import React from 'react'
import { RiAiGenerate } from 'react-icons/ri'
import { Link, Redirect } from 'react-router-dom/cjs/react-router-dom'

function Route() {

  return (
    <>
      <Link to='/r' className='px-7 py-4  bg-sky-500 hover:bg-sky-700 text-white rounded-lg font-semibold flex items-center justify-evenly'>
      <RiAiGenerate size={24} />
        <span className='ml-3'>GET ROUTE</span>
      </Link>
    </>
  )
}

export default Route
