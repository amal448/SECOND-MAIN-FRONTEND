import React from 'react'
import DoctorNavBar from '../../../components/doctorComponents/navbar'
import Appointment from '../../../components/doctorComponents/appointments'
import useFetch from '../../../hooks/useFetch'
import { useEffect,useState } from 'react'

function AppointmentPage() {
  
  const getRequest=useFetch('GET')
  const [allAppointments,setAllAppointments]=useState([])

useEffect(()=>{

const fetchedData=async()=>{
  try{
    
const data=await getRequest('/doctor/Appointmentdata')
console.log(data)
setAllAppointments(data)

    }
  catch(error)
  {
    console.log(error) 
  }
}
fetchedData()

  },[])

  return (
    <div>
      <DoctorNavBar />
    <Appointment appointments={allAppointments} />
    </div>
  )
}

export default AppointmentPage
