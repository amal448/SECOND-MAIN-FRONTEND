import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PayButton from '../payButton'
import { useSelector } from 'react-redux'
import { selectPaymentDetails } from '../../../store/slice/PaymentSlice'
import useFetch from '../../../hooks/useFetch'
import { useNavigate } from 'react-router-dom';


function PaymentProcess({ doctors }) {

  console.log("yyyyyyyyyyyyyyyyyy ", doctors.doctorInfo)
  const [price, setPrice] = useState(doctors?.doctorInfo[0]?.fees)
  const [firstName, setFirstName] = useState(doctors?.doctorInfo[0]?.doctorName)
  const [department, setDepartment] = useState(doctors?.doctorInfo[0]?.department)
  const [id, setId] = useState(doctors?.doctorId)
  const [image, setImage] = useState(doctors?.doctorInfo[0]?.image)
  
  
  const postRequest = useFetch('POST')
  const navigate = useNavigate()



  // payment 2
  function paymentHandler() {
    console.log("started payhandler razorpay")
    var options = {
      key: "rzp_test_5kxtiHqzDh1ydC",
      key_secret: "oMfQa8ucC3D6akL8FnGn3cka",
        amount: price*100,
      handler: function (response) {

        console.log("Payment response", response);


        if (response?.razorpay_payment_id) {
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
      "modal": {
        "ondismiss": function () {
          console.log("closedddd")
          
          // navigate('/failure');
          navigate('/payment-process');

        }
      }
      // ...
    };

    var pay = new window.Razorpay(options);
    pay.open();

    pay.on('payment.failed', function (response) {
      // Swal.close()
      pay.close()
      console.log("failed response", response)
          navigate('/payment-process');

      // navigate('/failure');
      // notify('Error opening Razorpay"');
      // orderCancelled(res.message.orderID);
    });
  }







  const user = useSelector(state => state)
  console.log(user)
  // console.log("userid in paycard",user.root.user.id)
  let userid = user?.user?.id
  console.log(userid)

  const obj = {
    userName: user?.user?.userName,
    useremail: user?.user?.email
  }



  const payment = useSelector(selectPaymentDetails)

  const paymentItems = {
    name: "Online Doctor consultancy",
    price: price,
    doctor: firstName,
    // userId:decodeuserid,
    userId: userid,

    doctorImage: image,
    doctorsDepartment: department,
    doctorId: id,
    date: payment?.date,
    time: payment?.time
  }

  console.log("paymentItems in paycard", paymentItems)



  return (
    <>

      <div className='mt-2 sm:mt-3'>
        <div className='w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
          <div className='max-w-md mx-auto'>
            <div className='p-4 sm:p-6'>
              <div className='flex flex-row'>
                <span>Doctor Consultation Fees  </span><p className='text-[17px] font-bold text-[#0FB478]'>  ₹ {price}</p>
              </div>

              <Link onClick={paymentHandler} className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-blue-600 rounded-[14px] hover:bg-blue-800 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80 text-white'>
                {/* <PayButton type='button' items={paymentItems} /> */}
                Payment
              </Link>
              {/* <button onClick={paymentHandler}>razorpay</button> */}

            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default PaymentProcess


