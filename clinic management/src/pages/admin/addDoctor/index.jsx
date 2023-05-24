import React, { useState } from "react";
// import useFetch from "../../../hooks/useFetch";
// import { checkEmail, checkMobileNumberHasAnyCharacter, checkPasswordHasSpecialCharacters } from '../../../util/utilFunctions'
import AdminAddDoctor from "../../../components/adminComponents/addDoctor/AddDoctor";
import Sidebar from "../../../components/adminComponents/sidebar";
import Navbar from "../../../components/adminComponents/navbar";
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

    // <div className="admin-add-doctor">
    //   <div className="header">
    //     <h1>Add Doctor</h1>
    //   </div>
    //   <form>
    //     <h5>Add Doctor Information</h5>
    //     <div className="form-group">
    //       <div className="form-control">
    //         <label htmlFor="userName">
    //           {formDataErr.username && <span>*{formDataErr.username}</span>}
    //           name
    //         </label>
    //         <input  onChange={onHandleChange} type="text" name="username" id="userName" />
    //       </div>
    //       <div className="form-control">
    //         <label htmlFor="password">
    //           {formDataErr.password && <span>*{formDataErr.password}</span>}
    //           password 
    //         </label>
    //         <input  onChange={onHandleChange} type="password" name="password" id="password" />
    //       </div>
    //     </div>
    //     <div className="form-group">
    //       <div className="inner-form-group">
    //         <div className="form-control">
    //           <label htmlFor="CTC">
    //             {formDataErr.CTC && <span>*{formDataErr.CTC}</span>}
    //              CTC
    //           </label>
    //           <input
    //             onChange={onHandleChange}
    //             type="number"
    //             name="CTC"
    //             id="CTC"
    //           />
    //         </div>
    //         <div className="form-control">
    //           <label htmlFor="experience">
    //             {formDataErr.experience && 
    //               <span>*{formDataErr.experience}</span>
    //             }
    //             experience
    //           </label>
    //           <input
    //             onChange={onHandleChange}
    //             type="text"
    //             name="experience"
    //             id="experience"
    //           />
    //         </div>
    //       </div>
    //       <div className="form-control">
    //         <label htmlFor="age">
    //           {formDataErr.age && <span>*{formDataErr.age}</span>} 
    //           age
    //         </label>
    //         <input
    //           onChange={onHandleChange}
    //           type="number"
    //           name="age"
    //           id="age"
    //         />
    //       </div>
    //     </div>
    //     <div className="form-group">
    //       <div className="inner-form-group">
    //         <div className="form-control">
    //           <label htmlFor="email">
    //             {formDataErr.email && <span>*{formDataErr.email}</span>}
    //              email
    //           </label>
    //           <input
    //             onChange={onHandleChange}
    //             type="text"
    //             name="email"
    //             id="email"
    //           />
    //         </div>
    //       </div>
    //       <div className="inner-form-group">
    //         <div className="form-control">
    //           <label htmlFor="mobileNumber">
    //             {formDataErr.mobile && <span>*{formDataErr.mobile}</span>}
    //              mobile
    //           </label>
    //           <input
    //             onChange={onHandleChange}
    //             type="number"
    //             name="mobile"
    //             id="mobileNumber"
    //           />
    //         </div>
    //         <div className="form-control">
    //           <label htmlFor="department">
    //             {formDataErr.department && (
    //               <span>*{formDataErr.department}</span>
    //             )}
    //             department
    //           </label>
    //           <input
    //             onChange={onHandleChange}
    //             type="text"
    //             name="department"
    //             id="department"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <input onClick={onSubmitHandler} type="button" value="register" id="" />
    //   </form>
    // </div>
  );
}

export default AddDoctor;
