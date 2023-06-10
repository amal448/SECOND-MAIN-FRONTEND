import React, { useState } from 'react'
// import { Link, useNavigate } from "react-router-dom";
import useFetch from '../../../hooks/useFetch'
import Swal from 'sweetalert2';



const AddDepartment = () => {
  
    const postRequest =useFetch("POST")
    const [departments,setDepartments] =useState({})     
    const [departmentErr,setDepartmentErr]=useState(false)
  
    function handleOnchange(e) {
        setDepartments((prev)=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }
    function handleOnSubmit(e) {
        e.preventDefault();
        console.log("handle started");
        console.log("departments",departments);
      
        try
        {
            console.log("entered");
            postRequest("/admin/add-department",departments).then((res)=>{

            console.log("enterd the post ") 
                navigate("/admin/department")
            }).catch((err)=>{
                setDepartmentErr((prev)=>{
                    return {
                        ...prev,
                        ...err
                    }
                })
            })
        }catch(err)
        {
            console.log("error occured",err);
        }




    }

    return (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur bg-gray-200">
        <div className="bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 p-6">

        <main id="content" role="main" className="w-full max-w-md mx-auto p-6  bg-gray-100">
    <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 sm:p-7  bg-gray-50">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">ADD DEPARTMENT</h1>
          {/* <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Remember your password?
            <a className="text-blue-600 decoration-2 hover:underline font-medium" href="#">
              Login here
            </a>
          </p> */}
        </div>

        <div className="mt-5">
          <form>
            <div className="grid gap-y-4">
              <div>
                <label htmlfor="email" className="block text-sm font-bold ml-1 mb-2 dark:text-white">Department Name</label>
                <div className="relative">
                  <input type="text" id="department"onChange={handleOnchange} name="department" className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                </div>
                {/* <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p> */}
              </div>
              <button type="submit" onClick={handleOnSubmit} className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>

 
  </main>

        </div>
      </div>
    )
}

export default AddDepartment