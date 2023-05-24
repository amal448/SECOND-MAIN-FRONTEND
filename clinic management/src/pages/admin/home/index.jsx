import Sidebar from "../../../components/adminComponents/sidebar";
import Navbar from "../../../components/adminComponents/navbar";
import "./style.scss";
import Widget from "../../../components/adminComponents/widjets";
import Featured from "../../../components/adminComponents/featured";
import Chart from "../../../components/adminComponents/charts";
import Table from "../../../components/adminComponents/table";
// import { Table } from "@mui/material";

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
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;




