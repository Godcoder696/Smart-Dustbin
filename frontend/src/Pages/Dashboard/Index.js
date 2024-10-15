import React, { useEffect, useState } from 'react'
import SearchBox from './Components/SearchBox';
import ResultBox from './Components/ResultBox';
import ResultControls from './Components/ResultControls';
import axios from 'axios';
import Loader from './Components/Loader';
import { ContextState } from '../../Context/ContextProvider';
import { RequestType, geocode, setDefaults } from 'react-geocode';

function Index() {
  let [loading,setLoading]= useState(false);
  const {data,setData}= ContextState();
  const {crntLat,setCrntLat}= ContextState();
  const {crntLng, setCrntLng}= ContextState();
  const {crntLocation,setCrntLocation}= ContextState();

  useEffect(()=>{
    fetchData();
    setDefaults({
      key: "", 
      language: "en",
      region: "es"
    })
    getLocation();
  },[])

  const fetchData= async ()=>{
    setLoading(true);

    try {
      const result= await axios.get("/data");
      setData(result.data);
    } catch (error) {
      console.log("Error occurred while fetching results!",error);
    }

    setLoading(false);
  }

  let getLocation= async ()=>{
    await navigator.geolocation.getCurrentPosition((position)=>{
      setCrntLat(position.coords.latitude);
      setCrntLng(position.coords.longitude);
    })
  }

  useEffect(()=>{
    setData(data);
    setCrntLat(crntLat);
    setCrntLng(crntLng);
    getAddress();
  },[data,crntLat,crntLng])

  let getAddress= async ()=>{
    try {
      let {results} = await geocode(RequestType.LATLNG, `${crntLat},${crntLng}`);
      const address = results[0].formatted_address;
      setCrntLocation(address);
      console.log(crntLocation);
      getAddresses();
    } catch (error) {
      console.log(error);
    }
  }

  let getAddresses= async ()=> {
    for(let i=0;i<data.length;i++){
      try {
        let {results}= await geocode(RequestType.LATLNG, `${data[i].latitude},${data[i].longitude}`);
        let placeAdress= results[0].formatted_address;
        console.log(results[0].formatted_address);
        data[i]["address"]= placeAdress;
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <div className='flex-col h-full w-full space-y-3'>
        <h1 className='text-3xl font-semibold'>SMART WASTE MANAGEMENT</h1>
        <h3 className='mt-10 text-xl font-semibold'>Dashboard</h3>
        <SearchBox/>
        {
          loading?
          <Loader/>
          :
          <>
            <ResultControls data= {data}/>
            <ResultBox data= {data}/>
          </>
        }
      </div>
    </>
  )
}

export default Index
