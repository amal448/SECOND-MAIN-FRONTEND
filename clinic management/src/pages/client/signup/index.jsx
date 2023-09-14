import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import sideImage from "../../../assets/svg/login-page-logo.svg";
import openEye from "../../../assets/images/open-eye.png";
import closedEYe from "../../../assets/images/closed-eye.png";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import {
  checkMobileNumberHasAnyCharacter,
  checkPasswordHasSpecialCharacters,
  checkStringHasNumbers,
} from "../../../util/utilFunctions";

function Signup() {
  const navigate = useNavigate();
  const postRequest = useFetch("POST");

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dateOfBirth: "",
    gender: "",
    password: "",
    confirmPassword: "",

  });
  const [userDataErr, setUserDataErr] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dateOfBirth: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState([])
  const [imageErr, setImageErr] = useState(false)
  const [loading, setLoading] = useState(false); 


  function handleOnchange(e) {
    console.log(e.target);
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  // if (loading) {
  //   // return <div>Loading...</div>;
  //   return(
  //  <div className="min-h-screen flex items-center justify-center">
  //        <div className="flex justify-start mb-4">
      
  //   </div>
  //     <div className="flex items-center">
  //       <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
  //         <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
  //       </svg>
  //       <span className="sr-only">Loading...</span>
  //     </div>
  //   </div>
  //   )


  // }


  function handleSubmit(e) {

    console.log(" checking");
    setLoading(true)
    if (
      userData.firstName == "" ||
      userData.lastName == "" ||
      userData.email == "" ||
      userData.mobile == "" ||
      userData.dateOfBirth == "" ||
      userData.gender == "" ||
      userData.password == "" ||
      userData.confirmPassword == ""||
      image.length===0
    ) {
    console.log(" checking if");

      for (const key in userData) {
        if (userData[key] == "") {
          setUserDataErr((prev) => {
            return {
              ...prev,
              [key]: "please provide ",
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
    } else {
    console.log(" checking else");

      let errorFlag = false;
      for (const key in userData) {
        let message = "";
        if (
          (key == "firstName" || key == "lastName") &&
          checkStringHasNumbers(userData[key])
        ) {
          errorFlag = true;
          message = key + " doesn't include numbers";
        }

        if (key == "password" && userData[key]?.length < 8) {
          errorFlag = true;
          message = "password should have at lest 8 characters";
        }
        setUserDataErr((prev) => {
          return {
            ...prev,
            [key]: message,
          };
        });
      }
      if (errorFlag) {
        return;
      }
    }
    if (!checkPasswordHasSpecialCharacters(userData.password)) {
      setUserDataErr((prev) => {
    console.log(" checking checkPasswordHasSpecialCharacters");

        return {
          ...prev,
          password: "please include special characters",
        };
      });
      return;
    }
    if (userData.password != userData.confirmPassword) {
      setUserDataErr((prev) => {
    console.log(" checking checkPasswordHasSpecialCharacters2");

        return {
          ...prev,
          confirmPassword: "password is not matching",
        };
      });
      return;
    }
    if (!checkMobileNumberHasAnyCharacter(userData.mobile)) {
      setUserDataErr((prev) => {
    console.log(" checking checkMobileNumberHasAnyCharacter");

        return {
          ...prev,
          mobile: "mobile number is invalid",
        };
      });
      return;
    }
    if ( image.length === 0) {
    console.log(" checking checkMobileNumberHasAnyCharacter");

      console.log("image")
         
        setImageErr(true)
      console.log("imageErrimageErrimageErrimageErr",imageErr)
      return;
    }

    try {

      function uploadFile() {
        console.log("uploasd")
        let files = []
        files.push({ file: image, name: "image" })

        const uploaders = files.map(file => {
          return new Promise((resolve, reject) => {

            const formData = new FormData();
            console.log(file.file);
            formData.append("file", file.file[0]);
            formData.append("upload_preset", "ml_default");
            formData.append("cloud_name", "dmmnc8hj0");
            formData.append("api_key", 267368443785975);
            formData.append("timestamp", (Date.now() / 1000) | 0);


            // "https://api.cloudinary.com/v1_1/<cloud name>/<resource_type>/upload"
            try {
              axios.post("https://api.cloudinary.com/v1_1/dmmnc8hj0/upload", formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
              }).then(response => {
                const data = response.data;
                console.log("asdfasd", data.secure_url);

                resolve({ file: data.secure_url, name: file.name })
              }).catch(err => {
                console.log(err.message);
              })
            } catch (error) {
              console.log(error.message);
            }
          });

        })

       
        // Once all the files are uploaded
        Promise.all(uploaders).then((res) => {
          // ... perform after upload is successful operation
          console.log(res)

          let obj = {}
          obj[res[0].name] = res[0].file
          let Applicantdata = { ...userData, ...obj}
          console.log("Applicantdata",Applicantdata)
          //  Appicantdata={...applyData}

          console.log("userData",userData);
          postRequest("/user/signup", Applicantdata)
            .then((res) => {
              console.log("start in then ",res);
              setLoading(false)
              if(res.ok) {

                swal({
                  icon: "success",
                  title: "Success",
                  text: "Please check your email for verification.",
                   timer: 3000, // Duration in milliseconds (3 seconds in this example)
    
                }).then((result) => {
                  // if (result.isConfirmed) {
                  if (result) {

                    // Redirect to login page or any other desired action
                    navigate("/login");
                  }
                })
                navigate("/login");
                // localStorage.setItem("user-token", JSON.stringify(res.token));
              }
            })
            .catch((err) => {
              console.log("err in catch ",err);
              setUserDataErr((prev) => {
                return {
                  ...prev,
                  ...err,
                };
              });
            });
       
       
        });
      }
      console.log(1111111111);

      uploadFile()

      // console.log("User outside",Applicantdata);


      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    
    {
      
      loading?
  
      <div className="min-h-screen flex items-center justify-center">
         <div className="flex justify-start mb-4">
      
    </div>
      <div className="flex items-center">
        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
    
    :
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" style={{ backgroundImage: 'url("/doctorpatient/image.jpg")' }}>
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-10 w-auto" src="/medicallogo1.jpeg" alt="WeCare" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" >
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">First Name  {userDataErr.firstName && <span  className="text-red-500 text-sm mt-1">*{userDataErr.firstName}</span>} </label>
            <div className="mt-2">
              <input id="name" name="firstName" onChange={handleOnchange} type="text"   style={{ textTransform: 'capitalize' }}  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">lastName {userDataErr.lastName && <span  className="text-red-500 text-sm mt-1">*{userDataErr.lastName}</span>} </label>
            <div className="mt-2">
              <input id="lastName" name="lastName" onChange={handleOnchange} type="text"   style={{ textTransform: 'capitalize' }} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address {userDataErr.email && <span  className="text-red-500 text-sm mt-1">*{userDataErr.email}</span>} </label>
            <div className="mt-2">
              <input id="email" name="email" onChange={handleOnchange} type="email"   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">Mobile {userDataErr.mobile && <span  className="text-red-500 text-sm mt-1">*{userDataErr.mobile}</span>} </label>
            <div className="mt-2">
              <input id="email" name="mobile" onChange={handleOnchange} type="number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium leading-6 text-gray-900">dateOfBirth {userDataErr.dateOfBirth && <span  className="text-red-500 text-sm mt-1">*{userDataErr.dateOfBirth}</span>} </label>
            <div className="mt-2">
              <input id="dateOfBirth" name="dateOfBirth" onChange={handleOnchange} type="date" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label htmlFor="Gender" className="block text-sm font-medium leading-6 text-gray-900">Gender {userDataErr.gender && <span  className="text-red-500 text-sm mt-1">*{userDataErr.gender}</span>} </label>
            <div className="mt-2">
              <select id="gender" name="gender" onChange={handleOnchange}   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Male">Female</option>
                <option value="Male">Other</option>
              </select>
            </div>

          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password {userDataErr.password && <span  className="text-red-500 text-sm mt-1"> *{userDataErr.password}</span>}</label>
           
            </div>
            <div className="mt-2">
              <input id="password"  onChange={handleOnchange} name="password" type="password"   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="conform password" className="block text-sm font-medium leading-6 text-gray-900">Confirm-Password {userDataErr.password && <span  className="text-red-500 text-sm mt-1">*{userDataErr.password}</span>}</label>
             
            </div>
            <div className="mt-2">
              <input id="confirmPassword"  onChange={handleOnchange} name="confirmPassword" type="password"   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          {/* <div>
            <div className="flex items-center justify-between">
              <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">Image  {imageErr && <span className="text-red-500 font-bold">* Please Provide the Image</span>} </label>
           
            </div>
            <div className="mt-2">
              <input type="file"  name="image" onChange={(e) => {
                console.log(e.target.files[0]);
                setImage([e.target.files[0]])
        }}   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div> */}
        <div>
  <div className="flex items-center justify-between">
    <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
      Image  {imageErr && <span className="text-red-500 text-sm mt-1">* Please Provide the Image</span>}
    </label>
  </div>
  <div className="mt-2">
    <input
      type="file"
      name="image"
      onChange={(e) => {
        console.log(e.target.files[0]);
        setImage([e.target.files[0]]);
        setImageErr(false);
      }}
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  </div>
</div>


          <div>



            <input type="button"onClick={handleSubmit}  value="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
          </div>
        </form>

        
      </div>
    </div>
    }
 </>
  
  );
}

export default Signup;
  




  