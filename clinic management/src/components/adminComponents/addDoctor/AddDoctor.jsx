

import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { checkStringHasNumbers } from "../../../util/utilFunctions";
import { checkMobileNumberHasAnyCharacter } from "../../../util/utilFunctions";
import axios from "axios";
import { colors } from "@mui/material";

function AddDoctor() {
  const PostRequest = useFetch("POST");
  const GetRequest=useFetch("GET")
  const navigate = useNavigate();

  const [certificate, setCertificate] = useState([])
  const [image, setImage] = useState([])

  const [certificateErr, setCertificateErr] = useState(false)
  const [imageErr, setImageErr] = useState(false)


  const [starthour, setStartHour] = useState("09");
  const [startminute, setStartMinute] = useState("00");
  const [startmeridiem, setStartMeridiem] = useState("AM");

  const [endhour, setEndHour] = useState("05");
  const [endminute, setEndMinute] = useState("00");
  const [endmeridiem, setEndMeridiem] = useState("PM");


  const [startTime, setStartTime] = useState("09:00 AM");
  const [endTime, setEndTime] = useState("05:00 PM");
  const history = useNavigate();


  useEffect(() => {
    setStartTime(`${starthour}:${startminute}${startmeridiem}`);
}, [starthour, startminute, startmeridiem]);

useEffect(() => {
    setEndTime(`${endhour}:${endminute}${endmeridiem}`);
}, [endhour, endminute, endmeridiem]);


  const [departments,setDepartments] =useState([])

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
    fees: "",
    password:""
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
    fees: "",
    password:""
  });

