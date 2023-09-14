import { useState } from "react"
import useFetch from "../../../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";


function ResetPassword({ userId, token }) {

  const postRequest = useFetch('POST')
  const navigate = useNavigate()
  console.log("token", token)
  console.log("userid", userId)

  const [userData, setUserData] = useState({
    password: "",
    confirmPassword: "",

  });
  const [userDataErr, setUserDataErr] = useState({

    password: "",
    confirmPassword: "",
  });


  function handleOnchange(e) {
    console.log(e.target)
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("handleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    if (userData.password == "" || userData.confirmPassword == "") {
      
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
      for (const key in userData) {
        let message = "";

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
        if (key == "confirmPassword" && userData[key]?.length < 8) {
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
    }

    // if (!checkPasswordHasSpecialCharacters(userData.password)) {
    //   setUserDataErr((prev) => {
    //     return {
    //       ...prev,
    //       password: "please include special characters",
    //     };
    //   });
    //   return;
    // }
    if (userData.password != userData.confirmPassword) {
      setUserDataErr((prev) => {
        return {
          ...prev,
          confirmPassword: "password is not matching",
        };
      });
      return;
    }

    try {
      console.log("tryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
      console.log(userData)
      console.log(userId)
      console.log(token)


      const res = await postRequest(`/user/reset-Password/${userId}/${token}`, {
        password: userData.password,
      });
      console.log("response", res)
      if (res.ok) {
        navigate("/login");
        alert(1)
      } else {
        // Handle error response
        alert(2)
        console.log("Error:", res.error); // Replace this with your error handling logic
      }

    } catch (error) {
      console.log(error);
    }


  }

  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="/medicallogo1.jpeg" alt="Your Company" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6">


          <div>
            <div class="flex items-center justify-between">
              <label htmlFor="password" class="block text-sm font-medium leading-6 text-gray-900">Password  {userDataErr.password && <span>* {userDataErr.password}</span>}</label>

            </div>
            <div class="mt-2">
              <input id="password" onChange={handleOnchange} name="password" type="password" autoComplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label htmlFor="password" class="block text-sm font-medium leading-6 text-gray-900">Confirm - Password  {userDataErr.confirmPassword && (
                <span>* {userDataErr.confirmPassword}</span>
              )}</label>

            </div>
            <div class="mt-2">
              <input id="confirmPassword" onChange={handleOnchange} name="confirmPassword" type="password" autoComplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit" onClick={handleSubmit} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>


      </div>
    </div>

  )
}

export default ResetPassword
