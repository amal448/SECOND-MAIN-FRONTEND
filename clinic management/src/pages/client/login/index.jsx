import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useFetch from "../../../hooks/useFetch";

import sideImage from "../../../assets/svg/login-page-logo.svg";
import openEye from "../../../assets/images/open-eye.png";
import closedEYe from "../../../assets/images/closed-eye.png";

import { useDispatch } from 'react-redux';
import { userLogin } from "../../../store/slice/userSlice";

import "./style.scss";

function UserLogin() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [userDataErr, setUserDataErr] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const postRequest = useFetch("POST");

  function handleOnchange(e) {
    console.log("loginhandleOn")
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (
      userData.email == "" ||
      userData.password == "" 
      // userData.confirm_password == ""
    ) {
      for (const key in userData) {
        if (userData[key] == "") {
          setUserDataErr((prev) => {
            return {
              ...prev,
              [key]: "please provide " + key,
            };
          });
        } else {
          setUserDataErr((prev) => {
            return {
              ...prev,
              [key]: "",
            };
          });
        }
      }
      return;
    }
    if (
      // userData.password != userData.confirm_password ||
      userData.password?.length < 8
    ) {
      if (userData.password != userData.confirm_password) {
        setUserDataErr((prev) => {
          return {
            ...prev,
            password: "password is not matching",
          };
        });
      }
      if (userData.password?.length < 8) {
        setUserDataErr((prev) => {
          return {
            ...prev,
            password: "password must be more than 8 characters",
          };
        });
      }
      return
    }
    setUserDataErr({email:"",password:"",confirm_password:""})
    
    try
    {
        postRequest('/user/login', userData)
        .then(res => {
          console.log("at login postrequest")
            localStorage.setItem('user-token', JSON.stringify(res.token))
            localStorage.setItem('logedIn', true)
            window.location = '/'
            dispatch(userLogin(res.user))
          }).catch(err => {
            console.log(err);
            setUserDataErr(prev => {
              return {
                ...prev,
                [err?.type]: err?.message
                // [err?.type]: err?.message
              }
            })
          });
    }catch (error) {
        console.log(error);
      }

}

  return (
    <div className="admin-login">
      <div className="info">
        <h1>User Sign In</h1>
        <h5>Please Login To Continue</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since.
        </p>
        <form>
          <div className="form-control">
            <label htmlFor="email">email {userDataErr.email && <span>*{userDataErr.email}</span>} </label>
            <input type="text" name="email" onChange={handleOnchange} id="email" />
          </div>
          <div className="form-control">
          <img src={showPassword ? openEye : closedEYe} onClick={() => setShowPassword(show => !show)} alt="" />
            <label htmlFor="password">password {userDataErr.password && <span>*{userDataErr.password}</span>}</label>
            <input type={showPassword ? "text" : "password"} name="password" onChange={handleOnchange} id='password' />
          </div>
          {/* <div className="form-control">
            <label htmlFor="confirm password">confirm password {userDataErr.confirm_password && <span>*{userDataErr.confirm_password}</span>}</label>
            <input
              type={showPassword?"text":"password" } 
              name="confirm_password" 
              onChange={handleOnchange}
              id="password-confirm-password"
            />
          </div> */}
          <div className="form-control">
          <Link to="/signup">I don't have an account</Link>
            <input type="button" name="button" onClick={handleSubmit} value="Sign In" />
          </div>
        </form>
      </div>
      <div className="image">
        <img src={sideImage} alt="" />
      </div>
    </div>

  );
}

export default UserLogin;
