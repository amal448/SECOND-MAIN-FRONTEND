import React, { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';

function ConversationComponent({conversation,currentUser}) { 
  
    const [doctor,setDoctor] =useState(null)
    const getRequest=useFetch('GET')

    useEffect(()=>{
        const  doctorId=conversation.members.find((m)=>m!==currentUser)
        console.log("doctorId",doctorId)

    const getUser =async () =>{
        try{
            
            const res =await getRequest('/doctor/doctor/' +doctorId)
            console.log("redoctorr",res)
            setDoctor(res)
        }catch(error)
        {
            console.log('ero d',error) 
        }
    }
    getUser()
    },[currentUser,conversation])

    console.log(doctor)
  return (
    <>
      <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
        <div className="w-1/4">
          <img
            src={doctor?.doctor[0]?.image}
            className="object-cover h-12 w-12 rounded-full"
            alt=""
          />
        </div>

        <div className="w-full">
          <div className="text-lg font-semibold">Dr.{doctor?.doctor[0]?.firstName}</div>
          <span className="text-gray-500">Pick me at 9:00 AM</span>
        </div>
      </div>
    </>
  );
}

export default ConversationComponent;
