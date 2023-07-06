import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PayButton from '../payButton'
import { useSelector } from 'react-redux'
import { selectPaymentDetails } from '../../../store/slice/PaymentSlice'
import useFetch from '../../../hooks/useFetch'
import { useNavigate } from 'react-router-dom';

// import jwt_decode from 'jwt-decode'; 

function PaymentProcess({doctors}) {

    console.log("yyyyyyyyyyyyyyyyyy ",doctors.doctorInfo)
    const [price,setPrice] = useState(doctors?.doctorInfo[0]?.fees)
    const [firstName,setFirstName]=useState(doctors?.doctorInfo[0]?.doctorName)
    const [department,setDepartment]=useState(doctors?.doctorInfo[0]?.department)
    const[id,setId]=useState(doctors?.doctorId)
    const[image,setImage]=useState(doctors?.doctorInfo[0]?.image)
    const postRequest=useFetch('POST')
    const navigate=useNavigate()
    // let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiX2lkIjoiaW5pdCIsImZpcnN0TmFtZSI6ImluaXQiLCJsYXN0TmFtZSI6ImluaXQiLCJlbWFpbCI6ImluaXQiLCJtb2JpbGUiOiJpbml0IiwiZGF0ZU9mQmlydGgiOiJpbml0IiwiZ2VuZGVyIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIl9fdiI6ImluaXQiLCJibG9jayI6ImluaXQiLCJhY3RpdmUiOiJpbml0In0sInN0YXRlcyI6eyJpbml0Ijp7Il9pZCI6dHJ1ZSwiZmlyc3ROYW1lIjp0cnVlLCJsYXN0TmFtZSI6dHJ1ZSwiZW1haWwiOnRydWUsIm1vYmlsZSI6dHJ1ZSwiZGF0ZU9mQmlydGgiOnRydWUsImdlbmRlciI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsIl9fdiI6dHJ1ZSwiYmxvY2siOnRydWUsImFjdGl2ZSI6dHJ1ZX19fSwic2tpcElkIjp0cnVlfSwiJGlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfaWQiOiI2NDY4YmVlNGU1YTg4ZjAzOTgwMTM4OWQiLCJmaXJzdE5hbWUiOiJSYXZpIiwibGFzdE5hbWUiOiJLdW1hciIsImVtYWlsIjoicmF2aUAxMjMuY29tIiwibW9iaWxlIjoiOTE4ODM3NTc2OSIsImRhdGVPZkJpcnRoIjoiMjAyMy0wNS0yMSIsImdlbmRlciI6Ik1hbGUiLCJwYXNzd29yZCI6InNoYTEkM2Y1MzU2NmYkMSQ0NGFmZjQwYWVhOGQ3YmViOTM0OTU4Y2M4YjY1Y2U2ZThlMGMyOWRjIiwiX192IjowLCJibG9jayI6ZmFsc2UsImFjdGl2ZSI6dHJ1ZX0sImlhdCI6MTY4ODEyMzQ2NH0.tonZ925h3tE70HaTUpFCo2Lq9Zu-UIWRB7sNiUzpRAw"
    
    // var decoded = jwt_decode(token);
    // let  decodeuserid =decoded._doc._id
    // console.log("code decodeddd",decoded)
    // console.log(decoded._doc.firstName,decoded._doc.lastName,decoded._doc.email)
  
  
    // const obj={
    //     userName:decoded._doc.firstName,
    //     userlastName:decoded._doc.lastName,
    //     useremail:decoded._doc.email
    // // }
    
    // console.log("code decodeddd",decodeuserid)

    // function paymentHandler() {
    //     // if (!formValidation()) {
    //         var options = {
    //             key: "rzp_test_5kxtiHqzDh1ydC",
    //             key_secret: "oMfQa8ucC3D6akL8FnGn3cka",
    //             amount: 500 ,
    //             // currency: "INR",
    //             // name: "STARTUP_PROJECTS",
    //             // description: "for testing purpose",

    //             handler: function (response) {
    //                 if (response) {
    //      console.log("razor in paycard",paymentItems)

    //                     // setPaymentSuccess(true)
    //                     // submitHandler()
    //                     // let body = {...paymentItems,...obj}
    //                     let body = {...paymentItems,...obj}

    //                     console.log("body",body);
    //                     postRequest('/user/razorpay',body).then((res)=>{

                            

    //                     }).catch((error)=>{
    //                         console.log(error)
    //                     })

    //                 }
    //             },
    //             prefill: {
    //                 name: "Amal Thomas ",
    //                 email: "amalthomas333444@gmail.com",
    //                 contact: "9188375769"
    //             },
    //             notes: {
    //                 address: "Razorpay Corporate office"
    //             },
    //             theme: {
    //                 color: "#3399cc"
    //             }
    //         };
    //         var pay = new window.Razorpay(options);
    //         pay.open();
    //     // }
    // }


    // payment 2
    function paymentHandler() {
        var options = {
          key: "rzp_test_5kxtiHqzDh1ydC",
          key_secret: "oMfQa8ucC3D6akL8FnGn3cka",
        //   amount: 500,
          handler: function (response) {
            if (response.razorpay_payment_id) {
              // Payment successful
              console.log("Payment successful:", response);
              
              // Perform additional operations
              let body = { ...paymentItems, ...obj };
              console.log("body", body);
      
              postRequest('/user/razorpay', body)
                .then((res) => {
                  // Navigate to success page
                  navigate('/success');
                })
                .catch((error) => {
                  console.log(error);
                  // Navigate to failure page
                  navigate('/failure');
                });
            } else {
              // Payment failed
              console.log("Payment failed:", response);
              // Navigate to failure page
              navigate('/failure');
            }
          },
          // ...
        };
      
        var pay = new window.Razorpay(options);
        pay.open();
      }

 
      
      


      
    const user=useSelector(state=>state)
    console.log(user)
    // console.log("userid in paycard",user.root.user.id)
    let userid=user?.root?.user?.id
    console.log(userid)

    const obj={
        userName:user?.root?.user?.userName,
        useremail:user?.root?.user?.email
    }



    const payment=useSelector(selectPaymentDetails)
    
    const paymentItems ={
        name:"Online Doctor consultancy",
        price:price,
        doctor:firstName ,
        // userId:decodeuserid,
        userId:userid,

        doctorImage:image,
        doctorsDepartment:department,
        doctorId:id,
        date:payment?.date,
        time:payment?.time
    }

    console.log("paymentItems in paycard",paymentItems)

    

  return (
    <>
    
        <div className='mt-2 sm:mt-3'>
                <div className='w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
                    <div className='max-w-md mx-auto'>
                        <div className='p-4 sm:p-6'>
                            <div className='flex flex-row'>
                                <span>Doctor Consultation Fees  </span><p className='text-[17px] font-bold text-[#0FB478]'>  ₹ {price}</p>
                               </div>

                            <Link className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-blue-600 rounded-[14px] hover:bg-blue-800 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80 text-white'>
                                <PayButton type='button' items={paymentItems}/> 
                            </Link>
                            <button onClick={paymentHandler}>razorpay</button>

                        </div>
                    </div>
                </div>
            </div>
    
    </>

  )
}

export default PaymentProcess


