import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../../Pages/Sites/Sites.css";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import MenuItem from "@mui/material/MenuItem";
import {FaSitemap} from "react-icons/fa";
import {TfiDownload} from "react-icons/tfi";
import {motion} from "framer-motion"
const Sites = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "User", headerName: "User", width: 220 },
    { field: "Sites", headerName: "Site", width: 450 },
    { field: "Themes", headerName: "Themes", width: 130 },
    {
      field: "Status",
      headerName: "Status",
      width: 130,

      renderCell: (Users) => (
        <>
          {Users.row.Status === true ? (
            <div className="Active">Active</div>
          ) : (
            <div className="Stopped">Stopped</div>
          )}
        </>
      ),
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 130,
      renderCell: (Users) => (
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
              <MenuItem onClick={handleClose}>Disabled</MenuItem>
              <MenuItem onClick={handleClose}>Edit</MenuItem>
            </Menu>
          </div>
        </>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      User: "Snow",
      Sites: "www.walzix.com",
      Themes: "Jon",
      Status: true,
      Actions: "",
    },
    {
      id: 2,
      User: "Lannister",
      Sites: "www.walzix.com",
      Themes: "Cersei",
      Status: true,
    },
    {
      id: 3,
      User: "Lannister",
      Sites: "www.walzix.com",
      Themes: "Jaime",
      Status: true,
    },
    {
      id: 4,
      User: "Stark",
      Sites: "www.walzix.com",
      Themes: "Arya",
      Status: true,
    },
    {
      id: 5,
      User: "Targaryen",
      Sites: "www.walzix.com",
      Themes: "Daenerys",
      Status: null,
    },
    {
      id: 6,
      User: "Melisandre",
      Sites: "www.walzix.com",
      Themes: null,
      Status: true,
    },
    {
      id: 7,
      User: "Clifford",
      Sites: "www.walzix.com",
      Themes: "Ferrara",
      Status: true,
    },
    {
      id: 8,
      User: "Frances",
      Sites: "www.walzix.com",
      Themes: "Rossini",
      Status: true,
    },
    {
      id: 9,
      User: "Roxie",
      Sites: "www.walzix.com",
      Themes: "Harvey",
      Status: true,
    },
  ];

  return (
   
    <motion.div  className="Sites_table_container"
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth ,transition:{duration: 0.1}}}
    >
      <div className="siteHead_Add_download_btn">
        <div>
          SITES
        </div>
        <div className="Add_download_btns">
        <button className="Add_sites_btn"> <FaSitemap className="user_add_icon" /> ADD SITES</button>
        <button className="download_btn"> <TfiDownload className="user_add_icon" /> DOWNLOAD</button>
        </div>
      </div>
      <div style={{ height: 400, width: "105%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </motion.div>
  );
};

export default Sites;
