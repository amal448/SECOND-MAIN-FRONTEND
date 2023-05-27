import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useFetch from "../../../hooks/useFetch";
import { checkStringHasNumbers } from "../../../util/utilFunctions";
import { checkMobileNumberHasAnyCharacter } from "../../../util/utilFunctions";
import axios from "axios";
import { colors } from "@mui/material";

function ApplyDoctor() {
  const PostRequest = useFetch("POST");
  const navigate = useNavigate();

  const [certificate, setCertificate] = useState([])
  const [image, setImage] = useState([])

  const [certificateErr, setCertificateErr] = useState(false)
  const [imageErr, setImageErr] = useState(false)


  const [applyData, setApplyData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dob: "",
    about: "",
    address: "",
    department: "",
    experience: "",
    CTC: "",
  });

  const [applyDataErr, setApplyDataErr] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dob: "",
    about: "",
    address: "",
    department: "",
    experience: "",
    CTC: "",
  });


  function handleOnchange(e) {
    // console.log(e.target);
    // console.log(e.target.name === "image");

    setApplyData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log("handlesubmitOn");
    console.log("applyData", applyData);

    if (applyData.firstName == "" || applyData.lastName == "" || applyData.CTC == "" || applyData.about == "" || applyData.address == "" || applyData.department == "" || applyData.dob == "" || applyData.email == "" || applyData.experience == "" || applyData.mobile == "") {
      for (const key in applyData) {
        if (applyData[key] === "") {
          setApplyDataErr((prev) => {
            return {
              ...prev,
              [key]: "please provide",
            };
          });
        } else {
          setApplyDataErr((prev) => {
            return {
              ...prev,
              [key]: "",
            };
          });
        }
      }
      return;
    }
    else {
      let errorFlag = false;
      for (const key in applyData) {

        let message = "";
        if (
          (key == "firstName" || key == "lastName") &&
          checkStringHasNumbers(applyData[key])
        ) {
          errorFlag = true;
          message = key + "doesn't include numbers";
        }
      }

      // if (!checkMobileNumberHasAnyCharacter(applyData.mobile)) {
      //   setApplyDataErr((prev) => {
      //     return {
      //       ...prev,
      //       mobile: "mobile number is invalid",
      //     };
      //   });
      //   console.log("reached");
      //   return;
      // }

      if (certificate?.length == null || image?.length == 0) {
        console.log("certificate and image")
        if (certificate?.length == 0) {
          setCertificateErr(true)

        }
        if (image?.length == 0) {
          setImageErr(true)

        }
        return;
      }

      try {

        function uploadFile() {
          let files = []
          files.push({ file: certificate, name: "certificate" })
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
            obj[res[1].name] = res[1].file
            obj[res[0].name] = res[0].file
            let Applicantdata = { ...applyData, ...obj }
            //  Appicantdata={...applyData}

            console.log("Appicantdata", Applicantdata)
           PostRequest("/user/apply-doctor",Applicantdata).then((res)=>{

            console.log("before moving on to next")
            navigate("/")
           }).catch((err)=>{
            setApplyDataErr((prev)=>{
              return {
                ...prev,
                ...err
              }
            })
           })
         
         
          });
        }
        console.log(1111111111);

        uploadFile()

        console.log("Applicantdata outside",Applicantdata);






        // console.log("second axios working started");
      } catch (err) {
        console.log("error occured", err.message);
      }
    }
  }

  return (
    <>
    <div className="bg-gray-200 w-full min-h-screen flex items-center justify-center">
        <div className="w-full py-8">
            <div className="flex items-center justify-center space-x-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                    ></path>
                </svg>
                <h1 className="text-3xl font-bold text-blue-600 tracking-wider">
                    SKINCARE
                </h1>
            </div>
            <div className="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">
                <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">
                    APPLICANT DETAILS
                </h2>
          

                <form className="my-8 text-sm">
                    <div className="flex flex-col my-4">
                        <label htmlFor="name" className="text-gray-700">
                            First Name 
                            {applyDataErr.firstName && (
                <span className="text-red-500 font-bold">* {applyDataErr.firstName}</span>
              )}
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="name"
                            onChange={handleOnchange}
                            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                            placeholder="Enter your First Name"
                        />
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="name" className="text-gray-700">
                            Last Name
              {applyDataErr.lastName && <span className="text-red-500 font-bold">* {applyDataErr.lastName}</span>}

                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="name"
                            onChange={handleOnchange}
                            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                            placeholder="Enter your Last Name"
                        />
                    </div>

                    <div className="flex flex-col my-4">
                        <label htmlFor="email" className="text-gray-700">
                            Email Address
              {applyDataErr.email && <span className="text-red-500 font-bold">* {applyDataErr.email}</span>}

                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            onChange={handleOnchange}
                            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                            placeholder="Enter  email address"
                        />
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="mobile" className="text-gray-700">
                            Mobile
                {applyDataErr.mobile && <span className="text-red-500 font-bold">* {applyDataErr.mobile}</span>}

                        </label>
                        <input
                            type="number"
                            name="mobile"
                            id="mobile"
                            onChange={handleOnchange}

                            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                            placeholder="Enter phone number"
                        />
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="date" className="text-gray-700">
                        Birth Date
                {applyDataErr.dob && <span className="text-red-500 font-bold">* {applyDataErr.dob}</span>}
                        </label>
                        <input
                            type="date"
                            name="dob"
                            onChange={handleOnchange}

                            id="date"
                            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                            placeholder="Enter birth "
                        />
                    </div>

                    <div className="flex flex-col my-4">
                        <label htmlFor="date" className="text-gray-700">
                            About me
              {applyDataErr.about && <span className="text-red-500 font-bold">* {applyDataErr.about}</span>}

                        </label>
                        <input
                            type="text"
                            name="about"
                            onChange={handleOnchange}
                            id="about"
                            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                            placeholder="Enter Qualification Details "
                        />
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="address" className="text-gray-700">
                            Address 
              {applyDataErr.address && <span className="text-red-500 font-bold">* {applyDataErr.address}</span>}

                        </label>
                        <input
                            type="text"
                            name="address"
                            onChange={handleOnchange}
                            id="address"
                            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                            placeholder="Enter Address "
                        />
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="experience" className="text-gray-700">
                            Experience
                            {applyDataErr.experience && (
                  <span className="text-red-500 font-bold">* {applyDataErr.experience}</span>
                )}
                        </label>
                        <input
                            type="text"
                            name="experience"
                            id="experience"
                            onChange={handleOnchange}
                            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                            placeholder="Enter Experience "
                        />
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="CTC" className="text-gray-700">
                            CTC
                {applyDataErr.CTC && <span className="text-red-500 font-bold">* {applyDataErr.CTC}</span>}

                        </label>
                        <input
                            type="text"
                            name="CTC"
                            id="CTC"
                            onChange={handleOnchange}
                            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                            placeholder="Expecting Salary "
                        />
                    </div>
                 
                     <div className="flex flex-col my-4">
                        <label htmlFor="Department" className="text-gray-700">
                            Department 
                            {applyDataErr.department && (
                  <span className="text-red-500 font-bold" >* {applyDataErr.department}</span>
                )}
                        </label>
                        <select
                            type="text"
                            name="department"
                            onChange={handleOnchange}
                            id="department"
                            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                            // placeholder="Expecting Salary "
                        >
                           <option hidden>Department</option>
                            <option>America</option>
                            <option>Japan</option>
                            <option>India</option>
                            <option>Nepal</option>

                        </select>
                    </div>

                    <div class="max-w-2xl mx-auto">
                    <label htmlFor="CTC" className="text-gray-700"> Image
              {imageErr && <span className="text-red-500 font-bold">* Please Provide the Image</span>}
                     </label>
                        <div class="flex items-center justify-center w-full">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input type="file" id="dropzone-file" name="image" onChange={(e) => {
                console.log(e.target.files[0]);
                setImage([e.target.files[0]])
              }
              }        />
                            </label>
                        </div>
{/* 
                        <p class="mt-5">This file input component is part of a larger, open-source library of Tailwind CSS components. Learn
                            more
                            by going to the official <a class="text-blue-600 hover:underline"
                                href="#" target="_blank">Flowbite Documentation</a>.
                        </p> */}
                        {/* <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script> */}
                    </div>

                    <div class="max-w-2xl mx-auto">
                    <label htmlFor="CTC" className="text-gray-700"> Certificate
                    {certificateErr && (
                <span className="text-red-500 font-bold">* Please Provide the certificate</span>
              )}
              </label>
                        <div class="flex items-center justify-center w-full">
                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                
                                <input id="dropzone-file" name="certificate"   onChange={(e) => setCertificate([e.target.files[0]])}    type="file"  />
                            </label>
                        </div>

                        <p class="mt-5">This file input component is part of a larger, open-source library of Tailwind CSS components. Learn
                            more
                            by going to the official <a class="text-blue-600 hover:underline"
                                href="#" target="_blank">Flowbite Documentation</a>.
                        </p>
                        {/* <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script> */}
                    </div>







                    {/* <div className="flex flex-col my-4">
        <label htmlFor="password" className="text-gray-700">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 pr-10"
            placeholder="Enter your password"
          />
          <button
            type="button"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 focus:outline-none"
            onClick={handlePasswordVisibility}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a3 3 0 100 6 3 3 0 000-6zm0 5a2 2 0 100-4 2 2 0 000 4zM4.343 9.657a6 6 0 018.485-8.485l-1.415 1.414a4 4 0 10-5.657 5.657L4.343 9.657zM9 13.535l1.464 1.464A6 6 0 019.536 20H9v-1.536A6 6 0 015.071 16.07L6.536 14.607A4 4 0 009 13.535z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4zM6 9a3 3 0 114.898 2.282l.326.816a1 1 0 001.853-.554l-.326-.816A3 3 0 016 9zm9-3a7 7 0 11-14 0 7 7 0 0114 0zm-1.464-2.121l-9 9-1.415-1.414 9-9 1.415 1.414zM16 9a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-col my-4">
        <label htmlFor="passwordConfirmation" className="text-gray-700">
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={showPasswordConfirmation ? 'text' : 'password'}
            name="passwordConfirmation"
            id="passwordConfirmation"
            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900 pr-10"
            placeholder="Confirm your password"
          />
          <button
            type="button"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-600 focus:outline-none"
            onClick={handlePasswordConfirmationVisibility}
          >
            {showPasswordConfirmation ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a3 3 0 100 6 3 3 0 000-6zm0 5a2 2 0 100-4 2 2 0 000 4zM4.343 9.657a6 6 0 018.485-8.485l-1.415 1.414a4 4 0 10-5.657 5.657L4.343 9.657zM9 13.535l1.464 1.464A6 6 0 019.536 20H9v-1.536A6 6 0 015.071 16.07L6.536 14.607A4 4 0 009 13.535z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4zM6 9a3 3 0 114.898 2.282l.326.816a1 1 0 001.853-.554l-.326-.816A3 3 0 016 9zm9-3a7 7 0 11-14 0 7 7 0 0114 0zm-1.464-2.121l-9 9-1.415-1.414 9-9 1.415 1.414zM16 9a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center mt-6">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          className="text-blue-600 focus:ring-0 border-gray-300 rounded"
        />
        <label htmlFor="terms" className="text-sm text-gray-700 ml-2">
          I agree to the{' '}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 hover:underline"
            title="Terms and Conditions"
          >
            Terms and Conditions
          </a>
        </label>
      </div> */}

<div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                    <button  onClick={handleOnSubmit} class='w-auto bg-blue-500 hover:bg-blue-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' >Approve</button>
                </div>
                </form>
            </div>
        </div>
    </div>
</>
  );
}

