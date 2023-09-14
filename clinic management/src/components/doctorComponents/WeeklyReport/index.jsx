import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import useFetch from '../../../hooks/useFetch';

const WeeklyReport = () => {

    const [report,setReport] = useState([])
    const getRequest=useFetch('GET')
  useEffect(()=>{
    getRequest('/doctor/weekly-report').then((report)=>{
      console.log("reportcomponent",report);
      setReport(report)
    })
  },[])



    const options = {
        chart: {
        id: "basic-bar"
        },
        xaxis: {
        categories: ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
        }
        };
        
        const series = [
        {
        name: "weekly report",
        data: report
        }
        ];
    return (
        <>
            <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold leading-none text-gray-900">Weekly Revenue</h3>
      </div>
      <div className="flow-root">
        <Chart options={options} series={series} type="bar" width="100%" />
      </div>
    </div>
        </>
    )
}

export default WeeklyReport