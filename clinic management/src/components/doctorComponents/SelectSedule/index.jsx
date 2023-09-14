
// import React, { useEffect, useState } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
// import useFetch from '../../../hooks/useFetch';

// const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// const initialTimings = [
//   { day: 'Sunday', timeSlots: [{ startTime: '', endTime: '' }] },
//   { day: 'Monday', timeSlots: [{ startTime: '', endTime: '' }] },
//   { day: 'Tuesday', timeSlots: [{ startTime: '', endTime: '' }] },
//   { day: 'Wednesday', timeSlots: [{ startTime: '', endTime: '' }] },
//   { day: 'Thursday', timeSlots: [{ startTime: '', endTime: '' }] },
//   { day: 'Friday', timeSlots: [{ startTime: '', endTime: '' }] },
//   { day: 'Saturday', timeSlots: [{ startTime: '', endTime: '' }] },
// ];

// function SelectSchedule() {
//   const [selectedDay, setSelectedDay] = useState(null);
//   const [selectedSlot, setSelectedSlot] = useState(null);//selects start time and endtime
//   const [timings, setTimings] = useState(initialTimings);
//   const [interval, setInterval] = useState(30);
//   const [validationErrors, setValidationErrors] = useState([]);

//   const putRequest = useFetch('PUT');
//   const navigate = useNavigate();

//   const handleStartTimeChange = (e, day, slotIndex) => {
//     const updatedTimings = timings.map((timing) => {
//       if (timing.day === day) {
//         const updatedTimeSlots = timing.timeSlots.map((slot, index) => {
//           if (index === slotIndex) {
//             return { ...slot, startTime: e.target.value };
//           }
//           return slot;
//         });
//         return { ...timing, timeSlots: updatedTimeSlots };
//       }
//       return timing;
//     });
//     setTimings((pre) => {
//       let prev = pre;
//       let selectedDayIndex = pre.map(e => e.day == day).indexOf(true)
//       prev[selectedDayIndex].timeSlots[slotIndex] = { startTime: e.target.value };
//       return prev;
//     });
//     // setSelectedSlot(updatedTimings.find((timing) => timing.day === selectedDay).timeSlots[slotIndex]);
//     // validateTimings(updatedTimings);
//   };

//   useEffect(()=>{
//     console.log(timings);
//   },[timings])

//   const handleEndTimeChange = (e, day, slotIndex) => {
//     const updatedTimings = timings.map((timing) => {
//       if (timing.day === day) {
//         const updatedTimeSlots = timing.timeSlots.map((slot, index) => {
//           if (index === slotIndex) {
//             return { ...slot, endTime: e.target.value };
//           }
//           return slot;
//         });
//         return { ...timing, timeSlots: updatedTimeSlots };
//       }
//       return timing;
//     });
//     setTimings((pre) => {
//       let prev = pre;
//       prev.timings[1].timeSlots[slotIndex] = { endTime: e.target.value }
//     });
//     console.log("end updatedTimings", updatedTimings)

//     setSelectedSlot({ ...selectedSlot, endTime: e.target.value });
//     validateTimings(updatedTimings);
//   };

//   const handleDayClick = (day) => {
//     const selectedTiming = timings.find((timing) => timing.day === day);
//     console.log("selectedTiming", selectedTiming)
//     setSelectedDay(day);
//     setSelectedSlot(selectedTiming?.timeSlots[0]);
//     setValidationErrors([]);
//   };

//   const handleIntervalChange = (e) => {
//     setInterval(parseInt(e.target.value));
//   };

//   const validateTimings = (updatedTimings) => {
//     const errors = [];
//     updatedTimings.forEach((timing) => {
//       timing.timeSlots.forEach((slot) => {
//         if (!slot.startTime || !slot.endTime) {
//           errors.push(timing.day);
//         }
//       });
//     });
//     setValidationErrors(errors);
//   };

//   const handleAddSlot = () => {
//     console.log("timings", timings)
//     const updatedTimings = timings.map((timing) => {
//       console.log("timing in timings ", timing)
//       if (timing.day === selectedDay) {
//         console.log("...timing.timeSlots", ...timing.timeSlots)
//         const updatedTimeSlots = [...timing.timeSlots, { startTime: '', endTime: '' }];
//         return { ...timing, timeSlots: updatedTimeSlots };
//       }
//       return timing;
//     });
//     console.log("handleaddSlot", updatedTimings)
//     setTimings(updatedTimings);