export default ApplyDoctor;

     



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./style.scss";
// import useFetch from "../../../hooks/useFetch";
// import { checkStringHasNumbers } from "../../../util/utilFunctions";
// import { checkMobileNumberHasAnyCharacter } from "../../../util/utilFunctions";
// import axios from "axios";

// function ApplyDoctor() {
//   const PostRequest = useFetch("POST");
//   const navigate = useNavigate();

//   const [certificate, setCertificate] = useState([])
//   const [image, setImage] = useState([])

//   const [certificateErr, setCertificateErr] = useState(false)
//   const [imageErr, setImageErr] = useState(false)


//   const [applyData, setApplyData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     dob: "",
//     about: "",
//     address: "",
//     department: "",
//     experience: "",
//     CTC: "",
//   });

//   const [applyDataErr, setApplyDataErr] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     dob: "",
//     about: "",
//     address: "",
//     department: "",
//     experience: "",
//     CTC: "",
//   });


//   function handleOnchange(e) {
//     // console.log(e.target);
//     // console.log(e.target.name === "image");

//     setApplyData((prev) => {
//       return {
//         ...prev,
//         [e.target.name]: e.target.value,
//       };
//     });
//   }

//   function handleOnSubmit(e) {
//     e.preventDefault();
//     console.log("handlesubmitOn");
//     console.log("applyData", applyData);

