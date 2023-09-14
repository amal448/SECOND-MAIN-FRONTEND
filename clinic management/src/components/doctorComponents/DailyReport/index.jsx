import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import useFetch from '../../../hooks/useFetch';
// import { dailyReport } from '../../Helpers/doctorHelper';


const DailyReport = () => {
    const today = new Date().toISOString().slice(0, 10)
    const [report,setReport] = useState([])

    let GetRequest=useFetch('GET')
    useEffect(()=>{
      GetRequest('/doctor/daily-report')
  .then((report)=>{
    setReport(report)
    console.log("reportreportreport",report)

        })
    },[])

  
    
    const options = {
        chart: {
        id: "basic-bar"
        },
        xaxis: {
        categories: [today]
        }
        };
        
        const series = [
        {
        name: "daily report",
        data: [report]
        }
        ];
  return (
    <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-xl font-bold leading-none text-gray-900">Daily Revenue</h3>
    </div>
    <div className="flow-root">
      <Chart options={options} series={series} type="bar" width="100%" />
    </div>
  </div>
  )
}

export default DailyReport