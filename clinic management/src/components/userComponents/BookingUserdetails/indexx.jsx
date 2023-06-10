import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { selectUser  } from '../../../store/slice/userSlice'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function  BookUser({doctors}) {
    console.log('jeeh')


console.log("doctors777777777777",doctors)
console.log("doctors._id",doctors._id)
// const user=useSelector(selectUser )
const user=useSelector(state=>state)
console.log("user from userSlice is not defined case is this",user);
const[forMe,setForMe]=useState(true)


const [othersFullName,setOthersFullName]=useState("")
const [othersEmail,setOthersEmail]=useState()
const navigate=useNavigate()

const bookingHandler =(doctors)=>{
    navigate('/payment-process',{state:{doctors:doctors}})
}



  return (
    <>

    <div className="flex justify-start items-center p-12">
    
        <div className="mx-auto w-full max-w-[550px]">
            <form method="POST">
            <h1 className='mb-3 text-2xl font-bold'>Patient Details</h1>

                <div className="mb-5">
                    <label
                        htmlfor="name"
                        className="mb-3 block text-base font-normal text-[#07074D]"
                    >
                        This in-clinic appointment is for:
                    </label>

                    <div className="flex items-center pl-4 border border-gray-200 rounded">
                        <input checked id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onChange={()=>setForMe(true)} />
                            <label htmlfor="bordered-radio-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 ">{user?.root?.user?.userName}</label>
                    </div>
                    <div className="flex items-center pl-4 border border-gray-200 rounded">
                        <input id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" onChange={()=>setForMe(false)} />
                            <label htmlfor="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 ">Someone Else</label>
                    </div>

                </div>

                <div className="mb-5">
                    <label
                        htmlfor="name"
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
                         value={forMe ? user?.root?.user?.userName: othersFullName}
                        
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlfor="email"
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
                        value={forMe? user?.root?.user.email:othersFullName}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlfor="subject"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Symptoms
                    </label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter your symptom"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlfor="message"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        About your desease
                    </label>
                    <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Type your message"
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    ></textarea>
                </div>
                <div>
                    {/* <Link to={`/pay-process/${doctors._id}`} */}
                        {/* className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none" */}
                     {/* >  */}
                        {/* Submit */}
                     {/* </Link> */}

    <button onClick={()=>bookingHandler(doctors)}
    
                        className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                        >
        Submit

    </button>


                </div>
            </form>
        </div>
    </div>
</>
  )
}

export default BookUser