//     if (applyData.firstName == "" || applyData.lastName == "" || applyData.CTC == "" || applyData.about == "" || applyData.address == "" || applyData.department == "" || applyData.dob == "" || applyData.email == "" || applyData.experience == "" || applyData.mobile == "") {
//       for (const key in applyData) {
//         if (applyData[key] === "") {
//           setApplyDataErr((prev) => {
//             return {
//               ...prev,
//               [key]: "please provide",
//             };
//           });
//         } else {
//           setApplyDataErr((prev) => {
//             return {
//               ...prev,
//               [key]: "",
//             };
//           });
//         }
//       }
//       return;
//     }
//     else {
//       let errorFlag = false;
//       for (const key in applyData) {

//         let message = "";
//         if (
//           (key == "firstName" || key == "lastName") &&
//           checkStringHasNumbers(applyData[key])
//         ) {
//           errorFlag = true;
//           message = key + "doesn't include numbers";
//         }
//       }

//       // if (!checkMobileNumberHasAnyCharacter(applyData.mobile)) {
//       //   setApplyDataErr((prev) => {
//       //     return {
//       //       ...prev,
//       //       mobile: "mobile number is invalid",
//       //     };
//       //   });
//       //   console.log("reached");
//       //   return;
//       // }

//       if (certificate?.length == 0 || image?.length == 0) {
//         console.log("certificate and image")
//         if (certificate?.length == 0) {
//           setCertificateErr(true)

