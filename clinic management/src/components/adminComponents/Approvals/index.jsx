// import React from 'react'
// function ViewApproval() {
//   return (
//     <>
//     <div class="bg-gray-200 w-full min-h-screen flex items-center justify-center">
//             <div class="w-full py-8">
//                 <div class="flex items-center justify-center space-x-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
//                     </svg>
//                     <h1 class="text-3xl font-bold text-blue-600 tracking-wider">Template</h1>
//                 </div>
//                 <div class="bg-white w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg shadow-2xl">

//                     <h2 class="text-center text-2xl font-bold tracking-wide text-gray-800">Sign Up</h2>
//                     <p class="text-center text-sm text-gray-600 mt-2">Already have an account? <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline" title="Sign In">Sign in here</a></p>

//                     <form class="my-8 text-sm">
//                         <div class="flex flex-col my-4">
//                             <label for="name" class="text-gray-700">Name</label>
//                             <input type="text" name="name" id="name" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your name">
//                         </div>

//                         <div class="flex flex-col my-4">
//                             <label for="email" class="text-gray-700">Email Address</label>
//                             <input type="email" name="email" id="email" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your email">
//                         </div>

//                         <div class="flex flex-col my-4">
//                             <label for="password" class="text-gray-700">Password</label>
//                             <div x-data="{ show: false }" class="relative flex items-center mt-2">
//                                 <input :type=" show ? 'text': 'password' " name="password" id="password" class="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your password" type="password">
//                                 <button @click="show = !show" type="button" class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
//                                     <svg x-show="!show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>

//                                     <svg x-show="show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="display: none;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
//                                 </button>
//                             </div>
//                         </div>

//                         <div class="flex flex-col my-4">
//                             <label for="password_confirmation" class="text-gray-700">Password Confirmation</label>
//                             <div x-data="{ show: false }" class="relative flex items-center mt-2">
//                                 <input :type=" show ? 'text': 'password' " name="password_confirmation" id="password_confirmation" class="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your password again" type="password">
//                                 <button @click="show = !show" type="button" class="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
//                                     <svg x-show="!show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>

//                                     <svg x-show="show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="display: none;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
//                                 </button>
//                             </div>
//                         </div>

//                         <div class="flex items-center">
//                             <input type="checkbox" name="remember_me" id="remember_me" class="mr-2 focus:ring-0 rounded">
//                             <label for="remember_me" class="text-gray-700">I accept the <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline">terms</a> and <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline">privacy policy</a></label>
//                         </div>

//                         <div class="my-4 flex items-center justify-end space-x-4">
//                             <button class="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150 uppercase">Sign Up</button>
//                         </div>
//                     </form>

//                     <div class="flex items-center justify-between">
//                         <div class="w-full h-[1px] bg-gray-300"></div>
//                         <span class="text-sm uppercase mx-6 text-gray-400">Or</span>
//                         <div class="w-full h-[1px] bg-gray-300"></div>
//                     </div>

