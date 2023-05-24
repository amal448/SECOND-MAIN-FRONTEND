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

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">lamadmin</span>
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
          {/* <p className="title">USEFUL</p>
             <li style={{marginTop:"20px"}}>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
             <li style={{marginTop:"20px"}}>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
             <li style={{marginTop:"20px"}}>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li> */}
          {/*    <li style={{marginTop:"20px"}}>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
             <li style={{marginTop:"20px"}}>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
             <li style={{marginTop:"20px"}}>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li> */}
             <li style={{marginTop:"20px"}}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
