import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import AdminLogin from "./pages/admin/login";
import AdminNavBar from "./components/adminComponents/navbar";
import AdminHome from "./pages/admin/home";
import AdminDoctorsList from "./pages/admin/doctors";
import AddDoctor from "./pages/admin/addDoctor";
import EditDoctor from "./pages/admin/editDoctor";
import Departments from "./pages/admin/department";
import DoctorApproval from "./pages/admin/Approvals";
import AddDepartment from "./components/adminComponents/addDepartment/AddDepartment";
import ViewApproval from "./components/adminComponents/Approvals";
import DoctorStatus from "./pages/admin/doctorStatus";
import AllUsers from "./pages/admin/users";





import Signup from "./pages/client/signup";
import UserLogin from "./pages/client/login";
import UserNavBar from "./components/userComponents/navbar";
import UserHome from "./pages/client/home";
import AboutPage from "./pages/client/About";
import ApplyDoctor from "./pages/client/Addoctor";
import BookingSlot from "./pages/client/booking";
import DoctorsList from "./pages/client/Doctorlist";
import Activate from "./pages/client/activate";
import PageResponse from "./components/userComponents/RequestResponse";
import BookDoctor from "./pages/client/Bookdoctor";
import BookingUserDetails from "./pages/client/ConfirmBook";
import ResetPasswordPage from "./pages/client/Reset-password";
import EmailVerification from "./pages/client/emailverificationPage";
import BeforePayment from "./pages/client/PaymentPage";
import Success from "./pages/client/SuccessPay";
import Failure from "./pages/client/FailPayment";
import MessengerPage from "./pages/client/Messenger/messenger";
import ContactPage from "./pages/client/Contact";
import EmailToken from "./pages/client/activateemailtoken";
import PaymentHistoryPage from "./pages/client/Paymenthistory";



import DoctorLogin from "./pages/doctor/login";
import DoctorHome from "./pages/doctor/home";
import DoctorNavBar from "./components/doctorComponents/navbar";
import DoctorSignup from "./pages/doctor/signup";
import PatientsPage from "./pages/doctor/Patients";
import Schedule from "./pages/doctor/MySlots";
import AppointmentPage from "./pages/doctor/appointmentslistPage";
import DoctorChat from "./pages/doctor/doctorChatPage";
import ProfilePage from "./pages/doctor/ProfilePage";
import PaymentPage from "./pages/doctor/payment";
import VideoCall from "./components/doctorComponents/Video/VideoCall";
import TimingsPage from "./pages/doctor/Mytimings";
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
  {
    path: "/admin/doctor-status",
    element: (
      <>
      <DoctorStatus />
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
    path: "/payment-process",
    element: (
      <>
       <UserNavBar />
        <BeforePayment />
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
    path: "/success",
    element: (
      <>
        <UserNavBar />
        <Success />
      </>
    ),
  },
  {
    path: "/failure",
    element: (
      <>
        <UserNavBar />
        <Failure />
      </>
    ),
  },
  {
    path: "/Email-Verification",
    element: (
      <>
        <UserNavBar />
       <EmailVerification />
      </>
    ),
  },
  {
    // path: "/reset-password",
     path:"/reset-password/:user_id/:newtoken",
    element: (
      <>
        <UserNavBar />
      <ResetPasswordPage />
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
    path: "/Availability",
    element: (
      <>
  <UserNavBar />
  <BookDoctor />
      </>
    ),
  },
  
  {
    path: "/paymenthistory",
    element: (
      <>
  <UserNavBar />
  <PaymentHistoryPage />
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
    <ContactPage />

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
       <UserNavBar />
      <DoctorsList />
      </>
    ),
  },
  {
    path: "/book-User",
    element: (
      <>
      <UserNavBar />
      <BookingUserDetails />
      </>
    ),
  },
  {
    path: "/chat",
    element: (
      <>
      <UserNavBar />
      <MessengerPage />
      </>
    ),
  },
  {
    path: "/foractivate-account/:user_id/:newtoken",
    element: (
      <>
      <EmailToken />
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
      <DoctorHome />
      </>
    ),
  },
  {
    path: "/doctor/patients",
    element: (
      <>
      <PatientsPage />
      </>
    ),
  },
  {
    path: "/doctor/schedule",
    element: (
      <>
     <Schedule />
      </>
    ),
  },
  {
    path: "/doctor/appointments",
    element: (
      <>
      <AppointmentPage />
      </>
    ),
  },
  {
    path: "/doctor/chat",
    element: (
      <>
      <DoctorNavBar />
      <DoctorChat />
      </>
    ),
  },
  
  {
    path: "/doctor/profile",
    element: (
      <>
      {/* <DoctorNavBar /> */}
      <ProfilePage />
      </>
    ),
  },
  
  {
    path: "/doctor/payment",
    element: (
      <>
      {/* <DoctorNavBar /> */}
      <PaymentPage />
      </>
    ),
  },
  {
    path: "/roomchat",
    element: (
      <>
      {/* <DoctorNavBar /> */}
      <VideoCall/>
      </>
    ),
  },
  
  {
    path: "/doctor/myTimings",
    element: (
      <>
      <DoctorNavBar />
      <TimingsPage/>
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
