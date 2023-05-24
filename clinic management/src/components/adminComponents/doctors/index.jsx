import "./style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { doctorsColumn,userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
// import useFetch from "../../../hooks/useFetch";

const Doctors = ({doctors,setDoctors}) => {
  // const [data, setData] = useState();


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        console.log("params11",params);
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              // onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        DOCTORS LIST
        <Link to="/admin/add-doctor" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={doctors}
        getRowId={(row) => row._id}
        columns={doctorsColumn.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Doctors;
