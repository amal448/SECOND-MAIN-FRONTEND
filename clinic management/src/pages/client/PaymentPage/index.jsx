import React, { useEffect, useState } from 'react'
// import SingleDoctorAvailability from '../../../components/userComponents/ShowAvailability'
import PaymentProcess from '../../../components/userComponents/paycard'
// import { useLocation } from 'react-router-dom';
import PaymentProcedure from '../../../components/userComponents/paymentDoctor';
import { useSelector } from 'react-redux';
function BeforePayment() { 

  // const location=useLocation()
  
  // const doctors=location.state?.doctors

  const doctors=useSelector((state) => state?.paymentDetails?.paymentDetails);



  console.log("PaymentPage dododododod i(*(8*****8 @pagebeforePayment",doctors)
  



  return (
    <div>
       {doctors && (
        <>
          <PaymentProcedure doctors={doctors} />
          <PaymentProcess doctors={doctors} />
        </>
      )}
    </div>
  )
}

export default BeforePayment
