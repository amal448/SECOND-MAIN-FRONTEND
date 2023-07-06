import React from 'react';
import useFetch from '../../../hooks/useFetch';

function Paymenthistory({ appointments }) {
  console.log("appointments", appointments);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 pt-4">Booking History</h2>
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
                <span className="text-gray-300">Price</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-200">
            {appointments.map((appointment, index) => (
              <tr className="border-b border-gray-300" key={index}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <span className="font-semibold">Dr. {appointment.doctorName}</span>
                </td>
                <td className="px-4 py-2">{appointment.department}</td>
                <td className="px-4 py-2">{appointment.date}</td>
                <td className="px-4 py-2">{appointment.time}</td>
                <td className="px-4 py-2">{appointment.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Paymenthistory;














