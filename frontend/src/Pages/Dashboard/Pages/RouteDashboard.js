import { DirectionsRenderer, GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { ContextState } from '../../../Context/ContextProvider';
import Loader from '../Components/Loader';


function RouteDashboard() {
  let [loading,setLoading]= useState(true);
  const [directionsResponse,setDirectionsResponse]= useState(null);
  const [index,setIndex]= useState()
  // const [map,setMap]= useState(/** @type google.maps.Map */ (null));

  let {data}= ContextState();
  const {crntLocation,setCrntLocation}= ContextState();
  const {selectedLocation,setSelectedLocation}= ContextState();
  const {crntLat}= ContextState();
  const {crntLng}= ContextState();

  window.onbeforeunload = function() { 
    window.setTimeout(function () { 
      window.location = '/dashboard';
    }, 0); 
    window.onbeforeunload = null; 
  }
  const center={
    lat: crntLat,
    lng: crntLng
  }
  let calculateRoute= async ()=>{
    try {
      // eslint-disable-next-line no-undef
      // const directionsService= new google.maps.DirectionsService();
      // for(let i=0;i<data.length;i++){
      //   const result = await directionsService.route({
      //     origin: crntLocation,
      //     destination: data[i].address,
      //     // eslint-disable-next-line no-undef
      //     travelMode: google.maps.TravelMode.DRIVING
      //   })
      //   data[i]["distance"]=result.routes[0].legs[0].distance.text;
      //   data[i]["duration"]=result.routes[0].legs[0].duration.text;
      // }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(()=>{
    calculateRoute();
  },[])

  let getRoute= async()=>{
    setDirectionsResponse(null);
    try {
      // eslint-disable-next-line no-undef
      // const directionsService= new google.maps.DirectionsService();
      // const result = await directionsService.route({
      //   origin: crntLocation,
      //   destination: selectedLocation,
      //   // eslint-disable-next-line no-undef
      //   travelMode: google.maps.TravelMode.DRIVING
      // })
      // setDirectionsResponse(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getRoute();
  },[selectedLocation])
  
  const {isLoaded}= useJsApiLoader({
    googleMapsApiKey: "",
    libraries: ['routes']
  })

  let dustbinPicked=()=>{
    setCrntLocation(selectedLocation);
    setSelectedLocation("");
    setDirectionsResponse(null)
    data.splice(index,1);
  }

  return (
    loading?
    <Loader></Loader>
    :
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
            {
              directionsResponse && <DirectionsRenderer directions={directionsResponse}/>
            }
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
              {
                crntLocation
              }
            </div>
          </div>
          <div className='flex items-center'>
            <FaLocationDot size={35}/>
            <div className='ml-3 overflow-hidden text-sm font-thin border-2 border-[#50505077] p-2 rounded-md w-full'>
              {
                selectedLocation===""?
                "Select a location from below...."
                :
                selectedLocation
              }
            </div>
          </div>
          <div className='bg-sky-300 text-center py-2 font-bold text-white cursor-pointer hover:bg-sky-500 rounded-md'
            onClick={()=>{dustbinPicked()}}
          >
            Dustbin Picked!
          </div>
        </div>
        <div className='
        mt-3 h-5/6 bg-gray-200 overflow-y-scroll border-[#50505077] border-2
        flex flex-col
        p-3
      '>
        {
          data.map((dustbin,key)=>{
            return (
            <div className=' bg-[#d8d8d8] rounded-sm flex flex-col hover:bg-[#c7c7c7] cursor-pointer p-4 justify-between mt-2' key={key} 
              onClick={()=>{
                setSelectedLocation(dustbin.address);
                setIndex(key);
              }}
            >
              <div className='font-bold text-xl'>
                {dustbin.Dustbin_Id}
              </div>
              <div className='flex items-center mt-3'>
                <FaLocationDot size={25}/>
                <div className='ml-3 overflow-hidden text-xs'>
                  {
                    dustbin.address
                  }
                </div>
              </div>
              <div className=' flex items-center justify-between'>
                <div className='font-semibold text-sm mt-6 w-full flex justify-between'>
                  <span>Distance: {dustbin.distance}</span>
                  <span>Duration: {dustbin.duration}</span>
                </div>
              </div>
            </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default RouteDashboard
