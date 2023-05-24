import "./style.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
import useFetch from "../../../hooks/useFetch";



const Users = ({ users, setUsers }) => {

  const [data, setData] = useState();

  const getRequest = useFetch("GET")



  function blockUser(event, id) {
    console.log(event);
    event.stopPropagation()
    console.log("123333");
    getRequest(`/admin/block-user/${id}`).then(response => {
      console.log("responseok", response);
      if (response.ok) {
        setData(prev => {
          return prev.filter(item => {
            if (item._id == id) {
              item.block = !item.block
            }
            return item
          })
        })
      }
    })
  }
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        console.log(params);
        return (
          <div className="cellAction">
            <span onClick={(event) => blockUser(event,params.row?._id)}>
              <span className={`${params.row?.block ? 'switch-off' : ''} switch`}>kkkkkk <span className={`${params.row?.block ? 'left' : 'right'}`}></span></span>
            </span>
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
      getRowId={(row) => row._id}
      columns={userColumns.concat(actionColumn)}
      pageSize={9}
      rowsPerPageOptions={[9]}
      checkboxSelection
      disableSelectionOnClick
    />
  </div>
);
};

export default Users;
