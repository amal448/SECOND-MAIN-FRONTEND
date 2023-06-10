import React from 'react'
import SingleDoctorAvailability from '../../../components/userComponents/ShowAvailability';
import { useLocation } from 'react-router-dom';
import BookUser from '../../../components/userComponents/BookingUserdetails/indexx';
function BookingUserDetails() {

const location=useLocation()

const doctors=location.state?.doctors
console.log("doctors222222222",doctors)



  return (
    <div>
      <SingleDoctorAvailability doctors={doctors} />
      <BookUser doctors={doctors} />
    </div>
  )
}

export default BookingUserDetails
