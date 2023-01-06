import React, { useState } from "react";
import "./AppsTable.css";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const AppsTable = ({ appsData }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const columns = [
    {
      field: "AppName",
      headerName: "App Name",
      width: 330,
    },
    {
      field: "User",
      headerName: "user",
      width: 170,
    },
    {
      field: "AppLink",
      headerName: "App Link",
      width: 330,
    },
    {
      field: "Status",
      headerName: "Status",
      width: 180,
      renderCell: (user) => (
        <>
          {user.row.Status === true ? (
            <div className="Active">Active</div>
          ) : (
            <div className="not_active">Not Active</div>
          )}
        </>
      ),
    },
    {
      field: "Action",
      headerName: "Action",
      width: 130,
      editable: false,
      renderCell: (user) => (
        <>
          <div>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Actions
              <MdOutlineKeyboardArrowDown />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Remove User</MenuItem>
              <MenuItem onClick={handleClose}>Update App Status</MenuItem>
            </Menu>
          </div>
        </>
      ),
    },
  ];
  const rows = appsData?.map((cur) => {
    return {
      id: cur._id,
      AppLink: cur.appComID,
      AppName: cur.appName,
      Status: cur._id,
      User: cur.clientEmail,
    };
  });

  return (
    <div className="Apps__table__container">
      {appsData ? (
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
};

export default AppsTable;
