import "./style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { doctorsColumn, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
import useFetch from "../../../hooks/useFetch";
import { Switch } from "@mui/material";
import Swal from 'sweetalert2'



const Doctors = ({ doctors, setDoctors }) => {
  const [data, setData] = useState(doctors);
  const getRequest = useFetch("GET")


  function blockdoctor(event, id) {
    event.stopPropagation();
    getRequest(`/admin/block-doctor/${id}`).then((response) => {
      if (response.ok) {
        // const updatedData = data.map((item) => {
        //   if (item._id === id) {
        //     return { ...item, block: !item.block };
        //   }
        //   return item;
        // });
        // setData(updatedData);
        // setBlockStatus((prevStatus) => !prevStatus);
        swal("Success", "User blocked/unblocked successfully!", "success");
      } else {
        swal("Error", "Failed to block/unblock user", "error");
      }
    });
  }
  // function blockdoctor(event, id) {
  //   // event.stopPropagation();
  
  //   Swal.fire({
  //     title: "Confirmation",
  //     text: "Are you sure you want to block/unblock this user?",
  //     icon: "question",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes",
  //     cancelButtonText: "No",
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       try {
  //         const response = await getRequest(`/admin/block-doctor/${id}`);
  //         if (response.ok) {
  //           // Handle success case
  //           swal("Success", "User blocked/unblocked successfully!", "success");
  //         } else {
  //           // Handle error case
  //           swal("Error", "Failed to block/unblock user", "error");
  //         }
  //       } catch (error) {
  //         console.error(error);
  //         swal("Error", "An error occurred", "error");
  //       }
  //     }
  //   });
  // }
  
  
  const actionColumn = [
    {
      field: "block",
      headerName: "BLOCK/UNBLOCK",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Switch

              checked={params.row.block}
              onChange={(event) => {
                event.stopPropagation()
                params.row.block = !params.row.block
                blockdoctor(event, params.row._id)
              }}
              defaultChecked />

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

