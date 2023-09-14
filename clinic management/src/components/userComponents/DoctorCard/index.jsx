import React,{useLayoutEffect, useState} from 'react';
import useFetch from '../../../hooks/useFetch';
import { useDispatch,useSelector } from 'react-redux';


function DoctorsList() {
   
const [doctors,setDoctors]=useState([])

    const getRequest=useFetch('GET')
useLayoutEffect(()=>{

  try
  {

    getRequest('/user/experience-doctors').then(res=>{
        console.log(res);
      console.log("lkdcldscsdckok");
      console.log(res?.res);

      const departments=res?.res
      setDoctors(departments)
  
    }).catch((error)=>{
      console.log(error)
    })
  }catch(error)
  {
    console.log(error)
  }
},[])



  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">We practice medicine that our historical ancestors could only dream of, and we have access to amazing treatments and cures for  patients on a daily basis.</p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        {doctors && doctors.map(doctor => (
  <li key={doctor.id}>
    <div className="flex items-center gap-x-6">
      <img className="h-16 w-16 rounded-full" src={doctor.image} alt="" />
      <div>
        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Dr. {doctor.firstName} {doctor.lastName}</h3>
        <p className="text-sm font-semibold leading-6 text-indigo-600">{doctor.department} / CMO</p>
      </div>
    </div>
  </li>
))}

        
          {/* More people... */}
        </ul>
      </div>
    </div>



    
  );
}

export default DoctorsList;
