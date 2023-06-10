import React, { useEffect, useState } from 'react'
import SingleDoctorAvailability from '../../../components/userComponents/ShowAvailability'
import PaymentProcess from '../../../components/userComponents/paycard'
import { useLocation } from 'react-router-dom';


function BeforePayment() { 

  const location=useLocation()
  
  const doctors=location.state?.doctors
  // console.log("dododododod i(*(8*****8",doctors)
  



  return (
    <div>
        <SingleDoctorAvailability doctors={doctors} />
        <PaymentProcess doctors={doctors} />
    </div>
  )
}

export default BeforePayment
