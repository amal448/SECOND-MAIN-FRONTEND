// import React from 'react'

// import siteLogo from './../../../assets/svg/site-logo.svg'
// import notificationIcon from './../../../assets/svg/notification-icon.svg'
// import searchIcon from './../../../assets/svg/search-icon.svg'
// import './style.scss'
// import { NavLink } from 'react-router-dom'

// function AdminNavBar() {
   
// // if(adminToken)
// // {
// //  swal({
// //      title: "Are you sure?",
// //       text:"Are you sure !",
// //       icon:"warning",
// //       buttons: true,
// //       dangerMode :true
// //  }).then((willDelete)=>{
// //     dispatchEvent(adminLogout(willDelete))
// //  })   
// // }

//   return (
//     <nav className='admin-navbar'>
//         <div className='top'>
//             <div className='hero-icon'>
//                 <img src={siteLogo} alt="" />
//                 <h2>Skin Care</h2>
//             </div>
//             <div className='search'>
//                 <input placeholder='search...' type='text' name='' id='' />
//                 <img src={searchIcon} alt='' />
//             </div>
//             <div className='notification'>
//                 <img src={notificationIcon} alt="" />
//             </div>
//         </div>
//         <div className='bottom'>
//             <ul className='links'>
//                 <li><NavLink to={'/admin/dashboard'}>Dashboard</NavLink></li>
//                 <li>Appoinment</li>
//                 <li><NavLink to ={'/admin/doctor'}>Doctors </NavLink></li>
//                 <li>Department</li>
//                 <li>Patients</li>
//                 <li><NavLink to={"/admin/users"}>Users</NavLink></li>
//                 <li>Payments</li>
//                 <li>Service</li>
//                 <li>Help</li>

               

//             </ul>
//         </div>
        



//     </nav>
//   )
// }

// export default AdminNavBar

import "./style.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
