import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "./style.scss";
import {
  ResponsiveContainer,
} from "recharts";
import useFetch from "../../../hooks/useFetch";


const DailyChart = ({ aspect, title }) => {
  const [data,setData] = useState([])
  let getRequest=useFetch('GET')
  useEffect(()=>{
    getRequest('/admin/dailySales').then((data)=>{
      setData(data)
      
    })

  },[]);


  const options = {
    chart: {
    id: "basic-bar"
    },
    xaxis: {
    categories: ['Today']
    }
    };
    
    const series = [
    {
    name: "daily report",
    data: [data]
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

export default DailyChart;