//         }
//         if (image?.length == 0) {
//           setImageErr(true)

//         }
//         return;
//       }

//       try {

//         function uploadFile() {
//           let files = []
//           files.push({ file: certificate, name: "certificate" })
//           files.push({ file: image, name: "image" })

//           const uploaders = files.map(file => {
//             return new Promise((resolve, reject) => {

//               const formData = new FormData();
//               console.log(file.file);
//               formData.append("file", file.file[0]);
//               formData.append("upload_preset", "ml_default");
//               formData.append("cloud_name", "dmmnc8hj0");
//               formData.append("api_key", 267368443785975);
//               formData.append("timestamp", (Date.now() / 1000) | 0);


//               // "https://api.cloudinary.com/v1_1/<cloud name>/<resource_type>/upload"
//               try {
//                 axios.post("https://api.cloudinary.com/v1_1/dmmnc8hj0/upload", formData, {
//                   headers: { "X-Requested-With": "XMLHttpRequest" },
//                 }).then(response => {
//                   const data = response.data;
//                   console.log("asdfasd", data.secure_url);

//                   resolve({ file: data.secure_url, name: file.name })
//                 }).catch(err => {
//                   console.log(err.message);
//                 })
//               } catch (error) {
//                 console.log(error.message);
//               }
//             });

//           })

         
//           // Once all the files are uploaded
//           Promise.all(uploaders).then((res) => {
//             // ... perform after upload is successful operation
//             console.log(res)

//             let obj = {}
//             obj[res[1].name] = res[1].file
//             obj[res[0].name] = res[0].file
//             let Applicantdata = { ...applyData, ...obj }
//             //  Appicantdata={...applyData}

//             console.log("Appicantdata", Applicantdata)
//            PostRequest("/user/apply-doctor",Applicantdata).then((res)=>{

//             console.log("before moving on to next")
//             navigate("/")
//            }).catch((err)=>{
//             setApplyDataErr((prev)=>{
//               return {
//                 ...prev,
//                 ...err
//               }
//             })
//            })
         
         
//           });
//         }
//         console.log(1111111111);

//         uploadFile()

//         console.log("Applicantdata outside",Appicantdata);






//         // console.log("second axios working started");
//       } catch (err) {
//         console.log("error occured", err.message);
//       }
//     }
//   }

//   return (
//     <div className="body">
//       <section className="container">
//         <header>Apply Doctor</header>
//         <form action="#" className="form">
//           <div className="input-box">
//             <label>
//               First Name
//               {applyDataErr.firstName && (
//                 <span>* {applyDataErr.firstName}</span>
//               )}
//             </label>
//             <input
//               type="text"
//               placeholder="Enter first name"
//               name="firstName"
//               onChange={handleOnchange}
//               required
//             />
//           </div>

//           <div className="input-box">
//             <label>
//               Last Name
//               {applyDataErr.lastName && <span>* {applyDataErr.lastName}</span>}
//             </label>
//             <input
//               type="text"
//               onChange={handleOnchange}
//               placeholder="Enter last name"
//               name="lastName"
//               required
//             />
//           </div>

