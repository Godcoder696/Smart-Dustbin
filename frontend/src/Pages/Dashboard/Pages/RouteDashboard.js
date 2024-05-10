import React, { useEffect, useState } from 'react'
import {useJsApiLoader, GoogleMap, Marker, Autocomplet} from '@react-google-maps/api';
import Loader from '../Components/Loader';
import { FaLocationDot } from "react-icons/fa6";


function RouteDashboard() {
  const [crntLat,setCrntLat]= useState(0);
  const [crntLng,setCrntLng]= useState(0);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      setCrntLat(position.coords.latitude);
      setCrntLng(position.coords.longitude);
    })
  },[])

  const center={
    lat: 28.5036265,
    lng: 77.0472801
  }
  
  const {isLoaded}= useJsApiLoader({
    googleMapsApiKey: "AIzaSyBqUiK-pdOlYC_2IORnM9-hjPP8ZBEpmXo",
    // libraries: ['places']
  })

  return (
    <div className='flex justify-evenly items-center'>
      <div className='h-screen w-3/5 bg-gray-300 rounded-md border-[#50505077] border-2'>
        {
          !isLoaded?
          <Loader></Loader>
          :
          <GoogleMap 
            center={center} 
            zoom={15} 
            mapContainerStyle={{
              width:'100%',
              height:'100%'
            }}
            options={{
              zoomControl: false,
              fullscreenControl: false,
              streetViewControl: false,
              mapTypeControl: false
            }}
          >
            <Marker position={center}/>
          </GoogleMap>
        }
      </div>
      <div className='h-screen w-2/6 rounded-md flex flex-col'>
        <div className='h-3/5 bg-gray-200 flex flex-col justify-evenly px-4 border-[#50505077] border-2'>
          <div className='font-semibold text-xl'>
            Coordinates: {crntLat+", "+crntLng}
          </div>
          <div className=' flex items-center'>
            <FaLocationDot size={35}/>
            <div className='ml-3 overflow-hidden text-sm font-thin border-2 border-[#50505077] p-2 rounded-md w-full'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci aut, ab consequatur illo consequuntur!
            </div>
          </div>
          <div className='flex items-center'>
            <FaLocationDot size={35}/>
            <div className='ml-3 overflow-hidden text-sm font-thin border-2 border-[#50505077] p-2 rounded-md w-full'>
              Select a location from below....
            </div>
          </div>
          <div className='bg-sky-300 text-center py-2 font-bold text-white cursor-pointer hover:bg-sky-500 rounded-md'>
            Dustbin Picked!
          </div>
        </div>
        <div className='
          mt-3 h-5/6 bg-gray-200 overflow-y-scroll border-[#50505077] border-2
          flex flex-col
          p-3
        '>
          <div className=' bg-[#d8d8d8] rounded-sm flex flex-col hover:bg-[#c7c7c7] cursor-pointer p-4 justify-between mt-2'>
            <div className='font-bold text-xl'>
              Dustbin Name
            </div>
            <div className='flex items-center mt-3'>
              <FaLocationDot size={25}/>
              <div className='ml-3 overflow-hidden text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci aut, ab consequatur illo consequuntur!
              </div>
            </div>
            <div className=' flex items-center justify-between'>
              <div className='font-semibold text-sm mt-6 w-full flex justify-between'>
                <span>Distance: 8kms</span>
                <span>Duration: 1hrs</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default RouteDashboard
