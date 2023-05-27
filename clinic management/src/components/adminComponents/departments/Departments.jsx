import "./style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { depColumns } from "../../../DepartmentDatatable";
import { Link } from "react-router-dom";
import { useState } from "react";
// import Swal from "sweetalert2";

const Departments = ({ departments,setDepartments}) => {
  const [show, setShow] = useState(false);



  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              // onClick={() => handleDelete(params?.row?._id)}
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
        Departments
        
        {/* <Link to="/admin/add-department" className="link">
        </Link> */}
        <button className="link" >
          Add New <Link to="/admin/add-department" className="link"></Link>
        </button>
      </div>
      <DataGrid
        className="datagrid"
        rows={departments}
        getRowId={(row) => row._id}
        columns={depColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />

    </div>
  );
};

export default Departments;