//     const selectedTiming = updatedTimings.find((timing) => timing.day === selectedDay);
//     console.log("selected timing in  handle ", selectedTiming)
//     const newSlotIndex = selectedTiming.timeSlots.length - 1;
//     console.log("newSlotIndex in  handle ", newSlotIndex)

//     setSelectedSlot(selectedTiming.timeSlots[newSlotIndex]);
//     validateTimings(updatedTimings);
//   };

//   const handleRemoveSlot = (slotIndex) => {
//     const updatedTimings = timings.map((timing) => {
//       if (timing.day === selectedDay) {
//         const updatedTimeSlots = timing.timeSlots.filter((slot, index) => index !== slotIndex);
//         return { ...timing, timeSlots: updatedTimeSlots };
//       }
//       return timing;
//     });
//     setTimings(updatedTimings);
//     setSelectedSlot(null);
//     validateTimings(updatedTimings);
//   };

//   const handleGenerateOutput = async () => {
//     const filteredTimings = timings.map((timing) => ({
//       day: timing.day,
//       timeSlots: timing.timeSlots.filter((slot) => slot.startTime && slot.endTime),
//     }));

//     console.log('filteredTimings', filteredTimings);

//     const output = {
//       timings: filteredTimings.length > 0 ? filteredTimings : [{ day: 'Not available', timeSlots: [{ startTime: '', endTime: '' }] }],
//       interval,
//     };

//     console.log('output', output);

//     // axios put
//     // Navigate to home

//     putRequest('/doctor/update-timeSlot', output)
//       .then((res) => {
//         console.log('response', res);
//         navigate('/doctor/home');
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   // new tryyyyyyyyyyyyyyyyyyyyyyyyyyyyy

//   const getAvailableTimeSlots = () => {
//     if (!selectedDay) {
//       return []
//     }

//     const selectedDayTimings = timings.find((timing) =>
//       timing.day === selectedDay
//     )

//     if (!selectedDayTimings) {
//       return []
//     }
//     const existingTimeSlots = selectedDayTimings.timeSlots;

//     const availableTimeSlots = existingTimeSlots.filter((timeSlot) => {
//       const startTime = timeSlot.startTime;
//       const endTime = timeSlot.endTime;
//       if ((startTime >= selectedSlot.startTime && startTime <= selectedSlot.endTime) || (endTime >= selectedSlot.startTime && endTime <= selectedSlot.endTime)) {
//         return false; // Exclude conflicting time slot
//       }
//       return true
//     })

//     return availableTimeSlots;

//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       {/* <Toaster position='top-center' reverseOrder={false}></Toaster> */}
//       <h1 className="text-2xl font-bold mb-4">Select Start Time and End Time</h1>
//       <div className="flex space-x-4 mb-8">
//         <div>
//           <label htmlFor="start-time" className="text-sm font-medium">
//             Start Time:
//           </label>
//           {selectedDay && selectedSlot && (
//             <select
//               id="start-time"
//               className="block w-32 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               value={selectedSlot.startTime}
//               onChange={(e) => handleStartTimeChange(e, selectedDay, timings.findIndex((timing) => timing.day === selectedDay))}
//             >
//               <option value="">Select</option>
//               {getAvailableTimeSlots().map((timeSlot) =>

//                 <option key={timeSlot} value={timeSlot}>{timeSlot}</option>
//               )}
//               <option value="9:00 AM">9:00 AM</option>
//               <option value="10:00 AM">10:00 AM</option>
//               <option value="11:00 AM">11:00 AM</option>
//               <option value="12:00 PM">12:00 PM</option>
//               <option value="01:00 PM">01:00 PM</option>
//               <option value="02:00 PM">02:00 PM</option>
//               <option value="03:00 PM">03:00 PM</option>
//               <option value="04:00 PM">04:00 PM</option>
//               <option value="05:00 PM">05:00 PM</option>
//               <option value="06:00 PM">06:00 PM</option>
//               <option value="07:00 PM">07:00 PM</option>
//               <option value="08:00 PM">08:00 PM</option>
//               {/* Add more options as needed */}
//             </select>
//           )}

