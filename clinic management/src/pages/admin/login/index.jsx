import React, { useState } from "react";
import sideImage from "../../../assets/svg/login-page-logo.svg";
import openEye from "../../../assets/images/open-eye.png";
import closedEYe from "../../../assets/images/closed-eye.png";

import "./style.scss";
import useFetch from "../../../hooks/useFetch";

function AdminLogin() {

  const [formData, setFormData] = useState({
    username: "",
    password: "",

  });
  const [formDataErr, setFormDataErr] = useState({
    username: "",
    password: "",

  });
  const [showPassword, setShowPassword] = useState(false);

  const postRequest=useFetch("POST")

  function handleOnchange(e) {

    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.username == "" ||
      formData.password == "" 
      // formData.confirm_password == ""
    ) {
      for (const key in formData) {
        if (formData[key] == "") {
          setFormDataErr((prev) => {
            return {
              ...prev,
              [key]: "please provide "+key,
            };
          });
        } else {
          setFormDataErr((prev) => {
            return {
              ...prev,
              [key]: "",
            };
          });
        }
      }
    }
    if (
      // formData.password != formData.confirm_password ||
      formData.password?.length < 8
    ) {
      if (formData.password?.length < 8) {
        setFormDataErr((prev) => {
          return {
            ...prev,
            password: "password must be more than 8 characters",
          };
        });
      }
      // if (formData.password != formData.confirm_password) {
      //   setFormDataErr((prev) => {
      //     return {
      //       ...prev,
      //       confirm_password: "password is not matching",
      //     };
      //   });
      // }
      return;
    }
    setFormDataErr({username:"",password:""})
  
  try {

    postRequest('/admin/login',formData).then(res=> {
      localStorage.setItem('admin-token',JSON.stringify(res.token))
      window.location ="/admin/dashboard"
    }).catch(err => {
      console.log(err);
      try {
        setFormDataErr(prev =>{
          return {
            ...prev,
            ...err
          }
        })
      } catch (error){
        console.log(error)
      }
    })
  } catch (error){
    console.log(error)
  }

  }

  return (
    <div className="admin-login">
      <div className="info">
        <h1>Admin Sign In</h1>
        <h5>Please Login To Continue</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since.
        </p>
        <form>
          <div className="form-control">
            <label
              htmlFor="username"
              style={{ color: `${formDataErr.username ? "red" : ""}` }}
            >
              {formDataErr.username && <span>*{formDataErr.username}</span>}
              {!formDataErr.username && 'username'}
            </label>
            <input
              type="text"
              name="username"
              onChange={handleOnchange}
              id="username"
            />
          </div>
          <div className="form-control">
            <img
              src={showPassword ? openEye : closedEYe}
              onClick={() => setShowPassword((show) => !show)}
              alt=""
            />
            <label htmlFor="password" 

              style={{ color: `${formDataErr.password ? "red" : ""}` }}>
            {formDataErr.password && <span>*{formDataErr.password}</span>}
              {!formDataErr.password && 'password'} </label>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleOnchange}
              id="password"
            />
          </div>
          {/* <div className="form-control">
            <label htmlFor="confirm password"
              style={{ color: `${formDataErr.username ? "red" : ""}` }}>
            {formDataErr.confirm_password && <span>*{formDataErr.confirm_password}</span>}

                {!formDataErr.confirm_password && 'confirm password'}</label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirm_password"
              onChange={handleOnchange}
              id="password-confirm-password"
            />
          </div> */}
          <div className="form-control">
            <input
              type="button"
              onClick={handleSubmit}
              name="button"
              onChange={handleOnchange}
              value="Sign In"
            />
          </div>
        </form>
      </div>
      <div className="image">
        <img src={sideImage} alt="" />
      </div>
    </div>
  );
}

export default AdminLogin;
