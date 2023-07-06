import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { selectUser  } from '../../../store/slice/userSlice'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function BookUser({ doctors }) {
    console.log('jeeh')


    console.log("doctors777777777777", doctors)
    console.log("doctors._id", doctors._id)
    // const user=useSelector(selectUser )
    const user = useSelector(state => state)
    console.log("user from userSlice is not defined case is this", user);

    const [forMe, setForMe] = useState(true)
    const [othersFullName, setOthersFullName] = useState("")
    const [othersEmail, setOthersEmail] = useState()
    const navigate = useNavigate()

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
                        <h1 className='mb-3 text-2xl font-bold'>Confirm </h1>

                        <div className="mb-5">
                            <label
                                htmlfor="name"
                                className="mb-3 block text-base font-normal text-[#07074D]"

                         onClick={()=>console.log("here is errortyttttttttghhhhhhhhhhhhhhhhhhhhhhhhh")}   >
                               Click Submit for Payment Procedures.
                            </label>


                        </div>


                        <div>

                            <button type='button' onClick={() => bookingHandler(doctors)}
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
