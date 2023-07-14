import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
function TimingComponent() {

    let doctors=useSelector(state=>state)
    console.log("doctpepepep",doctors)
    


    return (
    <div>
    <h2 className="text-2xl font-semibold mb-4  pt-4"></h2>
          <table className="min-w-full table-auto">
          <thead className="justify-between">
              <tr className="bg-gray-500">
                {/* <th className="px-16 py-2 text-left">
                  <span className="text-gray-300">index</span>
                </th> */}
                <th className="px-16 py-2 text-left">
                  <span className="text-gray-300">Day</span>
                </th>
               
                <th className="px-16 py-2 text-left">
                  <span className="text-gray-300">StartTime</span>
                </th>
                <th className="px-16 py-2 text-left">
                  <span className="text-gray-300">EndTime</span>
                </th>
                <th className="px-16 py-2 text-left">
                  <span className="text-gray-300">Edit</span>
                </th>
                
              </tr>
            </thead>
            <tbody className="bg-gray-200">
                
               
                {doctors.length>0 && doctors.doctorTimings.map((doctor)=>{

    
              <tr className="bg-white border-4 border-gray-200">
               
                <td>
                  <span className="text-center ml-2 font-semibold">name</span>
                </td>
               
                <td className="px-16 py-2">
                  <span>email</span>
                </td>
                <td className="px-16 py-2">
                  <span>dateofbirth</span>
                </td>
                <td className="px-16 py-2">
                  <span className="text-green-500">
           
                    gender
                  </span>
                </td>
       
              </tr>
    
    
                
    
})}
    
      
            </tbody>
          </table>
        </div>
  )
}

export default TimingComponent
