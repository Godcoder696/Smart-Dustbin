import React from 'react'
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
import { IoMdLocate } from "react-icons/io";

function Graph() {
    const data={
        labels:["Total","Dry Waste","Wet Waste"],
        datasets:[
            {
                label: "filled",
                data: [100,20,30],
                backgroundColor:["#f44336","#9c27b0","#03a9f4"],
                borderColor:"#f44336",
                borderWidth: 1
            }
        ]
    }
  return (
    <div className='w-5/6 flex-col items-center p-5'>
        <button className='px-10 py-4 bg-green-400 hover:bg-green-500 rounded-xl 
            text-xl font-bold flex items-center '>
            <IoMdLocate size={27} color='white'/>
            <h5 className='text-white ml-4'>Locate</h5>
        </button>
        <Bar data={data}></Bar>
    </div>
  )
}

export default Graph
