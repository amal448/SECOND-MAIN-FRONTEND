import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PayButton from '../payButton'
import { useSelector } from 'react-redux'
import { selectPaymentDetails } from '../../../store/slice/PaymentSlice'

function PaymentProcess({doctors}) {

    // console.log("doctors in paycard",doctors)
    const [price,setPrice] = useState(doctors?.fees)
    const [firstName,setFirstName]=useState(doctors?.firstName)
    const [lastName,setlastName]=useState(doctors?.lastName)
    const [department,setDepartment]=useState(doctors?.department)
    const[id,setId]=useState(doctors?._id)
    const[image,setImage]=useState(doctors?.image)



    const user=useSelector(state=>state)
    // console.log("userid in paycard",user.root.user.id)
    let userid=user?.root?.user?.id
    const payment=useSelector(selectPaymentDetails)
    
    const paymentItems ={
        name:"Online Doctor consultancy",
        price:price,
        doctor:firstName + lastName,
        userId:userid,
        doctorImage:image,
        doctorsDepartment:department,
        doctorId:id,
        date:payment?.date,
        time:payment?.time
    }

    // console.log("paymentItems in paycard",paymentItems)

    // const user=useSelector(state=>state)
    // console.log("userid in paycard",user.root.user.id)
    // let userid=user?.root?.user?.id
    // const payment=useSelector(selectPaymentDetails)
    
    // const paymentItems ={
    //     name:"Online Doctor consultancy",
    //     price:doctors?.fees,
    //     doctor:doctors?.firstName +doctors?.lastName,
    //     userId:userid,
    //     doctorImage:doctors?.image,
    //     doctorsDepartment:doctors?.department,
    //     doctorId:doctors?._id,
    //     date:payment?.date,
    //     time:payment?.time
    // }

    // console.log("paymentItems in paycard",paymentItems)


  return (
    <>
    
        <div className='mt-2 sm:mt-3'>
                <div class='w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
                    <div class='max-w-md mx-auto'>
                        <div class='p-4 sm:p-6'>
                            <div class='flex flex-row'>
                                <span>Doctor Consultation Fees  </span><p class='text-[17px] font-bold text-[#0FB478]'>  ₹ {price}</p>
                               </div>
                            {/* <p class='text-[#7C7C80] font-[15px] mt-6'>Appointed Time : <span className='font-bold'>04:00 PM</span></p> */}

                            <Link class='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-blue-600 rounded-[14px] hover:bg-blue-800 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80 text-white'>
                                <PayButton items={paymentItems}/> 
                                {/* <PayButton />  */}
                                {/* <button onClick={(e)=>e.preventDefault()} type='button'>payyy</button> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    
    </>

  )
}

export default PaymentProcess