//           {validationErrors.includes(selectedDay) && !selectedSlot.startTime && (
//             <p className="text-red-500 text-xs mt-1">Please select a start time.</p>
//           )}
//         </div>
//         <div>
//           <label htmlFor="end-time" className="text-sm font-medium">
//             End Time:
//           </label>
//           {selectedDay && selectedSlot && (
//             <select
//               id="end-time"
//               className="block w-32 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               value={selectedSlot.endTime}
//               onChange={(e) => handleEndTimeChange(e, selectedDay, timings.findIndex((timing) => timing.day === selectedDay))}
//             >
//               <option value="">Select</option>
//               <option value="12:00 PM">12:00 PM</option>
//               <option value="01:00 PM">01:00 PM</option>
//               <option value="02:00 PM">02:00 PM</option>
//               <option value="03:00 PM">03:00 PM</option>
//               <option value="04:00 PM">04:00 PM</option>
//               <option value="05:00 PM">05:00 PM</option>
//               <option value="06:00 PM">06:00 PM</option>
//               <option value="07:00 PM">07:00 PM</option>
//               <option value="05:00 PM">08:00 PM</option>
//               <option value="05:00 PM">09:00 PM</option>
//               <option value="08:00 PM">10:00 PM</option>
//               <option value="05:00 PM">11:00 PM</option>
//             </select>
//           )}
//           {validationErrors.includes(selectedDay) && !selectedSlot.endTime && (
//             <p className="text-red-500 text-xs mt-1">Please select an end time.</p>
//           )}
//         </div>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="interval" className="text-sm font-medium">
//           Interval (minutes):
//         </label>
//         <select
//           id="interval"
//           className="block w-32 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           value={interval}
//           onChange={handleIntervalChange}
//         >
//           <option value="15">15 Min</option>
//           <option value="30">30 Min</option>
//           <option value="60">1 Hour</option>
//           {/* Add more options as needed */}
//         </select>
//       </div>
//       <div className="grid grid-cols-7 gap-4 mb-8">
//         {daysOfWeek.map((day) => (
//           <button
//             key={day}
//             className={`p-2 rounded-md border ${selectedDay === day ? 'border-blue-500' : 'border-gray-300'
//               } ${validationErrors.includes(day) ? 'bg-red-200' : 'bg-gray-100'}`}
//             onClick={() => handleDayClick(day)}
//           >
//             {day}
//           </button>
//         ))}
//       </div>
//       {selectedDay && (
//         <div className="mb-4">
//           <button
//             className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
//             onClick={handleAddSlot}
//           >
//             Add Time Slot
//           </button>
//           {selectedSlot && (
//             <button
//               className="px-4 py-2 ml-4 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
//               onClick={() => handleRemoveSlot(timings.find((timing) => timing.day === selectedDay).timeSlots.indexOf(selectedSlot))}
//             >
//               Remove Time Slot
//             </button>
//           )}
//         </div>
//       )}
//       <button
//         className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
//         onClick={handleGenerateOutput}
//       >
//         Update Time Schedule
//       </button>
//     </div>
//   );
// }

// export default SelectSchedule;




import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const initialTimings = [
  { day: 'Sunday', startTime: '', endTime: '' },
  { day: 'Monday', startTime: '', endTime: '' },
  { day: 'Tuesday', startTime: '', endTime: '' },
  { day: 'Wednesday', startTime: '', endTime: '' },
  { day: 'Thursday', startTime: '', endTime: '' },
  { day: 'Friday', startTime: '', endTime: '' },
  { day: 'Saturday', startTime: '', endTime: '' },
];

