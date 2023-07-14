import React, { useEffect, useState } from 'react';
import useFetch from '../../../../hooks/useFetch';

function ConversationComponent({conversation,currentUser}) { 
  
    const [user,setUser] =useState(null)
    const getRequest=useFetch('GET')

    useEffect(()=>{
        const  userId=conversation.members.find((m)=>m!==currentUser)
        console.log("userId",userId)

    const getUser =async () =>{
        try{
            console.log("userId in try",userId)
            const res =await getRequest('/user/user/' +userId)
            console.log("redoctorr",res)
            setUser(res)
        }catch(error)
        {
            console.log(error)
        }
    }
    getUser()
    },[currentUser,conversation])

    console.log(user)
  return (
    <>
      <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
        <div className="w-1/4">
          <img
            src={user?.alluser[0]?.image}
            className="object-cover h-12 w-12 rounded-full"
            alt=""
          />
        </div>

        <div className="w-full">
          <div className="text-lg font-semibold">{user?.alluser[0]?.firstName}</div>
          <span className="text-gray-500">Pick me at 9:00 AM</span>
        </div>
      </div>
    </>
  );
}

export default ConversationComponent;






// import React, { useEffect, useState } from 'react';
// import useFetch from '../../../../hooks/useFetch';

// function ConversationComponent({conversation,currentUser}) { 
  
//     const [doctor,setDoctor] =useState(null)
//     const getRequest=useFetch('GET')

//     useEffect(()=>{
//         const  doctorId=conversation.members.find((m)=>m!==currentUser)
//         console.log("doctorId",doctorId)

//     const getUser =async () =>{
//         try{
            
//             const res =await getRequest('/doctor/' +doctorId)
//             console.log("redoctorr",res)
//             setDoctor(res)
//         }catch(error)
//         {
//             console.log(error)
//         }
//     }
//     getUser()
//     },[currentUser,conversation])

//     console.log(doctor)
//   return (
//     <>
//       <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
//         <div className="w-1/4">
//           <img
//             src={doctor?.doctor[0]?.image}
//             className="object-cover h-12 w-12 rounded-full"
//             alt=""
//           />
//         </div>

//         <div className="w-full">
//           <div className="text-lg font-semibold">{doctor?.doctor[0]?.firstName}</div>
//           <span className="text-gray-500">Pick me at 9:00 AM</span>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ConversationComponent;
