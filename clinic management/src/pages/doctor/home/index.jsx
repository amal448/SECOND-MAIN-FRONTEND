import React,{useState,useEffect} from 'react';
import DoctorHomeData from '../../../components/doctorComponents/doctorhomedata';
import jwt_decode from 'jwt-decode'; 
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';


function DoctorHome() {
  const GetRequest=useFetch('GET')
  const [appointments,setAppointments]=useState()
  const [payment,setPayment]=useState()
  const [appointmentData,setAppointmentData] = useState([]);
  const [patients,setPatients] = useState([]);


  const info = useSelector(state => state?.doctor?.info);

  let doctorId=info?._id


  useEffect(()=>{
    GetRequest('/doctor/Appointmentdata', null, { withCredentials: true })
    .then((data)=>{
      setAppointments(data.length)
      setAppointmentData(appointments?.data)
    })
    GetRequest(`/doctor/monthly-report/${doctorId}`).then((data)=>{
          console.log("monthly report ",data)
        })

          GetRequest(`/doctor/get-patients`).then((data)=>{
      console.log("get patient",data)
      setPatients(data);
    })
      GetRequest(`/doctor/getFullProfit/${doctorId}`).then((result)=>{
      setPayment(result[0]?.total);
    })




  },[])


  return (
    <div>
< DoctorHomeData appointments={appointments} payment={payment} patients={patients} doctorId={doctorId}/>
    </div>
  );
}

export default DoctorHome;
