import React, { useEffect, useState } from 'react'
import SearchBox from './Components/SearchBox';
import ResultBox from './Components/ResultBox';
import ResultControls from './Components/ResultControls';
import axios from 'axios';
import Loader from './Components/Loader';
import { ContextState } from '../../Context/ContextProvider';

function Index() {
  let [loading,setLoading]= useState(false);
  const {data,setData}= ContextState();

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
  
  useEffect(()=>{
    fetchData();
  },[])

  useEffect(()=>{
    setData(data);
  },[data])

  return (
    <>
      <div className='flex-col h-full w-full'>
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
