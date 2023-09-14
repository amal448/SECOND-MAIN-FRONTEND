import React, { useState, useLayoutEffect } from 'react';
import useFetch from '../../../hooks/useFetch';
import { Link } from 'react-router-dom';
function Patients() {
  const [patients, setPatients] = useState([]);
  const getRequest = useFetch('GET');

  useLayoutEffect(() => {
    getRequest('/doctor/get-patients').then((res) => {
      console.log("patients", res);
      console.log("res1444444345", res);
      setPatients(res);
    });
  }, []);

  // Helper function to capitalize the first letter of each word
function capitalizeFirstLetter(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


  return (

    <div  style={{
      margin: 'auto',
      maxWidth: '95%',
      marginTop: '15px'
    }}>
  <h2 className="text-2xl font-semibold mb-4 pt-4 ">PATIENTS LIST</h2>
  <div className="overflow-x-auto">
    <table className="min-w-full table-auto">
      <thead className="bg-gray-500">
        <tr>
          <th className="px-4 py-2 text-center"> {/* Add text-center class here */}
            <span className="text-gray-300">No</span>
          </th>
          <th className="px-4 py-2 text-center"> {/* Add text-center class here */}
            <span className="text-gray-300">Name</span>
          </th>
          <th className="px-4 py-2 text-center"> {/* Add text-center class here */}
            <span className="text-gray-300">Email</span>
          </th>
          <th className="px-4 py-2 text-center"> {/* Add text-center class here */}
            <span className="text-gray-300">DOB</span>
          </th>
          <th className="px-4 py-2 text-center"> {/* Add text-center class here */}
            <span className="text-gray-300">Gender</span>
          </th>
          <th className="px-4 py-2 text-center"> {/* Add text-center class here */}
            <span className="text-gray-300">Prescription</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray border-4 border-gray-200">
        {patients.map((patient, index) => (
          <tr key={patient._id} className="bg-white">
            <td className="px-4 py-2 flex items-center text-center"> {/* Add text-center class here */}
              <div className="flex-shrink-0">{index + 1}</div>
            </td>
            <td className="px-4 py-2 text-center"> {/* Add text-center class here */}
              <span className="text-center font-semibold">
                {capitalizeFirstLetter(patient.firstName)} {capitalizeFirstLetter(patient.lastName)}
              </span>
            </td>
            <td className="px-4 py-2 text-center"> {/* Add text-center class here */}
              <span>{patient.email}</span>
            </td>
            <td className="px-4 py-2 text-center"> {/* Add text-center class here */}
              <span>{patient.dateOfBirth}</span>
            </td>
            <td className="px-4 py-2 text-center"> {/* Add text-center class here */}
              <span className="text-green-500">{patient.gender}</span>
            </td>
            <td className="px-4 py-2 text-center"> {/* Add text-center class here */}
              <Link to={`/doctor/prescription/${patient._id}`} className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black">
                View
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    // <div>
    //   <h2 className="text-2xl font-semibold mb-4 pt-4">PATIENTS LIST</h2>
    //   <div className="overflow-x-auto">
    //     <table className="min-w-full divide-y divide-gray-200">
    //       <thead className="bg-gray-500">
    //         <tr>
    //           <th className="px-4 py-2">
    //             <span className="text-gray-300">No</span>
    //           </th>
    //           <th className="px-4 py-2">
    //             <span className="text-gray-300">Name</span>
    //           </th>
    //           <th className="px-4 py-2">
    //             <span className="text-gray-300">Email</span>
    //           </th>
    //           <th className="px-4 py-2">
    //             <span className="text-gray-300">DOB</span>
    //           </th>
    //           <th className="px-4 py-2">
    //             <span className="text-gray-300">Gender</span>
    //           </th>
    //           <th className="px-4 py-2">
    //             <span className="text-gray-300">Prescription</span>
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody className="bg-gray-200 divide-y divide-gray-200">
    //         {patients.map((patient, index) => (
    //           <tr key={patient._id} className="bg-white">
    //             <td className="px-4 py-2 flex items-center">
    //               <div className="flex-shrink-0">{index + 1}</div>
    //             </td>
    //             <td className="px-4 py-2">
    //               <span className="text-center font-semibold">
                    
    //               {capitalizeFirstLetter(patient.firstName)} {capitalizeFirstLetter(patient.lastName)}
    //               </span>
    //             </td>
    //             <td className="px-4 py-2">
    //               <span>{patient.email}</span>
    //             </td>
    //             <td className="px-4 py-2">
    //               <span>{patient.dateOfBirth}</span>
    //             </td>
    //             <td className="px-4 py-2">
    //               <span className="text-green-500">{patient.gender}</span>
    //             </td>
    //             <td className="px-4 py-2">
    //               <Link to={`/doctor/prescription/${patient._id}`} className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black">
    //                 View  
    //               </Link>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
}

export default Patients;
