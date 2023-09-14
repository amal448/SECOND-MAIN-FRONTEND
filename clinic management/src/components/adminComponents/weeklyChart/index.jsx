import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "./style.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useFetch from "../../../hooks/useFetch";


const WeeklyChart = ({ aspect, title }) => {
  const [data,setData] = useState([])
  const getRequest=useFetch('GET')
  useEffect(()=>{
    getRequest('/admin/weeklySales') .then((data)=>{
      setData(data)
      
    })

  },[]);

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
    name: "series-1",
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

export default WeeklyChart;