//           <div className="input-box">
//             <label>
//               Email
//               {applyDataErr.email && <span>* {applyDataErr.email}</span>}
//             </label>
//             <input
//               type="text"
//               onChange={handleOnchange}
//               placeholder="Enter email address"
//               name="email"
//               required
//             />
//           </div>

//           <div className="column">
//             <div className="input-box">
//               <label>
//                 Mobile{" "}
//                 {applyDataErr.mobile && <span>* {applyDataErr.mobile}</span>}
//               </label>
//               <input
//                 type="number"
//                 placeholder="Enter phone number"
//                 name="mobile"
//                 onChange={handleOnchange}
//                 required
//               />
//             </div>

//             <div className="input-box">
//               <label>
//                 Birth Date
//                 {applyDataErr.dob && <span>* {applyDataErr.dob}</span>}
//               </label>
//               <input
//                 type="date"
//                 placeholder="Enter birth date"
//                 name="dob"
//                 onChange={handleOnchange}
//                 required
//               />
//             </div>
//           </div>

//           <div className="Image">
//             <label>
//               Upload the Image
//               {imageErr && <span>* Please Provide the Image</span>}
//             </label>
//             <input
//               type="file"
//               onChange={(e) => {
//                 console.log(e.target.files[0]);
//                 setImage([e.target.files[0]])
//               }
//               }
//               name="image"
//               required
//             />
//           </div>

//           <div className="input-box address">
//             <label>
//               About Me
//               {applyDataErr.about && <span>* {applyDataErr.about}</span>}
//             </label>
//             <input
//               type="text"
//               onChange={handleOnchange}
//               placeholder="Qualification Details"
//               name="about"
//               required
//             />
//             <label>
//               Address
//               {applyDataErr.address && <span>* {applyDataErr.address}</span>}
//             </label>
//             <input
//               type="text"
//               onChange={handleOnchange}
//               placeholder="Enter street address "
//               name="address"
//               required
//             />
//             <div className="column">
//               <label>
//                 Department
//                 {applyDataErr.department && (
//                   <span>* {applyDataErr.department}</span>
//                 )}
//               </label>

//               <div className="select-box">
//                 <select name="department" onChange={handleOnchange}>
//                   <option hidden>Department</option>
//                   <option>America</option>
//                   <option>Japan</option>
//                   <option>India</option>
//                   <option>Nepal</option>
//                 </select>
//               </div>

//               <label>
//                 Experience
//                 {applyDataErr.experience && (
//                   <span>* {applyDataErr.experience}</span>
//                 )}
//               </label>
//               <input
//                 type="text"
//                 onChange={handleOnchange}
//                 placeholder="Experience"
//                 name="experience"
//                 required
//               />
//             </div>

//             <div className="column">
//               <label>
//                 CTC
//                 {applyDataErr.CTC && <span>* {applyDataErr.CTC}</span>}
//               </label>
//               <input
//                 type="text"
//                 onChange={handleOnchange}
//                 placeholder="Expecting Salary"
//                 name="CTC"
//                 required
//               />
//               {/* <input type="number" placeholder="Enter postal code" required /> */}
//             </div>
//           </div>

//           <div className="relative w-full mb-3">
//             <label
//               className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//               htmlFor="grid-password"
//             >
//               Upload Medical Certificate
//               {certificateErr && (
//                 <span>* Please Provide the certificate</span>
//               )}
//             </label>
//             <div className="flex items-center justify-center w-full">
//               <label
//                 htmlFor="dropzone-file"
//                 className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800"
//               >
//                 <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                   <svg
//                     aria-hidden="true"
//                     className="w-10 h-10 mb-3 text-gray-400"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
//                     ></path>
//                   </svg>
//                   <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
//                     <span className="font-semibold">Click to upload</span> or
//                     drag and drop
//                   </p>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">
//                     SVG, PNG, JPG or GIF (MAX. 800x400px)
//                   </p>
//                 </div>

//                 <input
//                   id="dropzone-file"
//                   type="file"
//                   className="hidden"
//                   name="certificate"
//                   onChange={(e) => setCertificate([e.target.files[0]])}
//                 />
//               </label>
//             </div>
//           </div>
//           <button onClick={handleOnSubmit}>Submit</button>
//         </form>
//       </section>
//     </div>
//   );
// }

// export default ApplyDoctor;

