import "./style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns,ApprovalColumn } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

function DoctorApplication ({applicant,setApplicant}) {
  const [data, setData] = useState();

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
            //   onClick={() => handleDelete(params.row.id)}
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
        APPLICATION LIST
      
      </div>
      <DataGrid
        className="datagrid"
        rows={applicant}
        getRowId={(row) => row._id} 
        columns={ApprovalColumn.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DoctorApplication;
