import "./style.scss"
import Sidebar from "../../../components/adminComponents/sidebar";
import Navbar from "../../../components/adminComponents/navbar";
// import DepartmentList from "../../../components/Admin/departments/Departments"
// import { getAllDepartments } from "../../../Helpers/adminHelper"
import DepartmentList from "../../../components/adminComponents/departments/Departments";
import { useEffect, useState } from "react"
import useFetch from "../../../hooks/useFetch";


const getRequest=useFetch("GET")

function Departments ()
{

  const [departments,setDepartments]=useState([])

  useEffect(()=>{
    getRequest('/admin/get-all-department').then(response =>{
      console.log("response",response);
      setDepartments(response)
    })
  })
  

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <DepartmentList departments={departments} setDepartments={setDepartments} />
      </div>
    </div>
  )
}

export default Departments;