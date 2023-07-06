import React, { useState,useLayoutEffect } from 'react'
import useFetch from '../../../hooks/useFetch'




function Patients() {

  let [patients,setPatients]=useState([])
  const getRequest=useFetch('GET')

  
    

useLayoutEffect(()=>{
  getRequest('/doctor/get-patients').then(res=> {
      console.log("patients",res);
      console.log("res1444444345",res);

      setPatients(res);
  })
},[])

  return (
    // <!-- component -->

<div>
<h2 className="text-2xl font-semibold mb-4  pt-4">PATIENTS LIST</h2>
      <table className="min-w-full table-auto">
      <thead className="justify-between">
          <tr className="bg-gray-500">
            <th className="px-16 py-2 text-left">
              <span className="text-gray-300"></span>
            </th>
            <th className="px-16 py-2 text-left">
              <span className="text-gray-300">Name</span>
            </th>
           
            <th className="px-16 py-2 text-left">
              <span className="text-gray-300">email</span>
            </th>
            <th className="px-16 py-2 text-left">
              <span className="text-gray-300">DOB</span>
            </th>
            <th className="px-16 py-2 text-left">
              <span className="text-gray-300">Gender</span>
            </th>
            <th className="px-16 py-2 text-left">
              <span className="text-gray-300">Prescription</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
            {
           patients &&  patients.map((patient,index)=>{
            return(


          <tr key={patient._id} className="bg-white border-4 border-gray-200">
            <td className="px-16 py-2 flex flex-row items-center">
              {/* <img
                className="h-8 w-8 rounded-full object-cover"
                src=
                alt=""
              /> */}
               <div class="flex-shrink-0">
                   {index + 1}
                 </div>
            </td>
            <td>
              <span className="text-center ml-2 font-semibold">{patient.firstName} {patient.lastName}</span>
            </td>
           
            <td className="px-16 py-2">
              <span>{patient.email}</span>
            </td>
            <td className="px-16 py-2">
              <span>{patient.dateOfBirth}</span>
            </td>
            <td className="px-16 py-2">
              <span className="text-green-500">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg> */}
                {patient.gender}
              </span>
            </td>
            <td className="px-16 py-2">
              <button className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black">
                Open Link
              </button>
            </td>
          </tr>


            )


              })
            }


  
        </tbody>
      </table>
    </div>





  )
}

export default Patients