//                     <div class="text-sm">
//                         <a href="#" class="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
//                             <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4"></path><path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853"></path><path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04"></path><path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335"></path></svg>
//                             <span>Sign up with Google</span>
//                         </a>
//                         <a href="#" class="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
//                             <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 124.8 123.36"><defs><style>.cls-1,.cls-2{fill:none;}.cls-1{clip-rule:evenodd;}.cls-3{clip-path:url(#clip-path);}.cls-4{clip-path:url(#clip-path-2);}.cls-5{fill:#fff;}</style><clipPath id="clip-path" transform="translate(0.69 0.51)"><path class="cls-1" d="M27.75,0H95.13a27.83,27.83,0,0,1,27.75,27.75V94.57a27.83,27.83,0,0,1-27.75,27.74H27.75A27.83,27.83,0,0,1,0,94.57V27.75A27.83,27.83,0,0,1,27.75,0Z"></path></clipPath><clipPath id="clip-path-2" transform="translate(0.69 0.51)"><rect class="cls-2" width="122.88" height="122.31"></rect></clipPath></defs><g class="cls-3"><g class="cls-4"><image width="260" height="257" transform="matrix(0.48, 0, 0, -0.48, 0, 123.36)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAEBCAYAAACexdu5AAAACXBIWXMAABcRAAAXEQHKJvM/AAAEFUlEQVR4Xu3dwXEdIRBFUb4kZ+HwHJbDcxrSeAG+hctVJgDO2cyG9aumoYfX8zzP68evAdzr+fl9jDHG22EdcJGPMcZ4vV6ndcAFPubn+f8q4Aq2DEBmhWDLAAxbBmCzAkGFAKgQgM3qIRxWAVdwygBkVQhyAdBUBDZKAyCaikBmIDxfh2XADda0o50DUFNRhQBoKgIbgQBEIABx7AhEhQBEIACZW4a398My4AYqBCACAYhZBiCrh6BQAFQIwGZOO55WAVewVwDin4pAVlNRIACaisDG689ANBWBeLkJyOoheP0Z8Bw8sNFUBKJCAKKbCEQgAHHsCGQ99npaBtxAaQDEsSMQ045ANBWBqBCAKA2AeA4eiAoBiEAAIhCA6CEAUSEAWcNNcgEwywBs3FQEYpYBiAoByHr9WYUAqBCAzXqXwSkD4KEWYOPqMhDHjkBsGYCYZQCyjh1VCEAXk3QVAT0EYCMQgDh2BLIqBLMMQBXC+2EZcAPTjkD0EICsm4qnZcANlAZAjD8D0VQEoqkIxNVlIEoDIJqKQOY9hNMq4AoqBCB6CEDWL9RMOwIqBGDjbUcgq6noYhJglgHYaCoCWRXC52EZcIP1xyRNRaAK4bAKuIKry0D8IAWIl5uAqBCA+IUakFUh6CoCph2BzbqHYMsAuIcAbGwZgPhBChAVApA17XhaBtxAhQBEIAARCEAEAhCzDEBMOwKxZQAiEIAYbgJilgGILQOQOctwWgVcQQ8BiC0DkPUcvFwA+smql5sALzcBG8NNQGwZgKx/KtoyAO4hABulARBNRSCaikDcQwCiqQjElgHIqhDeD8uAG6xfqKkQADcVgY2mIhBNRSCaikBWhfB5WAbcwCwDEMcLQNax42kZcAMVAhCBAMTFJCDr5Sb3EAA3FYHNPGVQIQBDUxHYuLoMRFMRiKYiEBUCEBeTgDhlADLvIZxWAVfwgxQgtgxANBWBzED4clMR7vZtjOEeArBxUxGIHgIQ/0MAYvwZGLUTD6uAi8xY0EQAhqYisHEPAYimIjDGmEWB8Wcgxp+BOHYEoqkIRFMRGH82C7YMQAw3AfkYY4zH/xDgcnOzoEIAYpYBiKYiEIEAxJYBiAoBiGlHILYMQPxTEYiXm4Dx103F8aa3CDhlADa2DMCwZQD+oUIAxt/jz/9dCNzCb9iBaB4AEQhAzDIAUSEAEQhAnDIAUSEAcTEJiFMGIAIByBpuOqwCrqBCACIQgNgyAFEhAHExCYhAADJvKtoyAEOFAGwEAhCBAEQgAHEPAYgKAYhAACIQgAgEIAIBiEAAIhCACAQgAgGIQAAiEIAIBCACAYhAACIQgAgEIAIBiEAAIhCACAQgAgGIQAAiEIAIBCACAYhAACIQgAgEIAIBiEAAIhCA/AafC2PbZ0osjAAAAABJRU5ErkJggg=="></image></g></g><path class="cls-5" d="M85.36,78.92l2.72-17.76H71V49.63c0-4.86,2.38-9.59,10-9.59H88.8V24.92a94.45,94.45,0,0,0-13.75-1.2c-14,0-23.21,8.5-23.21,23.9V61.16H36.24V78.92h15.6v43.57H71V78.92Z" transform="translate(0.69 0.51)"></path></svg>
//                             <span>Sign up with Facebook</span>
//                         </a>
//                         <a href="#" class="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
//                             <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.31"><defs><style>.cls-1{fill:#0a66c2;}.cls-1,.cls-2{fill-rule:evenodd;}.cls-2{fill:#fff;}</style></defs><title>linkedin-app</title><path class="cls-1" d="M27.75,0H95.13a27.83,27.83,0,0,1,27.75,27.75V94.57a27.83,27.83,0,0,1-27.75,27.74H27.75A27.83,27.83,0,0,1,0,94.57V27.75A27.83,27.83,0,0,1,27.75,0Z"></path><path class="cls-2" d="M49.19,47.41H64.72v8h.22c2.17-3.88,7.45-8,15.34-8,16.39,0,19.42,10.2,19.42,23.47V98.94H83.51V74c0-5.71-.12-13.06-8.42-13.06s-9.72,6.21-9.72,12.65v25.4H49.19V47.41ZM40,31.79a8.42,8.42,0,1,1-8.42-8.42A8.43,8.43,0,0,1,40,31.79ZM23.18,47.41H40V98.94H23.18V47.41Z"></path></svg>
//                             <span>Sign up with LinkedIn</span>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
// </>
//   )
// }

