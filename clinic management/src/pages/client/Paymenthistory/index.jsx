import React from 'react'
import Paymenthistory from '../../../components/userComponents/paymenthistory'
import useFetch from '../../../hooks/useFetch'
import { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'

function PaymentHistoryPage() {

    const getRequest=useFetch('GET')
    const [allAppointments,setAllAppointments]=useState([])
    const data=useSelector(state=>state)
    const userId=data?.root?.user?.id

  useEffect(()=>{
  
  const fetchedData=async()=>{
    try{
      
  const data=await getRequest(`/user/bookinghistory/${userId}`)
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
      <Paymenthistory appointments={allAppointments}  />
    </div>
  )
}

export default PaymentHistoryPage