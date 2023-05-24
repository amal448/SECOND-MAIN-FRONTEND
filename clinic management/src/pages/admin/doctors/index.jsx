import "./style.scss"
import Sidebar from "../../../components/adminComponents/sidebar";
import Navbar from "../../../components/adminComponents/navbar";
import Doctors from "../../../components/adminComponents/doctors";
// import Datatable from "../datatable/Datatable";
import { useEffect, useState } from "react"
import useFetch from "../../../hooks/useFetch";

const getRequest=useFetch("GET")

const AdminDoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
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
        <Doctors doctors={doctors} setDoctors={setDoctors} />
      </div>

    </div>
  )
}



export default AdminDoctorsList