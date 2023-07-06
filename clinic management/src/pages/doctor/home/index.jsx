import React,{useState,useEffect} from 'react';
import DoctorNavBar from '../../../components/doctorComponents/navbar';
import WeeklyReport from '../../../components/doctorComponents/WeeklyReport';
import YearlyReport from '../../../components/doctorComponents/YearlyReport';
import DailyReport from '../../../components/doctorComponents/DailyReport';
import MonthlyReport from '../../../components/doctorComponents/MonthlyReport';
import useFetch from '../../../hooks/useFetch';

function DoctorHome() {
  const GetRequest=useFetch('GET')
  const [appointments,setAppointments]=useState()
  const [appointmentData,setAppointmentData] = useState([]);

  useEffect(()=>{
    GetRequest('/doctor/Appointmentdata', null, { withCredentials: true })
    .then((data)=>{
      console.log(data.appointments.length)
      setAppointments(data.appointments.length)
      setAppointmentData(appointments?.data)
    })
  })
  // useEffect(()=>{

  //   GetRequest(`/doctor/getFullProfit/${id}`).then((result)=>{
  //     resolve(result)
  //   })
  // })
  return (
    <div>
      <DoctorNavBar />
      <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
      <div className="h-full w-full bg-gray-50 relative overflow-y-auto">
        <main className="pt-6 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-2 xl:gap-4 my-4">
            <MonthlyReport />
            <WeeklyReport />
            <YearlyReport />
            <DailyReport />
          </div>
        </main>
      </div>
    </div>
  );
}

export default DoctorHome;
