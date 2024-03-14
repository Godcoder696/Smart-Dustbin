import React from 'react'
import LoaderJSON from '../../../Miscellaneous/Loader-JSON.json'
import Lottie from 'react-lottie'

function Loader() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoaderJSON,
        renderer: 'svg'
    }
  return (
    <div className='h-svh mt-3 p-4 border-solid border-2 border-gray-300 items-center justify-center flex'>
          <Lottie
            options={defaultOptions}
            height={200}
            width={200}
          />
      </div>
  )
}

export default Loader
