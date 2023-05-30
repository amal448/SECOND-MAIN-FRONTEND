import "./style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, ApprovalColumn } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
// import Swal from 'sweetalert2'

function DoctorApplication({ applicant, setApplicant }) {
  const [data, setData] = useState();

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes,delete it !'
      }).then(async (result) => {
        if (result.isConfirmed) {

        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/admin/view-apply/${params.row._id}`} style={{ textDecoration: "none" }}>
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
