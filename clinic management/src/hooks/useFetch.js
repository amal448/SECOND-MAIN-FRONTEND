import React, { useState } from "react";
import axios from "axios";

export default function useFetch(Method) {
  function setToken(params) {
    if (window.location.pathname.startsWith("/doctor")) {
      console.log("at usefetch doctor");
      return localStorage.getItem("doctor-token") || null;
    } else if (window.location.pathname.startsWith("/admin")) {
      return localStorage.getItem("admin-token") || null;
    } else {
      return localStorage.getItem("user-token") || null;
    }
  }
  let token = ""
  if(setToken()) {
    token = JSON.parse(setToken());
  }

  // let BASEURL = "https://www.wecareindia.online/api";
  let BASEURL = "http://localhost:5000/api";

  let METHOD = Method;
  let URL = "";

  return function fetchData(url, data = {}) {
    if (!URL.endsWith(url)) URL = BASEURL.concat(url);

    return new Promise((resolve, reject) => {
      if (METHOD == null) {
        reject({ type: "", message: "method is not applicable" });
      }
      console.log("data console at use fetch", data);
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
            resolve(res?.data);
            // resolve(res);
          })
          .catch((err) => {
            // return
            console.log(err)
            if(window.location.pathname.includes("/activate-account")) {
              return
            }
            if (err?.response?.data?.active === false) {
              window.location = "/login";
            }
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
            reject(err?.response?.data);
          });
      } catch (error) {
        reject(error?.message);
      }
    });
  };
}
