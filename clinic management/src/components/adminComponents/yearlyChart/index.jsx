import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "./style.scss";
import {
  ResponsiveContainer,
} from "recharts";
import useFetch from "../../../hooks/useFetch";

const currentYear = new Date().getFullYear();

const YearlyChart = ({ aspect, title }) => {
  const [data,setData] = useState([])
    let getRequest=useFetch('GET') 

  useEffect(()=>{
    getRequest('/admin/yearlySales').then((data)=>{
      setData(data)
      
    })

  },[]);



  const options = {
    chart: {
    id: "basic-bar"
    },
    xaxis: {
    categories:[currentYear]
    }
    };
    
    const series = [
    {
    name: "yearly report",
    data: data
    }
    ];

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
      <Chart options={options} series={series} type="bar" width="500" />  
      </ResponsiveContainer>
    </div>
  );
};

export default YearlyChart;
