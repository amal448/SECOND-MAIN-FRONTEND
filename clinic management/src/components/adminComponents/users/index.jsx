
import "./style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
import useFetch from "../../../hooks/useFetch";
import { Switch } from "@mui/material";



const Users = ({ users, setUsers }) => {

  const [data, setData] = useState(users);
  const getRequest = useFetch("GET")

  function blockUser(event, id) {
    event.stopPropagation();
    getRequest(`/admin/block-user/${id}`).then((response) => {
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


  const actionColumn = [
    {
      field: "block",
      headerName: "BLOCK/UNBLOCK",
      width: 200,
      renderCell: (params) => {
        console.log(params);
        return (
          <div className="cellAction">
            <Switch

             checked={params.row.block}
             onChange={(event)=>{
              event.stopPropagation()
              params.row.block = !params.row.block
              blockUser(event, params.row._id)
            }} 
             defaultChecked />

            {/* <span onClick={(event) => blockUser(event,params.row?._id)}>
              <span className={`${params.row?.block ? 'switch-off' : ''} switch`}>kkkkkk <span className={`${params.row?.block ? 'left' : 'right'}`}></span></span>
            </span> */}
          </div> 
        );
      },
    },
  ];
return (
  <div className="datatable">
    <div className="datatableTitle">
      USERS LIST
      <Link to="/users/new" className="link">
        Add New
      </Link>
    </div>
    <DataGrid
      className="datagrid"
      rows={users}
      // rows={data}
      getRowId={(row) => row._id}
      columns={userColumns.concat(actionColumn)}
      pageSize={9}
      rowsPerPageOptions={[9]}
      // checkboxSelection
      disableSelectionOnClick
    />
  </div>
);
};

export default Users;
