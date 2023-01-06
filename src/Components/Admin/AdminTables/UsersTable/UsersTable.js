import React, { useState } from "react";
import "./UsersTable.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import MenuItem from "@mui/material/MenuItem";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from "@mui/material/Box";


const UsersTable = ({ handleOpen, usersData,loading }) => {
 
  const rows = usersData?.map((cur) => {
    return {
      id:cur._id,
      Emails: cur.email,
      firstName: cur.fullname,
      TotalSitesApps: "1",
      Status: cur.userStatus,
      Action: "",
    };
  });
 
  const columns = [
    {
      field: "firstName",
      headerName: "First name",
      flex: 1,
    },
    {
      field: "Emails",
      headerName: "Emails",
      flex: 1,
    },
    {
      field: "TotalSitesApps",
      headerName: "Total Sites / Apps",
      flex: 1,
    },
    {
      flex: 1,
      field: "Status",
      headerName: "Status",
      renderCell: (user) => (
        <>
          {user.row.Status === "Registered"||user.row.Status==="Active" ? (
            <div className="Active">{user.row.Status}</div>
          ) : (
            <div className="not_active">Not Active</div>
          )}
        </>
      ),
    },
    {
      flex: 1,
      field: "Action",
      headerName: "Action",
      editable: false,
      renderCell: (user) => (
        <>
        {user.row.Status==="Registered"?
        <Button
              id="demo-positioned-button"
             
              // onClick={handleApi}
            >
              Suspend
            </Button>
            :null
        }
         
        </>
      ),
    },
  ];

  return (
    <>
    <div className="users__table__container">
      <div className="Users_Head_btn">
        <div>USERS</div>
        <div className="Add_download_btns">
          <button className="Add_sites_btn" onClick={handleOpen}>
            {" "}
            <AiOutlineUserAdd className="Add_icon" /> ADD USERS{" "}
          </button>
        </div>
      </div>

    {usersData?
      <div className="table__contine">
        <Box sx={{ height: 400, width: "95%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </div>
    :  <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>}
    </div>
    </>
  );
};
export default UsersTable;