// export default ViewApproval

import React, { useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
function ViewApproval() {


  const  {id} =useParams();
  const history =useNavigate();
  const[doctorData,setDoctorData] =useState({})
  const getRequest=useFetch('GET')

  useEffect(()=>{
    console.log("helloooooat useeffevt");
    getRequest(`/admin/view-doctor-request/${id}`).then((doctorData)=>{ 
      console.log("At View Accept stage");
      console.log(doctorData.doctorData);
    
      setDoctorData(doctorData?.doctorData)
    })
  },[])
// console.log("llllllllllbbbbbbbbbbbbllllllllll",doctorData)


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
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="name"
                                    value={doctorData?.firstName}
                                    className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                                    placeholder="Enter your First Name"
                                />
                            </div>
                            <div className="flex flex-col my-4">
                                <label htmlFor="name" className="text-gray-700">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="name"
                                    value={doctorData?.lastName}
                                    className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                                    placeholder="Enter your Last Name"
                                />
                            </div>

                            <div className="flex flex-col my-4">
                                <label htmlFor="email" className="text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={doctorData?.email}
                                    className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                                    placeholder="Enter  email address"
                                />
                            </div>
                            <div className="flex flex-col my-4">
                                <label htmlFor="mobile" className="text-gray-700">
                                    Mobile
                                </label>
                                <input
                                    type="number"
                                    name="mobile"
                                    id="mobile"
                                    value={doctorData?.mobile}
                                    className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                                    placeholder="Enter phone number"
                                />
                            </div>
                            <div className="flex flex-col my-4">
                                <label htmlFor="date" className="text-gray-700">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={doctorData?.dob}
                                    id="mobile"
                                    className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                                    placeholder="Enter birth "
                                />
                            </div>

                            <div className="flex flex-col my-4">
                                <label htmlFor="date" className="text-gray-700">
                                    About me
                                </label>
                                <input
                                    type="text"
                                    name="about"
                                    value={doctorData?.about}
                                    id="about"
                                    className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                                    placeholder="Enter Qualification Details "
                                />
                            </div>
                            <div className="flex flex-col my-4">
                                <label htmlFor="address" className="text-gray-700">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={doctorData?.address}
                                    id="address"
                                    className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                                    placeholder="Enter Address "
                                />
                            </div>
                            <div className="flex flex-col my-4">
                                <label htmlFor="experience" className="text-gray-700">
                                    Experience
                                </label>
                                <input
                                    type="text"
                                    name="experience"
                                    id="experience"
                                    value={doctorData?.experience} 
                                    className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                                    placeholder="Enter Experience "
                                />
                            </div>
                            <div className="flex flex-col my-4">
                                <label htmlFor="CTC" className="text-gray-700">
                                    CTC
                                </label>
                                <input
                                    type="text"
                                    name="CTC"
                                    id="CTC"
                                    value={doctorData?.CTC}
                                    className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                                    placeholder="Expecting Salary "
                                />
                            </div>
                         
                             <div className="flex flex-col my-4">
                                <label htmlFor="Department" className="text-gray-700">
                                    Department
                                </label>
                                <select
                                    type="text"
                                    name="department"
                                    value={doctorData?.department}
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
                            <label htmlFor="CTC" className="text-gray-700"> Image</label>
                                <div class="flex items-center justify-center w-full">
                                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" defaultValue ={doctorData?.image} name="image" type="file" class="hidden" />
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
                            <label htmlFor="CTC" className="text-gray-700"> Certificate</label>
                            
                                <div class="flex items-center justify-center w-full">
                                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" name="certificate" defaultValue ={doctorData?.certificate} type="file" class="hidden" />
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
                            <button class='w-auto bg-red-500 hover:bg-red-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' >Decline</button>
                            <button class='w-auto bg-blue-500 hover:bg-blue-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' >Approve</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewApproval;
