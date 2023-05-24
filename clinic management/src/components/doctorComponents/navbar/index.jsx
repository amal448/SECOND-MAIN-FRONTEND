import React from 'react'
import { NavLink } from 'react-router-dom'
import swal from 'sweetalert'

import siteLogo from './../../../assets/svg/site-logo.svg'
import './style.scss'
function  DoctorNavBar() {
    const doctorToken=localStorage.getItem('doctor-token')
    function logoutHandler()
    {
        if(doctorToken){
            swal(
            {
                title:"Are you sure?",
                text:"Are you sure!",
                icon:"warning",
                buttons:true,
                dangerMode: true
            }).then((willDelete)=>{
                if(willDelete)
                {
                    localStorage.removeItem('doctor-token')
                    window.location='/doctor/login'
                }
            })
        }
    }
  return (
   <nav className='doctor-navbar'>
    <div className='logo'>
        <img src={siteLogo} alt='' />
        <span>Skin Care</span>
    </div>
    <ul>
        <li>
            <NavLink to='/doctor/home'>Home</NavLink>
        </li>
        <li>Slots</li>
        <li> All Appointments</li>
        <li>Patients</li>
        <li>
            {
                doctorToken ?
                <button onClick={logoutHandler}>LogOut</button>
                :
                <button onClick={()=>window.location='/doctor/login'}>Login</button>

            }
        </li>
    </ul>


   </nav>
  )
}

export default DoctorNavBar