function SelectSchedule() {

  const [selectedTiming, setSelectedTiming] = useState(null)
  const [timings, setTimings] = useState(initialTimings)
  const [interval, setInterval] = useState(30)
  const [validationErrors, setValidationErrors] = useState([])

  const putRequest = useFetch('PUT')
  const navigate = useNavigate()


  const handleStartTimeChange = (e, day) => {

    const updatedtimings = timings.map((timing) =>
      timing.day === day ? { ...timing, startTime: e.target.value } : timing
    )
    setTimings(updatedtimings)
    const selectedTimingIndex = updatedtimings.findIndex((timing) => timing.day === selectedTiming?.day);
    if (selectedTimingIndex !== -1) {
      setSelectedTiming(updatedtimings[selectedTimingIndex]);
    }
    validateTimings(updatedtimings);

  }

  const handleEndTimeChange = (e, day) => {

    const updatedtimings = timings.map((timing) =>
      timing.day === day ? { ...timing, endTime: e.target.value } : timing
    )
    setTimings(updatedtimings)
    const selectedTimingIndex = updatedtimings.findIndex((timing) => timing.day === selectedTiming?.day);
    if (selectedTimingIndex !== -1) {
      setSelectedTiming(updatedtimings[selectedTimingIndex]);
    }
    validateTimings(updatedtimings);

  }



  const handleDayClick = (day) => {
    const selectedTiming = timings.find((timing) => timing.day === day);
    setSelectedTiming(selectedTiming)
    setValidationErrors([]);

  }

  const handleIntervalChange = (e) => {
    setInterval(parseInt(e.target.value))
  }

  const validateTimings = (updatedtimings) => {
    const errors = []

    updatedtimings.forEach((timing) => {
      if (!timing.startTime || !timing.endTime) {
        errors.push(timing.day)
      }
    })
    setValidationErrors(errors)

  }

  const handleGenerateOutput = async () => {
    const filteredTimings = timings.filter((timing) =>
      timing.startTime && timing.endTime)

    console.log("filteredTimings", filteredTimings)

    const output = {
      timings: filteredTimings.length > 0 ? filteredTimings : [{ day: 'Not available', startTime: '', endTime: '' }],
      interval
    };



    console.log("LKKKLKLKLLKLL", output);
    //axios put
    // Navigate to home

    putRequest('/doctor/update-timeSlot', output).then((res) => {
      console.log("resssssswdfefreferfs", res);
      navigate("/doctor/home")
    }).catch((error) => {
      console.log(error);
    })


  }




  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8">
      {/* <Toaster position='top-center' reverseOrder={false}></Toaster> */}
      <h1 className="text-xl md:text-2xl font-bold mb-4">Select Start Time and End Time</h1>
      <div className="flex space-x-4 mb-8">
        <div>
          <label htmlFor="start-time" className="text-sm font-medium">
            Start Time:
          </label>
          <select
            id="start-time"
            className="block w-32 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedTiming ? selectedTiming.startTime : ''}
            onChange={(e) => handleStartTimeChange(e, selectedTiming?.day)}
          >
            <option value="">Select</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="01:00 PM">01:00 PM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="03:00 PM">03:00 PM</option>
            <option value="04:00 PM">04:00 PM</option>
            <option value="05:00 PM">05:00 PM</option>
            <option value="06:00 PM">06:00 PM</option>
            <option value="07:00 PM">07:00 PM</option>
            <option value="08:00 PM">08:00 PM</option>
            {/* Add more options as needed */}
          </select>
          {validationErrors.includes(selectedTiming?.day) && !selectedTiming.startTime && (
            <p className="text-red-500 text-xs mt-1">Please select a start time.</p>
          )}
        </div>
        <div>
          <label htmlFor="end-time" className="text-sm font-medium">
            End Time:
          </label>
          <select
            id="end-time"
            className="block w-32 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedTiming ? selectedTiming.endTime : ''}
            onChange={(e) => handleEndTimeChange(e, selectedTiming?.day)}
          >
            <option value="">Select</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="01:00 PM">01:00 PM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="03:00 PM">03:00 PM</option>
            <option value="04:00 PM">04:00 PM</option>
            <option value="05:00 PM">05:00 PM</option>
            <option value="06:00 PM">06:00 PM</option>
            <option value="07:00 PM">07:00 PM</option>
            <option value="05:00 PM">08:00 PM</option>
            <option value="05:00 PM">09:00 PM</option>
            <option value="08:00 PM">10:00 PM</option>
            <option value="05:00 PM">11:00 PM</option>
          </select>
          {validationErrors.includes(selectedTiming?.day) && !selectedTiming.endTime && (

            <p className=" text-xs mt-1">Please select an end time.</p>

          )}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="interval" className="text-sm font-medium">
          Interval (minutes):
        </label>
        <select
          id="interval"
          className="block w-32 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={interval}
          onChange={handleIntervalChange}
        >
          <option value="15">15Min</option>
          <option value="30">30Min</option>
          <option value="60">1 Hour</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-7 md:gap-8 mb-8">
        {daysOfWeek.map((day) => (
          <button
            key={day}
            className={`p-2 rounded-md border ${selectedTiming?.day === day ? 'border-blue-500' : 'border-gray-300'
              } ${validationErrors.includes(day) ? 'bg-red-200' : 'bg-gray-100'}`}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </button>

        ))}

      </div>
      <button
        className="px-4 py-2 text-sm md:text-base font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
        onClick={handleGenerateOutput}
      >
        Update time schedule
      </button>
    </div>
  );
};

export default SelectSchedule;
