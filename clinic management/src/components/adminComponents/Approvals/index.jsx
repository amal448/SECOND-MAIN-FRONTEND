
import React, { useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import Swal from 'sweetalert2'
function ViewApproval() {

const patchRequest=useFetch('PATCH')
const deleteRequest=useFetch('DELETE')
const navigate =useNavigate();

const approveHandler=(async (e)=>{
  e.preventDefault()

Swal.fire({
  title:'Are you sure ?',
  text:"Are you sure for adding this doctor !",
  icon:"warning",
  showCancelButton:true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, add him!'
}).then((result)=>{

  if(result.isConfirmed)
  {
    patchRequest(`/admin/approve-doctor/${id}`).then((response)=>{
      console.log("At patch Stage");
      console.log("response",response);
   navigate('/admin/approvals')

    }).catch((error)=>{
      console.log("Doctor Approval is failed successfully");
    })
  }

})
})

const declineHandler=(async (e)=>{
  e.preventDefault()

Swal.fire({
  title:'Are you sure ?',
  text:"Are you sure for Rejecting this Request !",
  icon:"warning",
  showCancelButton:true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Removed from the List!'
}).then((result)=>{

  if(result.isConfirmed)
  {
    deleteRequest(`/admin/decline-doctor/${id}`).then((response)=>{
      console.log("At patch Stage");
      console.log("response",response);
      navigate('/admin/approvals')
    }).catch((error)=>{
      console.log("doctor decline is failed ")
    })
  }

})



})




  const  {id} =useParams();
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

                            <div className="max-w-2xl mx-auto">
                            <label htmlFor="CTC" className="text-gray-700"> Image</label>
                                <div className="flex items-center justify-center w-full">
                                    <label htmlfor="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
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

                            <div className="max-w-2xl mx-auto">
                            <label htmlFor="CTC" className="text-gray-700"> Certificate</label>
                            
                                <div className="flex items-center justify-center w-full">
                                    <label htmlfor="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" name="certificate" defaultValue ={doctorData?.certificate} type="file" class="hidden" />
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
                            <button className='w-auto bg-red-500 hover:bg-red-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'  onClick={declineHandler}>Decline</button>
                            <button className='w-auto bg-blue-500 hover:bg-blue-700 rounded-lg shadow-xl font-medium text-white px-4 py-2' onClick={approveHandler} >Approve</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewApproval;
