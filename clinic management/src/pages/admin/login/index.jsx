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
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" style={{ backgroundImage: 'url("/doctorpatient/image.jpg")' }}>
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="WeCare" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Admin Sign In</h2>
    </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email"  style={{ color: `${formDataErr.username ? "red" : ""}` }} className="block text-sm font-medium leading-6 text-gray-900">Email address {formDataErr.email && <span>*{formDataErr.email}</span>} </label>
            <div className="mt-2">
              <input id="email"   type="text" name="username" onChange={handleOnchange}  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" style={{ color: `${formDataErr.password ? "red" : ""}` }} className="block text-sm font-medium leading-6 text-gray-900">Password {formDataErr.password && <span>*{formDataErr.password}</span>}</label>
             
            </div>
            <div className="mt-2">
              <input id="password"  onChange={handleOnchange} name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit"onClick={handleSubmit} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default AdminLogin;



// import React, { useState } from "react";
// import sideImage from "../../../assets/svg/login-page-logo.svg";
// import openEye from "../../../assets/images/open-eye.png";
// import closedEYe from "../../../assets/images/closed-eye.png";

// import "./style.scss";
// import useFetch from "../../../hooks/useFetch";

// function AdminLogin() {

//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",

//   });
//   const [formDataErr, setFormDataErr] = useState({
//     username: "",
//     password: "",

//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const postRequest=useFetch("POST")

//   function handleOnchange(e) {

//     setFormData((prev) => {
//       return {
//         ...prev,
//         [e.target.name]: e.target.value,
//       };
//     });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (
//       formData.username == "" ||
//       formData.password == "" 
//       // formData.confirm_password == ""
//     ) {
//       for (const key in formData) {
//         if (formData[key] == "") {
//           setFormDataErr((prev) => {
//             return {
//               ...prev,
//               [key]: "please provide "+key,
//             };
//           });
//         } else {
//           setFormDataErr((prev) => {
//             return {
//               ...prev,
//               [key]: "",
//             };
//           });
//         }
//       }
//     }
//     if (
//       // formData.password != formData.confirm_password ||
//       formData.password?.length < 8
//     ) {
//       if (formData.password?.length < 8) {
//         setFormDataErr((prev) => {
//           return {
//             ...prev,
//             password: "password must be more than 8 characters",
//           };
//         });
//       }
    
//       return;
//     }
//     setFormDataErr({username:"",password:""})
  
//   try {

//     postRequest('/admin/login',formData).then(res=> {
//       localStorage.setItem('admin-token',JSON.stringify(res.token))
//       window.location ="/admin/dashboard"
//     }).catch(err => {
//       console.log(err);
//       try {
//         setFormDataErr(prev =>{
//           return {
//             ...prev,
//             ...err
//           }
//         })
//       } catch (error){
//         console.log(error)
//       }
//     })
//   } catch (error){
//     console.log(error)
//   }

//   }

//   return (
//     <div className="admin-login">
//       <div className="info">
//         <h1>Admin Sign In</h1>
//         <h5>Please Login To Continue</h5>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since.
//         </p>
//         <form>
//           <div className="form-control">
//             <label
//               htmlFor="username"
//               style={{ color: `${formDataErr.username ? "red" : ""}` }}
//             >
//               {formDataErr.username && <span>*{formDataErr.username}</span>}
//               {!formDataErr.username && 'username'}
//             </label>
//             <input
//               type="text"
//               name="username"
//               onChange={handleOnchange}
//               id="username"
//             />
//           </div>
//           <div className="form-control">
//             <img
//               src={showPassword ? openEye : closedEYe}
//               onClick={() => setShowPassword((show) => !show)}
//               alt=""
//             />
//             <label htmlFor="password" 

//               style={{ color: `${formDataErr.password ? "red" : ""}` }}>
//             {formDataErr.password && <span>*{formDataErr.password}</span>}
//               {!formDataErr.password && 'password'} </label>

//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               onChange={handleOnchange}
//               id="password"
//             />
//           </div>
//           {/* <div className="form-control">
//             <label htmlFor="confirm password"
//               style={{ color: `${formDataErr.username ? "red" : ""}` }}>
//             {formDataErr.confirm_password && <span>*{formDataErr.confirm_password}</span>}

//                 {!formDataErr.confirm_password && 'confirm password'}</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               name="confirm_password"
//               onChange={handleOnchange}
//               id="password-confirm-password"
//             />
//           </div> */}
//           <div className="form-control">
//             <input
//               type="button"
//               onClick={handleSubmit}
//               name="button"
//               onChange={handleOnchange}
//               value="Sign In"
//             />
//           </div>
//         </form>
//       </div>
//       <div className="image">
//         <img src={sideImage} alt="" />
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;
