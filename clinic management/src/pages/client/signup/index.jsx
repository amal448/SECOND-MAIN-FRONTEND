import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import sideImage from "../../../assets/svg/login-page-logo.svg";
import openEye from "../../../assets/images/open-eye.png";
import closedEYe from "../../../assets/images/closed-eye.png";

import "./style.scss";
import useFetch from "../../../hooks/useFetch";
import {
  checkMobileNumberHasAnyCharacter,
  checkPasswordHasSpecialCharacters,
  checkStringHasNumbers,
} from "../../../util/utilFunctions";

function Signup() {
  const navigate = useNavigate();
  const postRequest = useFetch("POST");

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dateOfBirth: "",
    gender: "",
    password: "",
    confirmPassword: "",

  });
  const [userDataErr, setUserDataErr] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dateOfBirth: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [image, setImage] = useState([])
  const [imageErr, setImageErr] = useState(false)

  function handleOnchange(e) {
    console.log(e.target);
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {

    // console.log(userDataErr);

    if (
      userData.firstName == "" ||
      userData.lastName == "" ||
      userData.email == "" ||
      userData.mobile == "" ||
      userData.dateOfBirth == "" ||
      userData.gender == "" ||
      userData.password == "" ||
      userData.confirmPassword == ""
    ) {
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
      let errorFlag = false;
      for (const key in userData) {
        let message = "";
        if (
          (key == "firstName" || key == "lastName") &&
          checkStringHasNumbers(userData[key])
        ) {
          errorFlag = true;
          message = key + " doesn't include numbers";
        }

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
      }
      if (errorFlag) {
        return;
      }
    }
    if (!checkPasswordHasSpecialCharacters(userData.password)) {
      setUserDataErr((prev) => {
        return {
          ...prev,
          password: "please include special characters",
        };
      });
      return;
    }
    if (userData.password != userData.confirmPassword) {
      setUserDataErr((prev) => {
        return {
          ...prev,
          confirmPassword: "password is not matching",
        };
      });
      return;
    }
    if (!checkMobileNumberHasAnyCharacter(userData.mobile)) {
      setUserDataErr((prev) => {
        return {
          ...prev,
          mobile: "mobile number is invalid",
        };
      });
      return;
    }
    if ( image?.length == 0) {
      console.log("image")
      
      if (image?.length == 0) {
        setImageErr(true)

      }
      return;
    }

    try {

      function uploadFile() {
        console.log("uploasd")
        let files = []
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
          obj[res[0].name] = res[0].file
          let Applicantdata = { ...userData, ...obj}
          console.log("Applicantdata",Applicantdata)
          //  Appicantdata={...applyData}

          console.log(userData);
          postRequest("/user/signup", Applicantdata)
            .then((res) => {
              console.log(res);
              if(res.ok) {
                navigate("/login");
                // localStorage.setItem("user-token", JSON.stringify(res.token));
              }
            })
            .catch((err) => {
              console.log(err);
              setUserDataErr((prev) => {
                return {
                  ...prev,
                  ...err,
                };
              });
            });
       
       
        });
      }
      console.log(1111111111);

      uploadFile()

      console.log("User outside",Applicantdata);


      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="user-signup">
      <div className="info">
        <div className="text">
          <h1>Sign Up</h1>
          <h5>Please Sign Up To Continue</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br />
            Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
        </div>
        <div className="image">{/* <img src={sideImage} alt="" /> */}</div>
      </div>
      <form>
        <div className="form-group">
          <div className="form-control">
            <label htmlFor="first-name">
              First Name
              {userDataErr.firstName && <span>* {userDataErr.firstName}</span>}
            </label>
            <input
              type="text"
              onChange={handleOnchange}
              name="firstName"
              id="first-name"
            />
          </div>
          <div className="form-control">
            <label htmlFor="last-name">
              Last Name
              {userDataErr.lastName && <span>* {userDataErr.lastName}</span>}
            </label>
            <input
              type="text"
              onChange={handleOnchange}
              name="lastName"
              id="last-name"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="form-control">
            <label htmlFor="email">
              Email {userDataErr.email && <span>* {userDataErr.email}</span>}
            </label>
            <input
              type="text"
              onChange={handleOnchange}
              name="email"
              id="email"
            />
          </div>
          <div className="form-control">
            <label htmlFor="mobile">
              Mobile {userDataErr.mobile && <span>* {userDataErr.mobile}</span>}
            </label>
            <input
              type="text"
              onChange={handleOnchange}
              name="mobile"
              id="mobile"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-control">
            <label htmlFor="date-of-birth">
              Date Of Birth
              {userDataErr.dateOfBirth && (
                <span>* {userDataErr.dateOfBirth}</span>
              )}
            </label>
            <input
              type="date"
              onChange={handleOnchange}
              name="dateOfBirth"
              id="date-of-birth"
            />
          </div>
          <div className="form-control">
            <label htmlFor="gender">
              Gender {userDataErr.gender && <span>* {userDataErr.gender}</span>}
            </label>
            <select name="gender" onChange={handleOnchange} id="gender">
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Male">Female</option>
              <option value="Male">Other</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-control">
            <label htmlFor="password">
              Password
              {userDataErr.password && <span>* {userDataErr.password}</span>}
            </label>
            <input
              type="password"
              onChange={handleOnchange}
              name="password"
              id="password"
            />
          </div>
          <div className="form-control">
            <label htmlFor="confirm-password">
              Confirm Password
              {userDataErr.confirmPassword && (
                <span>* {userDataErr.confirmPassword}</span>
              )}
            </label>
            <input
              type="password"
              onChange={handleOnchange}
              name="confirmPassword"
              id="confirm-password"
            />
          </div>
        </div>
            <div className="form-control">
            <label htmlFor="image">Image
            {imageErr && <span className="text-red-500 font-bold">* Please Provide the Image</span>}
            </label>
        <input type="file" name="image" onChange={(e) => {
                console.log(e.target.files[0]);
                setImage([e.target.files[0]])
        }} />
          </div>

        <input type="button" onClick={handleSubmit} value="submit" id="" />
      </form>
    </div>
  );
}

export default Signup;
  