import React, {useState} from "react";
import "../../Pages/Apps/Apps.css"
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { HiViewGridAdd } from "react-icons/hi";
import MenuItem from "@mui/material/MenuItem";
const Apps = () => {

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
      flex:1,
      
    },
    {
      field: "User",
      headerName: "user",
      flex:1,
    },
    {
      field: "AppLink",
      headerName: "App Link",
      flex:1,
    },
    {
      field: "Status",
      headerName: "Status",
      flex:1,
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
      flex:0.5,
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

  const rows = [
    { id: 1, AppLink: "Snow", AppName: "Jon", Status: 35, User:"asd" },
    { id: 2, AppLink: "Lannister", AppName: "Cersei", Status: 42 , User:"asd"},
    { id: 3, AppLink: "Lannister", AppName: "Jaime", Status: 45 , User:"asd"},
    { id: 4, AppLink: "Stark", AppName: "Arya", Status: 16 , User:"asfd" },
    { id: 5, AppLink: "Targaryen", AppName: "Daenerys", Status: null , User:"asfd"},
    { id: 6, AppLink: "Melisandre", AppName: null, Status: 150 , User:"asd"},
    { id: 7, AppLink: "Clifford", AppName: "Ferrara", Status: 44 , User:"asd"},
    { id: 8, AppLink: "Frances", AppName: "Rossini", Status: 36 , User:"asd"},
    { id: 9, AppLink: "Roxie", AppName: "Harvey", Status: 65 , User:"asf"},
  ];

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
    <div className="Apps__AddApps_download__container">
      <div>
        APPS
      </div>
      <div className="AddApps__btn____Apps__Download__btn___container">
        <button className="AddApps__btn"> <HiViewGridAdd className="Add__app_Icon"/> ADD APPS</button>
        <button className="Apps__Download__btn"> <HiDownload className="apps__download__Icon" /> DOWNLOAD  </button>
      </div>
    </div>
      <Box sx={{ height: 400, width: "104%" }}>
        <DataGrid className="Apps__table__container"
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </motion.div>
  );
};

export default Apps;
