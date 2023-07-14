import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import useFetch from '../../../hooks/useFetch';
const YearlyReport = () => {
    let getRequest=useFetch('GET')
    const year = new Date().getFullYear();
    const [report,setReport] = useState([])   
    useEffect(()=>{
        getRequest('/doctor/yearly-report').then((data)=>{
            setReport(data)

        })
    },[])
    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [year]
        }
    };

    const series = [
        {
            name: "yearly report",
            data: report
        }
    ];
    return (
        <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold leading-none text-gray-900">Yearly Revenue</h3>
      </div>
      <div className="flow-root">
        <Chart options={options} series={series} type="bar" width="100%" />
      </div>
    </div>
    )
}

export default YearlyReport