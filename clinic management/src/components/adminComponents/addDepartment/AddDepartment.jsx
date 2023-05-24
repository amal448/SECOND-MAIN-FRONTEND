import React, { useState } from 'react'
// import { createDepartments, getAllDepartments } from '../../../Helpers/adminHelper';
// import { useFormik } from 'formik'
// import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast'
import useFetch from '../../../hooks/useFetch'


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
        <div class="fixed inset-0 flex justify-center items-center backdrop-blur bg-gray-200">
        <div class="bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 p-6">

        <main id="content" role="main" class="w-full max-w-md mx-auto p-6  bg-gray-100">
    <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div class="p-4 sm:p-7  bg-gray-50">
        <div class="text-center">
          <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">ADD DEPARTMENT</h1>
          {/* <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Remember your password?
            <a class="text-blue-600 decoration-2 hover:underline font-medium" href="#">
              Login here
            </a>
          </p> */}
        </div>

        <div class="mt-5">
          <form>
            <div class="grid gap-y-4">
              <div>
                <label for="email" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Department Name</label>
                <div class="relative">
                  <input type="text" id="department"onChange={handleOnchange} name="department" class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
                </div>
                {/* <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p> */}
              </div>
              <button type="submit" onClick={handleOnSubmit} class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">SUBMIT</button>
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