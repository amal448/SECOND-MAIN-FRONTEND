import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function TimingComponent() {

    let doctors=useSelector(state=>state)
    console.log("doctpepepep",doctors)
    
    
    function getDoctorTimings(doctor) {
      console.log("doctordoctordoctor",doctor)
      
      const mappedTimings = [];
      console.log("doctor.doctorTiming",doctor?.doctorTimings)
      for (const day in doctor?.doctorTimings) {
        console.log("day",day)
        const timings = doctor.doctorTimings[day];
        const startTime = timings[0];
        const endTime = timings[timings.length - 1];
    
        mappedTimings.push({
          day,
          startTime,
          endTime,
        });
      }
    
      return mappedTimings;
    }
    
    const mappedTimings = getDoctorTimings(doctors?.doctor?.info);
    console.log(mappedTimings)
  
  
  
  return (
    <div style={{
      margin: 'auto',
      maxWidth: '80%',
      marginTop: '15px'
    }}>
    <h2 className="text-2xl font-semibold mb-4  pt-4"></h2>
          <table className="min-w-full table-auto">
          <thead className="justify-between">
              <tr className="bg-gray-500">
                {/* <th className="px-16 py-2 text-left">
                  <span className="text-gray-300">index</span>
                </th> */}
                <th className="px-16 py-2 text-left">
                  <span className="text-gray-300">Day</span>
                </th>
               
                <th className="px-16 py-2 text-left">
                  <span className="text-gray-300">StartTime</span>
                </th>
                <th className="px-16 py-2 text-left">
                  <span className="text-gray-300">EndTime</span>
                </th>
                {/* <th className="px-16 py-2 text-left">
                  <span className="text-gray-300">Edit</span>
                </th> */}
                
              </tr>
            </thead>
            <tbody className="bg-gray-200"> 
                
               
                {mappedTimings.length>0 && mappedTimings.map((timing, index)=>{
                  return(

                    <tr className="bg-white border-4 border-gray-200" key={index}>
                     
                      <td>
                        <span className="text-center ml-2 font-semibold">{timing.day}</span>
                      </td>
                     
                      <td className="px-16 py-2">
                        <span>{timing.startTime}</span>
                      </td>
                      <td className="px-16 py-2">
                        <span>{timing.endTime}</span>
                      </td>
                      {/* <td className="px-16 py-2">
                        <span className="text-green-500">
                 
                          gender
                        </span>
                      </td> */}
             
                    </tr>
          
                  )
                })}
    
                
    

    
      
            </tbody>
          </table>
        </div>
  )
}

export default TimingComponent
