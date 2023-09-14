// import React ,{useState} from 'react'
// import { Link,useNavigate } from 'react-router-dom';
// import useFetch from '../../../hooks/useFetch';


// import sideImage from '../../../assets/svg/login-page-logo.svg'
// import openEye from '../../../assets/images/open-eye.png';
// import closedEYe from '../../../assets/images/closed-eye.png';


// import './style.scss'
// import { useDispatch } from 'react-redux';
// import { setInfo } from '../../../store/slice/doctersSlice';


// function DoctorLogin() {

//  const [doctorData,setDoctorData]=useState({email:"",password:""})
//  const [doctorDataErr,setDoctorDataErr]=useState({email:"",password:""})
//  const [password,setShowPassword] =useState(false);

//  const dispatch=useDispatch()
//  const navigate=useNavigate()
//  const postRequest= useFetch('POST')

// function handleOnchange(e){
//     setDoctorData(prev =>{
//      return{
//          ...prev,
//     [e.target.name]:e.target.value

//      }
//     })
// }

// function handleSubmit(e) {
//     e.preventDefault()
//     if (doctorData.email == "" || doctorData.password == "" ) {
//         for (const key in doctorData) {
//           if (doctorData[key] == "") {
//             setDoctorDataErr((prev) => {
//               return {
//                 ...prev,
//                 [key]: "please provide " + key
//               }
//             })
//           } else {
//             setDoctorDataErr((prev) => {
//               return {
//                 ...prev,
//                 [key]: ""
//               }
//             })
//           }
//         }
//         return;
//       } 
//   else
//   {

//       if (doctorData.password?.length < 8) {
    
//         setDoctorDataErr(prev => {
//             return {
//               ...prev,
//               password: "password must be more than 8 characters"
//             }
//           });
//         }
      

//       try{
//         console.log(doctorData);
//         postRequest('/doctor/login',doctorData ).then(res =>{
//             console.log("outside postresssssssssssss",res.doctor);
//             // dispatch(setInfo(res.info))
//             dispatch(setInfo(res?.doctor))

//             localStorage.setItem('doctor-token',JSON.stringify(res.token))
//             navigate('/doctor/home')
//         }).catch(err => {
//           console.log(err)
//           setDoctorDataErr(prev =>{
//                 return{
//                     ...prev,
//                     ...err
//                 }
//             })
//         })
//       }catch(error){
//         console.log(error)
//       }
//     }

  
//     return;

//     }


//   return (

// <div className="admin-login">
//       <div className="info">
//         <h1>Doctors Sign In</h1>
//         <h5>Please Login To Continue</h5>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since.
//         </p>
//         <form>
//           <div className="form-control">
//             <label
//               htmlFor="email"
//             >
//               email
            
//             </label>
//             <input
//               type="email"
//               name="email"
//               onChange={handleOnchange}
//               id="email"
//             />
//           </div>
//           <div className="form-control">
//             <img
//               src={password ? openEye : closedEYe}
//               onClick={() => setShowPassword((show) => !show)}
//               alt=""
//             />
//             <label htmlFor="password" 

//                style={{ color: `${doctorDataErr.password ? "red" : ""}` }}>
//              {doctorDataErr.password && <span>*{doctorDataErr.password}</span>}
//                {!doctorDataErr.password && 'password'} 
//               </label>

//             <input
//               type=
//               {password ? "text" : "password"}
//               name="password"
//               onChange={handleOnchange}
//               id="password"
//             />
//           </div>
 
//           <div className="form-control">
//             <input
//               type="button"
//               onClick={handleSubmit}
//               name="button"
             
//               value="Sign In"
//             />
//           </div>
//         </form>
//       </div>
//       <div className="image">
//         <img src={sideImage} alt="" />
//       </div>
//     </div>


//   )
// }

// export default DoctorLogin


import React ,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';


import openEye from '../../../assets/images/open-eye.png';
import closedEYe from '../../../assets/images/closed-eye.png';


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
            console.log("outside postresssssssssssss",res.doctor);
            // dispatch(setInfo(res.info))
            dispatch(setInfo(res?.doctor))

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

<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" style={{ backgroundImage: 'url("/doctorpatient/image.jpg")' }}>
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-10 w-auto" src="/medicallogo1.jpeg" alt="WeCare" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Doctor SignIn</h2>
    </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address {doctorDataErr.email && <span className= "text-red-500 text-sm mt-1">*{doctorDataErr.email}</span>} </label>
            <div className="mt-2">
              <input id="email" name="email" onChange={handleOnchange} type="email"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
          
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password {doctorDataErr.password && <span  className= "text-red-500 text-sm mt-1">*{doctorDataErr.password}</span>}</label>
             
            </div>
            <div className="mt-2 relative">
           
              <input id="password"  onChange={handleOnchange} name="password" type= {password ? "text" : "password"} 
               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              <img
    src={password ? openEye : closedEYe}
    onClick={() => setShowPassword((show) => !show)}
    className="absolute top-1/2 right-3 transform -translate-y-1/2 w-6 h-6 cursor-pointer "
    alt=""
  />
            </div>
          </div>

          <div>
            <button type="button"onClick={handleSubmit} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>

      
      </div>
    </div>


  )
}

export default DoctorLogin




