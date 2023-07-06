import { useEffect, useState } from 'react'
import DoctorsApprovalRejected from '../../../components/adminComponents/DoctorStatus'
import Sidebar from "../../../components/adminComponents/sidebar";
import Navbar from "../../../components/adminComponents/navbar";
import useFetch from "../../../hooks/useFetch";

function DoctorStatus() {

  const [doctors, setDoctors] = useState([]);
  const getRequest=useFetch("GET")
  useEffect(()=>{
    getRequest('/admin/get-all-doctors').then(response =>{
      console.log("doctor@index",response.allDoctors)
      setDoctors(response.allDoctors)
    }).catch((err)=>{
      console.log(err);
    })
  },[])




  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <DoctorsApprovalRejected  doctors={doctors} setDoctors={setDoctors} />

      </div>
    </div>
  )
}

export default DoctorStatus
