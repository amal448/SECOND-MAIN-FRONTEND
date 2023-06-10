import React from 'react'
import SingleDoctorAvailability from '../../../components/userComponents/ShowAvailability';
import TimeSlot from '../../../components/userComponents/TimeSlot';
import { useLocation } from 'react-router-dom';

function BookDoctor() {

const location=useLocation()
const doctors =location.state?.doctor
  
console.log("doctors",doctors)
const id=doctors._id
console.log("doctor id",id)


return (
    <div>
  <SingleDoctorAvailability doctors={doctors} />
    <TimeSlot doctors={doctors} id={id} />
    </div>
  )
}

export default BookDoctor
