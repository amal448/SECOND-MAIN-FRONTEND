// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// // import { selectUser  } from '../../../store/slice/userSlice'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

// function BookUser({ doctors }) {
//     console.log('jeeh')


//     console.log("doctors777777777777", doctors)
//     console.log("doctors._id", doctors._id)
//     // const user=useSelector(selectUser )
//     const user = useSelector(state => state)
//     console.log("user from userSlice is not defined case is this", user);

//     const [forMe, setForMe] = useState(true)
//     const [othersFullName, setOthersFullName] = useState("")
//     const [othersEmail, setOthersEmail] = useState()
//     const navigate = useNavigate()

//     const bookingHandler = (doctors) => {
//         // navigate('/payment-process', { state: { doctors: doctors } })
//         navigate('/payment-process')

//     }
//     return (
//         <>

//             <div className="flex justify-start items-center p-12">

//                 <div className="mx-auto w-full max-w-[550px]">
//                     {/* <form method="POST"> */}
//                     <form >
//                         <h1 className='mb-3 text-2xl font-bold'>Confirm </h1>

//                         <div className="mb-5">
//                             <label
//                                 htmlfor="name"
//                                 className="mb-3 block text-base font-normal text-[#07074D]"

//                          onClick={()=>console.log("here is errortyttttttttghhhhhhhhhhhhhhhhhhhhhhhhh")}   >
//                                Click Submit for Payment Procedures.
//                             </label>


//                         </div>


//                         <div>

//                             <button type='button' onClick={() => bookingHandler(doctors)}
//                                 className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
//                             >
//                                 Submit
//                             </button>


//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default BookUser

import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



function BookUser({ doctors }) {
    console.log('jeeh')
    const [userdata,setUserData]=useState("")
    const [forMe, setForMe] = useState(true)
    const [othersFullName, setOthersFullName] = useState("")
    const [othersEmail, setOthersEmail] = useState()
    const navigate = useNavigate()
    const user = useSelector((state) => state);

    useEffect(() => {
        console.log('user from userSlice is not defined case is this', user?.user);
        setUserData(user?.user);
      }, [user.user])


  

    const bookingHandler = (doctors) => {
        // navigate('/payment-process', { state: { doctors: doctors } })
        navigate('/payment-process')

    }
    return (
        <>

            <div className="flex justify-start items-center p-12">

                <div className="mx-auto w-full max-w-[550px]">
                    {/* <form method="POST"> */}
                    <form >
                        <h1 className='mb-3 text-2xl font-bold'>Patient Details </h1>

                        <div className="mb-5">
                            <label
                                htmlfor="name"
                                className="mb-3 block text-base font-normal text-[#07074D]"

                         onClick={()=>console.log("here is errortyttttttttghhhhhhhhhhhhhhhhhhhhhhhhh")}   >
                               This in-clinic appointment is for:
                            </label>

                            <div className="flex items-center pl-4 border border-gray-200 rounded">
                                <input checked id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={()=>setForMe(true)}/>
                                    <label for="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 ">{userdata?.userName}</label>
                            </div>
                            <div className="flex items-center pl-4 border border-gray-200 rounded">
                                <input id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onClick={()=>setForMe(false)}/>
                                    <label for="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 ">Someone Else</label>
                            </div>

                        </div>
                        <div className="mb-5">
                            <label
                                for="name"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                value={forMe ?  userdata?.userName: othersFullName}
                            />
                        </div>
                        <div class="mb-5">
                            <label
                                for="email"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@domain.com"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                value={forMe ?  userdata?.email: othersFullName}
                            />
                        </div>
                        <div className="mb-5">

                         <p>Please confirm that you want to proceed with this action.</p>
                         <div className="flex items-center mt-2">
                        <label htmlFor="confirmationCheckbox" className="cursor-pointer">
                            <input type="checkbox" id="confirmationCheckbox" required/>
                            <span className="ml-2">I confirm that I want to proceed.</span>
                        </label>
                        </div>

                        </div>
                        <div>
                            <button type='button' onClick={() => bookingHandler(doctors)}
                                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                            >
                                Proceed
                            </button>


                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BookUser
