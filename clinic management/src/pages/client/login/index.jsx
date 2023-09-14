
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import useFetch from "../../../hooks/useFetch";

import openEye from '../../../assets/images/open-eye.png';
import closedEYe from '../../../assets/images/closed-eye.png';

import { useDispatch } from 'react-redux';
import { userLogin } from "../../../store/slice/userSlice";

const UserLogin = () => {

  const [userData, setUserData] = useState({ email: "", password: "" });
  const [userDataErr, setUserDataErr] = useState({ email: "", password: "" });
  const [password, setShowPassword] = useState(false);
  const dispatch = useDispatch();


  const navigate = useNavigate()
  const postRequest = useFetch("POST");
  function handleOnchange(e) {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleForgotPassword() {
    navigate('/Email-Verification'); // Navigate to the forgot password page
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
    setUserDataErr({ email: "", password: "", confirm_password: "" })

    try {
      console.log("user login started ..")
      postRequest('/user/login', userData)
        .then(res => {
console.log("datatatatataatatatat",res)

          console.log(res?.token)
          localStorage.setItem('user-token', JSON.stringify(res?.token))
          localStorage.setItem('logedIn', true)
          console.log('resssso ppp ', res)
          console.log('resssso ppp ser ', res?.user)
          dispatch(userLogin(res?.user))

          // dispatch(setUser(res.user))
          // window.location = '/'
          navigate('/')
        }).catch(err => {
          console.log("user login catch ..")

          console.log(err);
          setUserDataErr(prev => {
            return {
              ...prev,
              [err?.type]: err?.message
              // [err?.type]: err?.message
            }
          })
        });
    } catch (error) {
      console.log(error);
    }


  }


  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" style={{ backgroundImage: 'url("/doctorpatient/image.jpg")' }}>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="/medicallogo1.jpeg" alt="WeCare" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">WeCare </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address {userDataErr.email && <span className="text-red-500 text-sm mt-1">*{userDataErr.email}</span>} </label>
            <div className="mt-2">
              <input id="email" name="email" onChange={handleOnchange} type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password {userDataErr.password && <span className="text-red-500 text-sm mt-1">*{userDataErr.password}</span>}</label>
              <div className="text-sm">
                <Link to="#" onClick={handleForgotPassword} className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
              </div>
            </div>
            <div className="mt-2 relative">
              <input id="password" onChange={handleOnchange} name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              <img
                src={password ? openEye : closedEYe}
                onClick={() => setShowPassword((show) => !show)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 w-6 h-6 cursor-pointer "
                alt=""
              />

            </div>
          </div>

          <div>
            <button type="submit" onClick={handleSubmit} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Create New Account</Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;






