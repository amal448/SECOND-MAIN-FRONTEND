import "./style.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Widget = ({ type }) => {
  const [details,setDetails] = useState();
  let getRequest=useFetch('GET')
  useEffect(()=>{
    getRequest('/admin/data-count').then((details)=>{
     console.log("dadadadtttttttttt",details)
      setDetails(details)
      console.log("detailsdetailsdetails",details)
    })
  },[])
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "PATIENTS",
        isMoney: false,
        link: "See all patients",
        linkAddress:'users',
        data:details?.patients,
      };
      break;
    case "order":
      data = {
        title: "DOCTORS",
        isMoney: false,
        link: "View all Doctors",
        linkAddress:'doctors',
        data:details?.doctors,
       
      };
      break;
    case "earning":
      data = {
        title: "APPOINTMENTS",
        isMoney: true,
        data:details?.appointments,
        linkAddress:'doctors',
        
      };
      break;
    case "balance":
      data = {
        title: "TRANSACTIONS",
        isMoney: true,
        data:details?.Transaction
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.data}
        </span>
        <Link to={data?.linkAddress}><span className="link">{data.link}</span></Link>
      </div>
      
    </div>
  );
};

export default Widget;
