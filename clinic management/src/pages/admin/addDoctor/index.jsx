import React, { useState } from "react";
// import useFetch from "../../../hooks/useFetch";
// import { checkEmail, checkMobileNumberHasAnyCharacter, checkPasswordHasSpecialCharacters } from '../../../util/utilFunctions'
import AdminAddDoctor from "../../../components/adminComponents/addDoctor/AddDoctor";
import Sidebar from "../../../components/adminComponents/sidebar";
import Navbar from "../../../components/adminComponents/navbar";
import { useNavigate } from "react-router-dom";
import "./style.scss";
function AddDoctor() {

  return (

    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <AdminAddDoctor/>
    </div>
  </div>

   
  );
}

export default AddDoctor;
