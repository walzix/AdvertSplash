import React, { useState } from "react";
import "../Table/Table.css";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import MenuItem from "@mui/material/MenuItem";
const Table = () => {
  
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const rows = [
    {
      id: 1,
      Emails: "n328k@hotmail.com",
      firstName: "Jon",
      TotalSitesApps: "1",
      Status: true,
      Action: "",
    },
    {
      id: 2,
      Emails: "n328k@hotmail.com",
      firstName: "Cersei",
      TotalSitesApps: "2",
      Status: true,
    },
    {
      id: 3,
      Emails: "n328k@hotmail.com",
      firstName: "Jaime",
      TotalSitesApps: "3",
      Status: true,
    },
    {
      id: 4,
      Emails: "n328k@hotmail.com",
      firstName: "Arya",
      TotalSitesApps: "4",
      Status: false,
    },
    {
      id: 5,
      Emails: "n328k@hotmail.com",
      firstName: "Daenerys",
      TotalSitesApps: "5",
      Status: true,
    },
    {
      id: 6,
      Emails: "n328k@hotmail.com",
      firstName: null,
      TotalSitesApps: "6",
    },
    {
      id: 7,
      Emails: "n328k@hotmail.com",
      firstName: "Ferrara",
      TotalSitesApps: "7",
      Status: true,
    },
    {
      id: 8,
      Emails: "n328k@hotmail.com",
      firstName: "Rossini",
      TotalSitesApps: "8",
      Status: true,
    },
    {
      id: 9,
      Emails: "n328k@hotmail.com",
      firstName: "Harvey",
      TotalSitesApps: "9",
      Status: true,
    },
    {
      id: 10,
      Emails: "n328k@hotmail.com",
      firstName: "Jon",
      TotalSitesApps: "1",
      Status: true,
      Action: "",
    },
    {
      id: 11,
      Emails: "n328k@hotmail.com",
      firstName: "Cersei",
      TotalSitesApps: "2",
      Status: true,
    },
    {
      id: 12,
      Emails: "n328k@hotmail.com",
      firstName: "Jaime",
      TotalSitesApps: "3",
      Status: true,
    },
    {
      id: 13,
      Emails: "n328k@hotmail.com",
      firstName: "Arya",
      TotalSitesApps: "4",
      Status: false,
    },
    {
      id: 14,
      Emails: "n328k@hotmail.com",
      firstName: "Daenerys",
      TotalSitesApps: "5",
      Status: true,
    },
    {
      id: 15,
      Emails: "n328k@hotmail.com",
      firstName: null,
      TotalSitesApps: "6",
    },
    {
      id: 16,
      Emails: "n328k@hotmail.com",
      firstName: "Ferrara",
      TotalSitesApps: "7",
      Status: true,
    },
    {
      id: 17,
      Emails: "n328k@hotmail.com",
      firstName: "Rossini",
      TotalSitesApps: "8",
      Status: true,
    },
    {
      id: 18,
      Emails: "n328k@hotmail.com",
      firstName: "Harvey",
      TotalSitesApps: "9",
      Status: true,
    },
  ];
  const columns = [
    { field: "id", headerName: "ID" , flex:1, },
    {
      field: "firstName",
      headerName: "First name",
      flex:1,
    },
    {
      field: "Emails",
      headerName: "Emails",
      flex:1, 
    },
    {
      field: "TotalSitesApps",
      headerName: "Total Sites / Apps",
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
      flex:1,
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
              <MenuItem onClick={handleClose}>Admin Login</MenuItem>
            </Menu>
          </div>
        </>
      ),
    },
  ];

 
  return (
    <div className="users__table__container">
    <div className="Users_Head_btn">
        <div>
          USERS
        </div>
        <div className="Add_download_btns">
        <button className="Add_sites_btn"> <AiOutlineUserAdd className="Add_icon" /> ADD USERS </button>
        </div>
      </div>
      
      <div style={{ height: 400, width: "105%" }}>
      <div className="users_search_input">
      Search
        <input className="user_search__input" type="text" 
        placeholder="Search..." 
        value={search}
        onChange={(e) =>setSearch(e.target.value)}
         />
         {/* <TextField
          id="filled-textarea"
          label="Search"
          placeholder="Search"
          multiline
          variant="filled"
        /> */}
      </div>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          disableSelectionOnClick 
        />
      </div>
    </div>
  );
};
export default Table;
