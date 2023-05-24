import "./style.scss"
import Sidebar from "../../../components/adminComponents/sidebar";
import Navbar from "../../../components/adminComponents/navbar";
// import DepartmentList from "../../../components/Admin/departments/Departments"
// import { getAllDepartments } from "../../../Helpers/adminHelper"
import DepartmentList from "../../../components/adminComponents/departments/Departments";
// import { useEffect, useState } from "react"
function Departments ()
{

  

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <DepartmentList />
      </div>
    </div>
  )
}

export default Departments;