import React, { useState } from 'react'
import toast,{Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';





function EmailComponent() {

  const history=useNavigate();
  const [email,setEmail]=useState("")
  const [emailErr,setEmailErr]=useState("")
  const postRequest=useFetch('POST')
  
function handleOnchange(e) {
  setEmail((prev)=>{
    return {
      ...prev,
      [e.target.name]:e.target.value
    }
  })
}

function handleSubmit(e) {

  e.preventDefault();

  if ( email == "" ) {

    setEmailErr(prev => ({ ...prev, email: "Please provide an email address" }));
    return;
  }
  // if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
  //   setEmailErr(prev => ({ ...prev, email: "Invalid email address" }));
  //   return;
  // }
 
  try{
    postRequest('/user/forgot-password',email).then(res=>{ 
      // localStorage.setItem('user-token', JSON.stringify(res.token))
      // localStorage.setItem('logedIn', true)
      // console.log('resssso ppp ',res)
      return res;
    }).catch((error)=>{
      console.log(error)
    })
  }catch(error){
    history('/sign')
    console.log(error)
  }

  
}






  return (

  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Enter Your Registered Email</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email"onChange={handleOnchange} type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
          {emailErr && <p className="text-red-500 text-sm mt-1">{emailErr.email}</p>}
        </div>
  
        <div>
          
      
        </div>
  
        <div>
          <button type="submit" onClick={handleSubmit} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>
  
      
    </div>
  </div>
  
  )
}

export default EmailComponent
