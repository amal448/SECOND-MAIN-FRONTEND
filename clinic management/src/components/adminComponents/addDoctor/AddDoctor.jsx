import React, { useEffect, useState } from 'react'
// import { addDoctor, getAllDepartments } from '../../../Helpers/adminHelper';
import { Toaster, toast } from 'react-hot-toast';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import axios from "axios";
import useFetch from "../../../hooks/useFetch";

const AddDoctor = () => {
     const postRequest = useFetch("POST");
    const [certificate, setCertificate] = useState([])
    const [image, setImage] = useState([])

    const [certificateErr, setCertificateErr] = useState(false)
    const [imageErr, setImageErr] = useState(false)

    const [applyData, setApplyData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        mobile: "",
        department: "",
        dob: "",
        password: "",

    });

    const [applyDataErr, setApplyDataErr] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        mobile: "",
        department: "",
        dob: "",
        password: ""
    });


    function handleOnchange(e) {
        console.log(applyData);
        // console.log("logggg",{ [e.target.name]: e.target.value } );
        // console.log(e.target);
        // console.log(e.target.name === "image");
console.log(e);
        setApplyData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    }

    function handleOnSubmit(e) {

        e.preventDefault();
        console.log("handlesubmitOn");
        console.log("applyData", applyData);
        if(false)
        {

        // if (applyData.firstName == "" || applyData.lastName == "" || applyData.address == "" || applyData.department == "" || applyData.dob == "" || applyData.email == "" || applyData.mobile == "" || applyData.password) {
        //     for (const key in applyData) {
        //         if (applyData[key] === "") {
        //             setApplyDataErr((prev) => {
        //                 return {
        //                     ...prev,
        //                     [key]: "please provide",
        //                 };
        //             });
        //         } else {
        //             setApplyDataErr((prev) => {
        //                 return {
        //                     ...prev,
        //                     [key]: "",
        //                 };
        //             });
        //         }
        //     }
        //     return;
        }
        else {
            console.log(image[0]);
            let errorFlag = false;
            for (const key in applyData) {

                let message = "";
                if (
                    (key == "firstName" || key == "lastName")
                    //  &&
                    // checkStringHasNumbers(applyData[key])
                ) {
                    errorFlag = true;
                    message = key + "doesn't include numbers";
                }
            }



            if (certificate?.length == 0 || image?.length == 0) {
                console.log("certificate and image")
                if (certificate?.length == 0) {
                    setCertificateErr(true)
                    console.log("hi certi");
                }
                if (image?.length == 0) {
                    setImageErr(true)
                    console.log("hi image");

                }
                // return;
            }

            try {
                console.log("hi try");
                function uploadFile() {
                    let files = []
                    // files.push({ file: certificate, name: "certificate" })
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
                                console.log("started in try");
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
                        // obj[res[1].name] = res[1].file
                        obj[res[0].name] = res[0].file
                        let Applicantdata = { ...applyData, ...obj }
                        //  Appicantdata={...applyData}

                        console.log("Appicantdata", Applicantdata)
                        postRequest("/admin/add-doctor", Applicantdata).then((res) => {

                            console.log("before moving on to next")
                            navigate("/")
                        }).catch((err) => {
                            setApplyDataErr((prev) => {
                                return {
                                    ...prev,
                                    ...err
                                }
                            })
                        })


                    });
                }
                console.log(1111111111);

                uploadFile()

                console.log("Applicantdata outside", Appicantdata);






                // console.log("second axios working started");
            } catch (err) {
                console.log("error occured", err.message);
            }
        }
    }




    return (
        <>
            <div class="min-h-screen bg-gray-100 flex items-center justify-center">
                <div class="container max-w-screen-lg mx-auto">
                    <div>

                        <div class="bg-white rounded shadow-lg px-4 md:p-8 mb-6">
                            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div class="text-gray-600">
                                    <p class="font-medium text-lg">Add Doctor</p>
                                    <p>Please fill out all the fields.</p>
                                </div>

                                <div class="lg:col-span-2">
                                    <Toaster position='top-center' reverseOrder={false}></Toaster>

                                    {
                                        image ?
                                            <div className="flex flex-wrap justify-center mb-5">
                                                <div className="w-6/12 sm:w-4/12 px-4">
                                                    <img src="" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                                                </div>
                                            </div>
                                            :
                                            <div className="flex flex-wrap justify-center mb-5">
                                                <div className="w-16 h-16 sm:w-4/12 rounded-full">
                                                    <p>image will appear here</p>
                                                </div>
                                            </div>
                                    }

                                    <form >

                                        <div class="flex items-center justify-center w-full">
                                            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                    <p class="mb-2 text-sm text-gray-500">Click to upload

                                                    </p>

                                                </div>
                                                {imageErr && (
                                                    <span>* Please Provide the certificate pannniiii</span>
                                                )}

                                                <input name="image" id="dropzone-file" onChange={(e) => setImage([e.target.files[0]])} type="file" class="hidden" accept='image/*' />
                                            </label>
                                        </div>
                                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5 mt-5">
                                            <div class="md:col-span-5">
                                                <label for="full_name">First Name  {applyDataErr.firstName && (
                                                    <span>* {applyDataErr.firstName}</span>
                                                )}</label>
                                                <input type="text" onChange={handleOnchange} name="firstName" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                />
                                            </div>

                                            <div class="md:col-span-5">

                                                <label for="full_name">Last Name  {applyDataErr.lastName && <span>* {applyDataErr.lastName}</span>}  </label>
                                                <input type="text" name="lastName" onChange={handleOnchange} id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                />
                                            </div>

                                            <div class="md:col-span-5">
                                                <label for="email">Email Address  {applyDataErr.email && <span>* {applyDataErr.email}</span>}</label>
                                                <input type="text" name="email" onChange={handleOnchange} id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com"
                                                />
                                            </div>

                                            <div class="md:col-span-5">
                                                <label for="email">Address {applyDataErr.address && <span>* {applyDataErr.address}</span>} </label>
                                                <input type="text" name="address" onChange={handleOnchange} id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                />
                                            </div>

                                            <div class="md:col-span-3">
                                                <label for="address">Mobile Number {applyDataErr.mobile && <span>* {applyDataErr.mobile}</span>}</label>
                                                <input type="number" name="mobile" onChange={handleOnchange} id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""
                                                />
                                            </div>




                                            <div className='md:col-span-2'>
                                                <label for="city">Department {applyDataErr.department && <span>* {applyDataErr.department}</span>} </label>
                                                <select type="text" name="department" onChange={handleOnchange} id="department" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" >

                                                        <option>Ortho</option>
                                                        <option>Physician</option>

                                                    
                                                </select>
                                            </div>

                                            <div class="md:col-span-2">
                                                <label for="city">Date Of birth {applyDataErr.dob && <span>* {applyDataErr.dob}</span>}</label>
                                                <DatePicker name="dob" onChange={(date) => setApplyData(prev => {
                                                    console.log(date);
                                                    return {
                                                        ...prev,
                                                        dob: date
                                                    }
                                                })} value={new Date(applyData.dob).toLocaleDateString()} id='dob' className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                />
                                            </div>

                                            <div class="md:col-span-3">
                                                <label for="address">Password {applyDataErr.password && <span>* {applyDataErr.password}</span>}</label>
                                                <input type="password" onChange={handleOnchange} name="password" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""
                                                />
                                            </div>


                                            

                                            <div class="md:col-span-5 text-right">
                                                <div class="inline-flex items-end">
                                                    <button onClick={handleOnSubmit} type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddDoctor