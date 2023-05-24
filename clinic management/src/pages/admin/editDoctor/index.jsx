import React, { useState,useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { checkEmail, checkMobileNumberHasAnyCharacter, checkPasswordHasSpecialCharacters } from '../../../util/utilFunctions'

import "./style.scss";
import { useLocation } from "react-router-dom";

function EditDoctor() {
  let location=useLocation() 
  const [doctor, setDoctor] = useState({
    CTC: "",
    experience: "",
    age: "",
    username: "",
    password: "",
    email: "",
    mobile: "",
    department: "",
    id:location.state.doctor
  });


  const [doctorErr, setDoctorErr] = useState({
    CTC: "",
    experience: "",
    age: "",
    username: "",
    password: "",
    email: "",
    mobile: "",
    department: "",
  });


  const getRequest=useFetch("GET")
  const postRequest = useFetch("POST");

   useEffect(()=>{
    getRequest(`/admin/get-doctor/${location.state.doctor}`).then(result =>{
        setDoctor(result.doctor)
    })
  },[])





  function onHandleChange(e) {
    setDoctor((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      };
    });
  }

  function onSubmitHandler() {
    console.log(doctor);
    if (doctor.CTC == "" || doctor.experience == "" || doctor.age == "" || doctor.username == "" || doctor.password == "" || doctor.email == "" || doctor.mobile == "" || doctor.department == "") {
      for (const key in doctor) {
        if (doctor[key] == "") {
          setDoctorErr(prev => {
            return {
              ...prev,
              [key]: "please provide "
            }
          })
        } else {
          setDoctorErr(prev => {
            return {
              ...prev,
              [key]: ""
            }
          })
        }
      }
      return;

    } else {

      if(!checkEmail(doctor.email)) {
        setDoctorErr(prev => {
          return {
            ...prev,
            email: "please provide valid email"
          }
        })
        return;
      } else {
        setDoctorErr(prev => {
          return {
            ...prev,
            email: ""
          }
        })
      }
      if(doctor.mobile?.length > 10 || doctor.mobile?.length < 10) {
        setDoctorErr(prev => {
          return {
            ...prev,
            mobile: "please provide valid"
          }
        })

        return;
      } else {
        setDoctorErr(prev => {
          return {
            ...prev,
            mobile: ""
          }
        })
      }

      if(!checkPasswordHasSpecialCharacters(doctor.password)) {
        setDoctorErr(prev => {
          return {
            ...prev,
            password: "password must have special character"
          }
        })

        return
      } else {
        setDoctorErr(prev => {
          return {
            ...prev,
            password: ""
          }
        })
      }
      
      postRequest('/admin/edit-doctor', doctor).then(res => {
        if (res.ok) {
          window.location = "/admin/doctor"
        }
      }).catch(err => {
        delete err?.ok;
        setDoctorErr(prev => {
          return {
            ...prev,
            ...err
          }
        })
      })
    }
  }

  return (
    <div className="admin-add-doctor">
      <div className="header">
        <h1>Edit Doctor</h1>
      </div>
      <form>
        <h5>Add Doctor Information</h5>
        <div className="form-group">
          <div className="form-control">
            <label htmlFor="userName"  style={{ color: `${doctorErr.username ? 'red' : ''}` }}    >
              {doctorErr.username && <span>*{doctorErr.username}</span>}
              name
            </label>
            <input  onChange={onHandleChange} type="text" name="username" value={doctor.email} id="userName" />
          </div>
          <div className="form-control">
            <label htmlFor="password"    >
              {doctorErr.password && <span>*{doctorErr.password}</span>}
              password 
            </label>
            <input  onChange={onHandleChange} type="password" value={doctor.password} name="password" id="password" />
          </div>
        </div>
        <div className="form-group">
          <div className="inner-form-group">
            <div className="form-control">
              <label htmlFor="CTC" style={{ color: `${doctorErr.CTC ? 'red' : ''}` }}>
                {doctorErr.CTC && <span>*{doctorErr.CTC}</span>}
                 CTC
              </label>
              <input
                onChange={onHandleChange} value={doctor.CTC}
                type="number"
                name="CTC"
                id="CTC"
              />
            </div>
            <div className="form-control">
              <label htmlFor="experience" style={{ color: `${doctorErr.experience ? 'red' : ''}` }} > 
                {doctorErr.experience && 
                  <span>*{doctorErr.experience}</span>
                }
                experience
              </label>
              <input
                onChange={onHandleChange}
                type="text"
                value={doctor.experience}
                name="experience"
                id="experience"
              />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="age">
              {doctorErr.age && <span>*{doctorErr.age}</span>} 
              age
            </label>
            <input
              onChange={onHandleChange}
              type="number"
              value={doctor.age}
              name="age"
              id="age"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="inner-form-group">
            <div className="form-control">
              <label htmlFor="email">
                {doctorErr.email && <span>*{doctorErr.email}</span>}
                 email
              </label>
              <input
                onChange={onHandleChange}
                type="text"
                value={doctor.email}
                name="email"
                id="email"
              />
            </div>
          </div>
          <div className="inner-form-group">
            <div className="form-control">
              <label htmlFor="mobileNumber">
                {doctorErr.mobile && <span>*{doctorErr.mobile}</span>}
                 mobile
              </label>
              <input
                onChange={onHandleChange}
                type="number"
                value={doctor.mobile}
                name="mobile"
                id="mobileNumber"
              />
            </div>
            <div className="form-control">
              <label htmlFor="department">
                {doctorErr.department && (
                  <span>*{doctorErr.department}</span>
                )}
                department
              </label>
              <input
                onChange={onHandleChange}
                type="text"
                name="department"
                value={doctor.department}
                id="department"
              />
            </div>
          </div>
        </div>
        <input onClick={onSubmitHandler} type="button" value="register" id="" />
      </form>
    </div>
  );
}

export default EditDoctor;
