import React,{useEffect,useState} from 'react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useFetch from '../../../hooks/useFetch';
import DatePicker from "react-horizontal-datepicker"
import { useSelector } from 'react-redux';
import { paymentData } from '../../../store/slice/PaymentSlice';


function TimeSlot({doctors,id}) {

  console.log("doctor id",id);
  console.log("doctor in timeSlot",doctors)

  const user=useSelector(state=>state)

  console.log("user in timeSlot ",user)

    const dispatch=useDispatch();
    const history=useNavigate();
    const postRequest=useFetch('POST')

    const [time,setTime]=useState()
    const [lastClickedButton, setLastClickedButton] = useState(null);//style select times
    const [date,setDate]=useState()
    const [excludeDate,setExcludeDate]=useState([]) //deal with booked time

    let doctorId=doctors?._id
    let userId=user.root.user.id

  console.log("userId is here ",userId);

    const doctorInfo =[
    {
      doctorName:doctors.firstName + doctors.lastName,
      department:doctors.department,
      fees:doctors.fees, 
      image:doctors.image, 
      email:doctors.email
    }

    ];
    const userInfo =[
      {
        userName:user?.root.user.userName,
        email:user?.root.user.email
      }
    ]

    const credentials={
      doctorId,
      userId,
      doctorInfo,
      userInfo,
      date,
      time
    }



  const  doctorTimings=doctors?.doctorTimings || {}

    const day=moment(date,'MM/DD/YYYY').format('dddd')  //date converted to day
    const timings=doctorTimings[day]?.filter((item)=>!excludeDate.includes(item)) || []

  const timeHandler=(e,id) =>{
    console.log("time valuee",e.target.value)
    setTime(e.target.value);
    setLastClickedButton(id)
  }

  const selectedDay =(val)=>{
    console.log("selected day",val)
   const changedDate=moment(val).format('MM/DD/YYYY');
   console.log("changedDate",changedDate);
    setDate(changedDate)
  }

  useEffect(()=>{

    const fetchedData =async ()=>{
      try{

        const availabilityResponse=await postRequest('/user/doctor/checkAvailability',({date,doctorId}))
        const {bookedDates,bookedTimes }=availabilityResponse;
        setExcludeDate(bookedTimes)

      }
      catch(error)
      {
        return error
      }
    }

    if (date && doctorId) {
      fetchedData()
    }
  },[date,doctorId])


  const bookingHandler =(doctors)=>{
    
  console.log("doctors in timeSlot",doctors)
  console.log("Now its time to get credentials",credentials)
  dispatch(paymentData(credentials));

  history('/book-User',{state:{doctors:doctors}})
}


  return (
    <>
    <div className="flex justify-center mx-auto p-6 w-2/6">

    <DatePicker getSelectedDay={selectedDay}
    endDate={50}
    selectDate={new Date("2020-04-30")}
    labelFormat={"MMMM"}
    color={"#374e8c"}          
/>

    </div>
    
    <div className="flex flex-wrap justify-center m-4">
        <div className="grid grid-cols-4 gap-4 md:grid-cols-3 lg:grid-cols-4">
       {timings.map((time,index)=>{
        return (
          <button key={index}
          className={`mt-[14px] cursor-pointer truncate rounded-[4px] border border-[#E7EAEE] p-3 text-[#191D23] ${
            lastClickedButton === index ? 'text-white bg-green-700' : 'hover:border-green-700'
          }`}
          value={time}
          onClick={(e) => timeHandler(e, index)}        
          >
                {time}
          </button>
        )
       })}


        </div>
      </div>


<div className="flex justify-center mb-5">
  {time && date && 
  (
  // <button onClick={bookingHandler(doctors)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-3">
  //   Book Now
  // </button>
<button onClick={() => bookingHandler(doctors)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-3">
  Book Now
</button>

  )}
</div>
</>

  )
}

export default TimeSlot
