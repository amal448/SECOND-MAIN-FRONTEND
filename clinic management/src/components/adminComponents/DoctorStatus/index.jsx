import "./style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { StatusColumns, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
import useFetch from "../../../hooks/useFetch";
import { Switch } from "@mui/material";



const DoctorsApprovalRejected = ({ doctors, setDoctors }) => {
  const [data, setData] = useState(doctors);
  // const getRequest = useFetch("GET")




  const actionColumn = [
    // {
    //   field: "block",
    //   headerName: "BLOCK/UNBLOCK",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="cellAction">
    //         <Switch

    //           checked={params.row.block}
    //           onChange={(event) => {
    //             event.stopPropagation()
    //             params.row.block = !params.row.block
    //             blockdoctor(event, params.row._id)
    //           }}
    //           defaultChecked />

    //       </div>
    //     );
    //   },
    // },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        APPROVAL/REJECTED DOCTORS LIST
        
      </div>
      <DataGrid
        className="datagrid"
        rows={doctors}
        getRowId={(row) => row._id}
        columns={StatusColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DoctorsApprovalRejected;

