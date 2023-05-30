
import React,{useEffect,useState} from 'react'
import useFetch from '../../../hooks/useFetch'
const getRequest=useFetch("GET")

import "./style.scss"
import Sidebar from "../../../components/adminComponents/sidebar";
import Navbar from "../../../components/adminComponents/navbar";
import Users from "../../../components/adminComponents/users";

const List = () => {

  const [users,setUsers] =useState([])
       useEffect(()=>{
       getRequest('/admin/get-all-users').then(response =>{ 
           console.log("users@index",response.alluser)
           setUsers(response.alluser)
       }).catch((err)=>{
        console.log(err)
       })
       },[])


  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Users users={users} setUsers={setUsers} />
      </div>
    </div>
  )
}

export default List
