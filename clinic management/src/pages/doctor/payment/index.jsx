import React from 'react'
import PaymentComponent from '../../../components/doctorComponents/paymenthistory'
import DoctorNavBar from '../../../components/doctorComponents/navbar'
import useFetch from '../../../hooks/useFetch'
import { useEffect,useState } from 'react'


function PaymentPage() {

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
      <PaymentComponent appointments={allAppointments}  />
    </div>
  )
}

export default PaymentPage
