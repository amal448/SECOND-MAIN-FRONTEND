import React ,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';


import sideImage from '../../../assets/svg/login-page-logo.svg'
import openEye from '../../../assets/images/open-eye.png';
import closedEYe from '../../../assets/images/closed-eye.png';


import './style.scss'
import { useDispatch } from 'react-redux';
import { setInfo } from '../../../store/slice/doctersSlice';


function DoctorLogin() {

 const [doctorData,setDoctorData]=useState({email:"",password:""})
 const [doctorDataErr,setDoctorDataErr]=useState({email:"",password:""})
 const [password,setShowPassword] =useState(false);

 const dispatch=useDispatch()
 const navigate=useNavigate()
 const postRequest= useFetch('POST')

function handleOnchange(e){
    setDoctorData(prev =>{
     return{
         ...prev,
    [e.target.name]:e.target.value

     }
    })
}

function handleSubmit(e) {
    e.preventDefault()
    if (doctorData.email == "" || doctorData.password == "" ) {
        for (const key in doctorData) {
          if (doctorData[key] == "") {
            setDoctorDataErr((prev) => {
              return {
                ...prev,
                [key]: "please provide " + key
              }
            })
          } else {
            setDoctorDataErr((prev) => {
              return {
                ...prev,
                [key]: ""
              }
            })
          }
        }
        return;
      } 
  else
  {

      if (doctorData.password?.length < 8) {
    
        setDoctorDataErr(prev => {
            return {
              ...prev,
              password: "password must be more than 8 characters"
            }
          });
        }
      

      try{
        console.log(doctorData);
        postRequest('/doctor/login',doctorData ).then(res =>{
            console.log("outside postres",res);
            dispatch(setInfo(res.info))
            localStorage.setItem('doctor-token',JSON.stringify(res.token))
            navigate('/doctor/home')
        }).catch(err => {
          console.log(err)
          setDoctorDataErr(prev =>{
                return{
                    ...prev,
                    ...err
                }
            })
        })
      }catch(error){
        console.log(error)
      }
    }

  
    return;

    }


  return (

<div className="admin-login">
      <div className="info">
        <h1>Doctors Sign In</h1>
        <h5>Please Login To Continue</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since.
        </p>
        <form>
          <div className="form-control">
            <label
              htmlFor="email"
              style={{ color: `${doctorData.email ? "red" : ""}` }}
            >
              {doctorData.email && <span>*{doctorData.email}</span>}
              {!doctorDataErr.email && 'email'}
            </label>
            <input
              type="email"
              name="email"
              onChange={handleOnchange}
              id="email"
            />
          </div>
          <div className="form-control">
            <img
              src={password ? openEye : closedEYe}
              onClick={() => setShowPassword((show) => !show)}
              alt=""
            />
            <label htmlFor="password" 

               style={{ color: `${doctorDataErr.password ? "red" : ""}` }}>
             {doctorDataErr.password && <span>*{doctorDataErr.password}</span>}
               {!doctorDataErr.password && 'password'} 
              </label>

            <input
              type=
              {password ? "text" : "password"}
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
             
              value="Sign In"
            />
          </div>
        </form>
      </div>
      <div className="image">
        <img src={sideImage} alt="" />
      </div>
    </div>

//     <div className='admin-login'>
//         <div className='info'>
//             <h1>Doctor Sign In</h1>
//             <h5>Please Login To Continue</h5>
//             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the industry's standard dummy text ever since.</p>
//         <form>
//             <div className='form-control'>
//                 <label htmlFor='username'>username{userDataErr.username && <span>*{userDataErr.username}</span>}</label>
//                 <input type='text' onChange={handleOnchange} name='username' id='username'  />
//             </div>
//             <div className='form-control'>
//             <img src={password ? openEye : closedEYe} onClick={() => setShowPassword(show => !show)} alt="" />
//                 <label htmlFor='password'>password{userDataErr.password && <span>*{userDataErr.password}</span>}</label>
//                 <input type={password ? "text" : "password"}onChange={handleOnchange} name='password' id='password'  />
//             </div>
//             <div className='form-control'>
//                 <label htmlFor='confirm password'>confirm password{userDataErr.confirm_password && <span>*{userDataErr.confirm_password}</span>} </label>
//                 <input type={password ? "text" : "password"}onChange={handleOnchange} name='confirm_password' id='password-confirm-password'  />
//             </div>
//             <div className='form-control'>
//                 <input type='button' name='button' onClick={handleSubmit} value='Sign In'  />
//             </div>
//         </form>
//         </div>
// <div className='image'>
//     <img src={sideImage}  alt='' />
// </div>

//     </div>
  )
}

export default DoctorLogin
