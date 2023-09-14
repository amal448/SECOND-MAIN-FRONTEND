import Sidebar from "../../../components/adminComponents/sidebar";
import Navbar from "../../../components/adminComponents/navbar";
import "./style.scss";
import Widget from "../../../components/adminComponents/widjets";
import Featured from "../../../components/adminComponents/featured";
import Chart from "../../../components/adminComponents/charts";
import Table from "../../../components/adminComponents/table";
import WeeklyChart from "../../../components/adminComponents/weeklyChart";
import YearlyChart from "../../../components/adminComponents/yearlyChart";
import DailyChart from "../../../components/adminComponents/dailyChart";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
          <WeeklyChart title="Weekly Revenue" aspect={2/ 1} />     
        </div>
        <div className="charts">
          <YearlyChart title='Yearly Revenue' aspect={2/1}/>
          <DailyChart title='Daily Revenue' aspect={2/1}/>
        </div>
      </div>
    </div>
  );
};

export default Home;




