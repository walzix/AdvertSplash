import React, { useState } from "react";
import "../Table/Table.css";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Table = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "firstName",
      headerName: "First name",
      width: 200,
    },
    {
      field: "Emails",
      headerName: "Emails",
      width: 230,
    },
    {
      field: "TotalSitesApps",
      headerName: "Total Sites / Apps",
      width: 230,
      
    },
    {
      field: "Status",
      headerName: "Status",
      width: 230,
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
  ];
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          disableSelectionOnClick
        />
      </div>
    </>
  );
};
export default Table;
