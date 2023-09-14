import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {Link,useNavigate} from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
 
function Appointment({appointments}) {

  let postRequest=useFetch('POST')
  let putRequest=useFetch('PUT')

  const info = useSelector(state => state?.doctor?.info);

  let doctorId=info?._id
  const navigate=useNavigate()

// Utility function to get the current time in "HH:mm AM/PM" format
function getCurrentTime() {
  const date = new Date();
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  return date.toLocaleTimeString([], options);
}



  const createChatHandler =async(userId)=>{
    
    const credentials={ 
    senderId:userId,
    receiverId:doctorId
  }
console.log("credentials",credentials)
console.log("userIduserIduserId",userId)
  
  if (credentials) {
    const create=await postRequest('/conversations',credentials)
    }

    navigate('/doctor/chat');

}

  const handleStatus = async(appointment) => {
console.log("handleStatus",appointment) 
console.log("handleStatus",appointment.status) 

if (appointment.status === "pending") {
  try {
    // Make the API call to update the status
    const updatedAppointment = { ...appointment, status: "completed" };
    await putRequest(`/doctor/updateStatus/${appointment._id}`, updatedAppointment);

  } catch (error) {
    // Handle the error if the API call fails
    console.error("Failed to update the appointment status:", error);
    // Show a message to the user or handle the error appropriately
  }
} else {
  // If the appointment status is not "pending," show "Failed"
  console.log("Failed");
}

  };
  function capitalizeFirstLetter(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
 
  return (
<div >
  <h2 className="text-2xl font-semibold mb-4 pt-4 mx-4 ">APPOINTMENT LIST</h2>

<div className="overflow-x-auto">
  <table className="min-w-full table-auto">
    <thead className="justify-between">
      <tr className="bg-gray-500">
        <th className="px-4 py-2 md:px-16 md:py-2 text-left">
          <span className="text-gray-300">No</span>
        </th>
        <th className="px-4 py-2 md:px-16 md:py-2 text-left">
          <span className="text-gray-300">Name</span>
        </th>
        <th className="px-4 py-2 md:px-16 md:py-2 text-left">
          <span className="text-gray-300">Email</span>
        </th>
        <th className="px-4 py-2 md:px-16 md:py-2 text-left">
          <span className="text-gray-300">Status</span>
        </th>
        <th className="px-4 py-2 md:px-16 md:py-2 text-left">
          <span className="text-gray-300">Date</span>
        </th>
        <th className="px-4 py-2 md:px-16 md:py-2 text-left">
          <span className="text-gray-300">Time</span>
        </th>
        <th className="px-4 py-2 md:px-16 md:py-2 text-left">
          <span className="text-gray-300">Actions</span>
        </th>
      </tr>
    </thead>
    <tbody className="bg-gray-200">
      {appointments?.map((appointment, index) => (
        <tr className="bg-white border-4 border-gray-200" key={index}>
          <td className="px-4 py-2 md:px-16 md:py-2 flex flex-row items-center">
            <span>{index + 1}</span>
          </td>
          <td>
            <span className="text-center ml-2 font-semibold">
            {capitalizeFirstLetter(appointment.paymentOwner)}
            </span>
          </td>
          <td className="px-4 py-2 md:px-16 md:py-2">
            <span>{appointment.paymentOwnerEmail}</span>
          </td>
          <td className="px-4 py-2 md:px-16 md:py-2">
            {appointment.status === "completed" ? (
              <button className="bg-green-500 text-white px-4 py-2 border rounded-full">
                Completed
              </button>
            ) : (
              <Link
                className="bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-yellow-500 hover:text-black"
              >
                Pending
              </Link>
            )}
          </td>
          <td className="px-4 py-2 md:px-16 md:py-2">
            <span className="text-green-500">
              {new Date(appointment.date).toLocaleDateString()}
            </span>
          </td>
          <td className="px-4 py-2 md:px-16 md:py-2">
            <span>{appointment.time}</span>
          </td>
          <td className="px-4 py-2 md:px-16 md:py-2">
            <div className="flex justify-center md:space-x-2">
              <button
                onClick={() => createChatHandler(appointment?.userId)}
                className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black"
              >
                Chat
              </button>

              {appointment.status === "completed" ? (
                <button
                  disabled={true}
                  className="bg-green-500 text-white px-4 py-2 border rounded-md cursor-not-allowed opacity-50"
                >
                  Meet
                </button>
              ) : (
                <Link
                  to="/roomchat"
                  onClick={() => handleStatus(appointment)}
                  className="bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-green-500 hover:text-black"
                >
                  Meet
                </Link>
              )}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

</div>


  );
}

export default Appointment;
























