import "./style.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { adminLogout } from "../../../store/slice/adminSlice";
import { useDispatch } from 'react-redux';

const Sidebar = () => {
  // const { dispatch } = useContext(DarkModeContext);
  const dispatch=useDispatch()

  const handleLogout=()=>{
    dispatch(userLogout(true))
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">WeCare</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
             <li style={{marginTop:"20px"}}>
            <DashboardIcon className="icon" />
            <Link to ='/admin/dashboard' style={{ textDecoration: "none" }}>
            <span>Dashboard</span>
          </Link>
          </li>
          <p className="title">LISTS</p>
          <Link to="/admin/users" style={{ textDecoration: "none" }}>
               <li style={{marginTop:"20px"}}>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/admin/doctor" style={{ textDecoration: "none" }}>
               <li style={{marginTop:"20px"}}>
              <StoreIcon className="icon" />
              <span>Doctors</span>
            </li>
          </Link >   
          <Link to="/admin/approvals" style={{ textDecoration: "none" }}>
             <li style={{marginTop:"20px"}}>
            <CreditCardIcon className="icon" />
            <span>Approvals</span>
          </li>
            
            </Link>   
            <Link to="/admin/department" style={{ textDecoration: "none" }}>
              
             <li style={{marginTop:"20px"}}>
            <LocalShippingIcon className="icon" />
            <span>Department</span>
          </li>  
              </Link>
              <Link to="/admin/doctor-status" style={{ textDecoration: "none" }}>
               <li style={{marginTop:"20px"}}>
              <PersonOutlineIcon className="icon" />
              <span>Approval/Rejected List</span>
            </li>
          </Link>                                                             
          <Link to="/admin/login" style={{ textDecoration: "none" }}>

             <li style={{marginTop:"20px"}}>
            <ExitToAppIcon className="icon" 
             onClick={handleLogout}
            />
            <span>Logout</span>
          </li>

          </Link>

        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
