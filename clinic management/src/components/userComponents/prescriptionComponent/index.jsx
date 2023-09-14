import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { prescriptionData,clearPrescriptionData } from '../../../store/slice/prescription'


function PrescriptionComponent({userdata}) {

console.log("userdata in prescription ",userdata)
const dispatch=useDispatch()


const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toDateString();
  };
const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  };
  function capitalizeFirstLetter(str) {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  

  const handleViewPrescription = (pres) => {
    // Check if prescription data already exists
    if (prescriptionData) {
      // If it does, clear it before setting the new data
      dispatch(clearPrescriptionData());
    }
    // Dispatch the action to set the prescription data
    dispatch(prescriptionData(pres));
  };

  
  return (
   
        <div>
          <h2 className="text-2xl font-semibold mb-4 pt-4">Prescriptions </h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-500">
                <tr>
                  <th className="px-4 py-2 text-left">
                    <span className="text-gray-300">No</span>
                  </th>
                  <th className="px-4 py-2 text-left">
                    <span className="text-gray-300">Doctor</span>
                  </th>
                  <th className="px-4 py-2 text-left">
                    <span className="text-gray-300">Department</span>
                  </th>
                  <th className="px-4 py-2 text-left">
                    <span className="text-gray-300">Date</span>
                  </th>
                  <th className="px-4 py-2 text-left">
                    <span className="text-gray-300">Time</span>
                  </th>
                  <th className="px-4 py-2 text-left">
                    <span className="text-gray-300">Prescription</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-200">
              {userdata?.map((pres, index) => { 
           

              console.log("Prescription data for Link:", pres);
              return (
                <tr className="border-b border-gray-300" key={index}>
                  <td className="px-4 py-2">{index + 1}</td>
                  
                  <td className="px-4 py-2">Dr. {capitalizeFirstLetter(pres.doctorName)}</td>
                  <td className="px-4 py-2">{pres.department}</td>
                  <td className="px-4 py-2">{formatDate(pres.createdAt)}</td>
                  <td className="px-4 py-2">{formatTime(pres.createdAt)}</td>
                  <td className="px-4 py-2">
                    <div className="flex justify-center space-x-2">
                      <Link
                        to={
                           '/prescriptiondata'
                        }
                        className="bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-green-500 hover:text-black"
                        onClick={() => handleViewPrescription(pres)}
                      >
                        View
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
              </tbody>
            </table>
          </div>
        </div>
   

  )
}

export default PrescriptionComponent
