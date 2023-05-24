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







 // axios.post("https://api.cloudinary.com/v1_1/dmmnc8hj0/upload", file, {
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   }).then((res) => {
        //     navigate("/doctor/home");
        //     setApplyData((prev) => {
        //       return {
        //         ...prev,
        //         image: res.data.secure_url,
        //       };
        //     });
        //   }).catch((err) => {
        //     setApplyDataErr((prev) => {
        //       return {
        //         ...prev,
        //         ...err,
        //       };
        //     });
        //   });











// const cloudinary = require('cloudinary').v2;

// // Configuration
// cloudinary.config({
//   cloud_name: "dmmnc8hj0",
//   api_key: "267368443785975",
//   api_secret: "K-NiJc6VSgQFex-QePPFClZxZTg"
// });

// // Upload

// const res = cloudinary.uploader.upload('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg', {public_id: "olympic_flag"})

// res.then((data) => {
//   console.log(data);
//   console.log(data.secure_url);
// }).catch((err) => {
//   console.log(err);
// });

// // Generate
// const url = cloudinary.url("olympic_flag", {
//   width: 100,
//   height: 150,
//   Crop: 'fill'
// });

// The output url
// console.log(url);
// https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag
