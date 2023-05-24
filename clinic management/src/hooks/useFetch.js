import React, { useState } from "react";
import axios from "axios";

export default function useFetch(Method) {
  function setToken(params) {
    if (window.location.pathname.startsWith("/doctor")) {
      console.log("at usefetch doctor")
      
      return JSON.parse(localStorage.getItem("doctor-token")) || "";
    } else if (window.location.pathname.startsWith("/admin")) {
      return JSON.parse(localStorage.getItem("admin-token")) || "";
    } else {
      return JSON.parse(localStorage.getItem("user-token")) || "";
    }
  }

  const token = setToken();

  let BASEURL = "http://localhost:5000/api";
  let METHOD = Method;
  let URL = "";

  return function fetchData(url, data = {}) {
    if (!URL.endsWith(url)) URL = BASEURL.concat(url);
    
    return new Promise((resolve, reject) => {
      if (METHOD == null) {
        reject({ type: "", message: "method is not applicable" });
      }
      console.log("data console at use fetch",data);
      try {
        axios({
          method: METHOD,
          url: URL,
          data: JSON.stringify(data),
          
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            console.log("res",res)
            resolve(res?.data);
          })
          .catch((err) => {
            if (err?.response?.data?.logedIn === false) {
              if (window.location.pathname.startsWith("/doctor")) {
                window.location = "/doctor/login";
                return;
              } else if (window.location.pathname.startsWith("/admin")) {
                window.location = "/admin/login";
                return;
              } else {
                window.location = "/login";
                return;
              }
            }
            console.log("catch errrrr",err);
            console.log("catch err",err?.response?.data);
            reject(err?.response?.data);
          });
      } catch (error) {
        console.log(error?.message);
        console.log(error);
        reject(error?.message);
      }
    });
  };
}
