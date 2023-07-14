import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
// import { getMonthlyReport } from '../../Helpers/doctorHelper';
import useFetch from '../../../hooks/useFetch';
const MonthlyReport = ({doctorId}) => {
    const [data,setData] = useState([])
  const getRequest=useFetch('GET')

    useEffect(()=>{
      // /monthly-report
      getRequest(`/doctor/monthly-report/${doctorId}`).then((report)=>{
        console.log("reportttttttttttttttttt",report)
            setData(report)

        })

    },[])
    const options = {
        chart: {
        id: "basic-bar"
        },
        xaxis: {
        categories: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ]
        }
        };
        
        const series = [
        {
        name: "monthly report",
        data: data
        }
        ];
    return (
        <>
           <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold leading-none text-gray-900">Monthly Revenue</h3>
      </div>
      <div className="flow-root">
        <Chart options={options} series={series} type="bar" width="100%" />
      </div>
    </div>
        </>
    )
}

export default MonthlyReport