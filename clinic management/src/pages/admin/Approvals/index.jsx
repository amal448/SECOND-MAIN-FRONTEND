
import React,{useEffect,useState} from 'react'
import useFetch from '../../../hooks/useFetch'

import "./style.scss"
import Sidebar from "../../../components/adminComponents/sidebar";
import Navbar from "../../../components/adminComponents/navbar";
import DoctorApplication from '../../../components/adminComponents/doctorApproval';



function DoctorApproval () {
  const getRequest=useFetch("GET")
  
  const [applicant,setApplicant] =useState([])
       useEffect(()=>{
       getRequest('/admin/apply-doctor').then(applicant =>{ 
           console.log("users@index",applicant)
           setApplicant(applicant)
       }).catch((err)=>{
        console.log(err)
       })
       },[])


  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DoctorApplication applicant={applicant} setApplicant={setApplicant} />
      </div>
    </div>
  )
}

export default DoctorApproval
