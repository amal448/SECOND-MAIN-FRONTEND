import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import AdminLogin from "./pages/admin/login";
import AdminNavBar from "./components/adminComponents/navbar";
import AdminHome from "./pages/admin/home";
import Signup from "./pages/client/signup";
import UserLogin from "./pages/client/login";
import DoctorLogin from "./pages/doctor/login";
import AddDoctor from "./pages/admin/addDoctor";
import AdminDoctorsList from "./pages/admin/doctors";
import AllUsers from "./pages/admin/users";
import UserHome from "./pages/client/home";
import UserNavBar from "./components/userComponents/navbar";
import DoctorHome from "./pages/doctor/home";
import DoctorNavBar from "./components/doctorComponents/navbar";
import AboutPage from "./pages/client/About";
import EditDoctor from "./pages/admin/editDoctor";
import DoctorSignup from "./pages/doctor/signup";
import ApplyDoctor from "./pages/client/Addoctor";
import Departments from "./pages/admin/department";
import DoctorApproval from "./pages/admin/Approvals";
import AddDepartment from "./components/adminComponents/addDepartment/AddDepartment";
import BookingSlot from "./pages/client/booking";
import DoctorsList from "./pages/client/Doctorlist";
import Activate from "./pages/client/activate";
import ViewApproval from "./components/adminComponents/Approvals";
import PageResponse from "./components/userComponents/RequestResponse";


const routes = createBrowserRouter([


  //Admin
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin/dashboard",
    element: (
      <>
        {/* <AdminNavBar /> */}
        <AdminHome />
      </>
    ),
  },
  {
    path: "/admin/add-doctor",
    element: (
      <>
        <AddDoctor />
      </>
    ),
  },
  {
    path: "/admin/doctor",
    element: (
      <>
        {/* <AdminNavBar /> */}
        <AdminDoctorsList />
        
      </>
    ),
  },
  {
    path: "/admin/users",
    element: (
      <>
        {/* <AdminNavBar /> */}
        <AllUsers />
        
      </>
    ),
  },
  {
    path: "/admin/doctors/edit-doctor",
    element: (
      <>
    <EditDoctor />
      </>
    ),
  },
  {
    path: "/admin/add-department",
    element: (
      <>
    <AddDepartment />
      </>
    ),
  },
  {
    path: "/admin/department",
    element: (
      <>
   <Departments />
      </>
    ),
  },
  {
    path: "/admin/approvals",
    element: (
      <>
      <DoctorApproval />
      </>
    ),
  },
  {
    path: "/admin/view-apply/:id",
    element: (
      <>
      <ViewApproval />
      </>
    ),
  },



  //User
  {
    path: "/signup",
    element: (
      <>
        <Signup />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <UserLogin />
      </>
    ),
  },
  {
    path: "/booking",
    element: (
      <>
       <UserNavBar />
        <BookingSlot />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
       <UserNavBar />
        <AboutPage />
      </>
    ),
  },
  {
    path: "/doctor/login",
    element: (
      <>
        <DoctorLogin />
      </>
    ),
  },
  
  {
    path: "/",
    element: (
      <>
  <UserNavBar />
  <UserHome /> 
      </>
    ),
  },
  {
    path: "/response",
    element: (
      <>
      <PageResponse />
      </>
    ),
  },
  {
    path: "/activate-account/:token",
    element: (
      <>
      <Activate />
      </>
    ),
  },
 
  {
    path: "/contact",
    element: (
      <>
    <UserNavBar />
    {/* <AboutPage /> */}

      </>
    ),
  },
  {
    path: "/apply-doctor",
    element: (
      <>
    <ApplyDoctor />
      </>
    ),
  },
  {
    path: "/dep-doctors",
    element: (
      <>
      <DoctorsList />
      </>
    ),
  },
  
  //Doctor

  {
    path: "/doctor/signup",
    element: (
      <>
    <DoctorSignup />
      </>
    ),
  },
  {
    path: "/doctor/home",
    element: (
      <>
      <DoctorNavBar />
      <DoctorHome />
      </>
    ),
  },
 
 
 
 
 
 
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
