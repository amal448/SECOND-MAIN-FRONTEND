import "./style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { depColumns } from "../../../DepartmentDatatable";
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import useFetch from "../../../hooks/useFetch";
// import { useNavigate } from "react-router-dom";
const Departments = ({ departments, setDepartments }) => {
  const [data, setData] = useState(false);

  const navigate=useNavigate()
  // const handleEdit = async (id) => {
  //   try {
  //     Swal.fire({
  //       title: 'Are you sure?',
  //       text: "You won't be able to revert this!",
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonColor: '#3085d6',
  //       cancelButtonColor: '#d33',
  //       confirmButtonText: 'Yes, delete it!'
  //     }).then(async (result) => {
  //       if (result.isConfirmed) {

  //         const deletdoc = editRequest(`/admin/edit-dep/${id}`).then((response) => {
  //           console.log("Atdeparment axios");
  //           console.log("response", response);
  //         })


  //         setDoctors(deletdoc?.data?.doctors)

  //         setData()

  //         Swal.fire(
  //           'Deleted!',
  //           'Your file has been deleted.',
  //           'success'
  //         )
  //       }
  //     })

  //   } catch (error) {
  //     return error

  //   }
  // }

const handleEdit=async (id) =>{

navigate.push(`/admin/edit-dep/${id}`)
}


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
              onClick={() => handleEdit(params?.row?._id)}

            >
              Edit
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