useEffect(()=>{

GetRequest('/admin/get-all-department').then(res =>{
  console.log("res@getdep",res);

    setDepartments(res);
    setApplyData(prev => ({
      ...prev,
      department: res[0].name
    }));
}).catch(error => {
      console.log(error);
    })
},[])

  function handleOnchange(e) {
    // console.log(e.target);
    // console.log(e.target.name === "image");

    console.log(applyData);
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

    if (
      applyData.firstName === "" ||
      applyData.lastName === "" ||
      applyData.fees === "" ||
      applyData.about === "" ||
      applyData.address === "" ||
      applyData.department === "" ||
      applyData.dob === "" ||
      applyData.email === "" ||
      applyData.experience === "" ||
      applyData.mobile === "" ||
      applyData.password === "" ||
      startTime === "" ||
      endTime === ""
    ) {
      // Set error messages for empty fields
      setApplyDataErr((prev) => ({
        ...prev,
        firstName: applyData.firstName === "" ? "Please provide a first name" : "",
        lastName: applyData.lastName === "" ? "Please provide a last name" : "",
        fees: applyData.fees === "" ? "Please provide the fees" : "",
        about: applyData.about === "" ? "Please provide details about the doctor" : "",
        address: applyData.address === "" ? "Please provide an address" : "",
        department: applyData.department === "" ? "Please select a department" : "",
        dob: applyData.dob === "" ? "Please provide the date of birth" : "",
        email: applyData.email === "" ? "Please provide an email" : "",
        experience: applyData.experience === "" ? "Please provide the experience" : "",
        mobile: applyData.mobile === "" ? "Please provide a mobile number" : "",
        password: applyData.password === "" ? "Please provide a password" : "",
        startTime: startTime === "" ? "Please provide the start time" : "",
        endTime: endTime === "" ? "Please provide the end time" : "",
      }));
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

      if (certificate?.length === 0 || image?.length === 0) {
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
            let Applicantdata = { ...applyData, ...obj,startTime:startTime,endTime:endTime }
            //  Appicantdata={...applyData}

            console.log("Appicantdata", Applicantdata)
           PostRequest("/admin/add-doctor",Applicantdata).then((res)=>{
            console.log(res)
            if(res)
            {

              console.log("before moving on to next")
              navigate("/admin/doctor")
            }
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

        // console.log("Applicantdata outside",Applicantdata);






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
                    ADD DOCTOR
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
                    

                    <div className="flex flex-row my-4">
  <label htmlFor="fees" className="text-gray-700">
    Start Time
    {applyDataErr.startTime && (
                  <span className="text-red-500 font-bold">* {applyDataErr.startTime}</span>
                )}
      



  </label>
  
  <select
    name="startTime"
    value={starthour}
    className="ml-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
    onChange={(e) => setStartHour(e.target.value)}
  >
    <option value="01">01</option>
    <option value="02">02</option>
    <option value="03">03</option>
    <option value="04">04</option>
    <option value="05">05</option>
    <option value="06">06</option>
    <option value="07">07</option>
    <option value="08">08</option>
    <option value="09">09</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
  </select>
  
  <select
    name=""
    className="ml-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
    value={startminute}
    onChange={(e) => setStartMinute(e.target.value)}
  >
    <option value="00">00</option>
  </select>
  
  <select
    name=""
    className="ml-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
    value={startmeridiem}
    onChange={(e) => setStartMeridiem(e.target.value)}
  >
    <option value="AM">AM</option>
    <option value="PM">PM</option>
  </select>
</div>

                    <div className="flex flex-row my-4">
          <label htmlFor="fees" className="text-gray-700">
            End Time
          </label>
          
          <select
            name="endTime"
            value={endhour}
            className="ml-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
            onChange={(e) => setEndHour(e.target.value)}
          >
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          
          <select
            name=""
            className="ml-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
            value={endminute}
            onChange={(e) => setEndMinute(e.target.value)}
          >
            <option value="00">00</option>
          </select>
          
          <select
            name=""
            className="ml-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
            value={endmeridiem}
            onChange={(e) => setEndMeridiem(e.target.value)}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
          </div>


                    <div className="flex flex-col my-4">
                        <label htmlFor="CTC" className="text-gray-700">
                            Fees
                {applyDataErr.fees && <span className="text-red-500 font-bold">* {applyDataErr.fees}</span>}

                        </label>
                        <input
                            type="text"
                            name="fees"
                            id="fees"
                            onChange={handleOnchange}
                            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                            placeholder="Expecting Salary "
                        />
                    </div>
                 
                     <div className="flex flex-col my-4">
                        <label htmlFor="Department" className="text-gray-700">
                            Department 
                            {applyDataErr.department && <span className="text-red-500 font-bold">* {applyDataErr.department}</span>}

                        </label>
                        <select
                            type="text"
                            name="department"
                            value={applyData.department} 
                            onChange={handleOnchange}
                            id="department"
                            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                            // placeholder="Expecting Salary "
                        >
                          {departments && departments.map((item, i) =>{
                            return <>
                             <option key={i} value={item.department}>{item.department}</option>
                            </>
                             }
                             )}

                        </select>
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="date" className="text-gray-700">
                           Password
              {applyDataErr.password && <span className="text-red-500 font-bold">* {applyDataErr.password}</span>}

                        </label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleOnchange}
                            id="password"
                            className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                            placeholder="Enter Qualification Details "
                        />
                    </div>
                    


                    <div className="max-w-2xl mx-auto">
                    <label htmlFor="CTC" className="text-gray-700"> Image
              {imageErr && <span className="text-red-500 font-bold">* Please Provide the Image</span>}
                     </label>
                        <div className="flex items-center justify-center w-full">
                            <label htmlfor="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
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
                        <div className="flex items-center justify-center w-full">
                            <label htmlfor="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                
                                <input id="dropzone-file" name="certificate"   onChange={(e) => setCertificate([e.target.files[0]])}    type="file"  />
                            </label>
                        </div>

                        <p className="mt-5">This file input component is part of a larger, open-source library of Tailwind CSS components. Learn
                            more
                            by going to the official <a class="text-blue-600 hover:underline"
                                href="#" target="_blank">Flowbite Documentation</a>.
                        </p>
                        {/* <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script> */}
                    </div>

<div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                    <button  onClick={handleOnSubmit} class='w-auto bg-blue-500 hover:bg-blue-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' >Approve</button>
                </div>
                </form>
            </div>
        </div>
    </div>
</>
  );
}

export default AddDoctor;