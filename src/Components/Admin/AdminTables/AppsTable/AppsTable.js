import React, { useState } from "react";
import "./AppsTable.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const AppsTable = ({ appsData }) => {
  const columns = [
    {
      field: "AppName",
      headerName: "App Name",
      flex: 1,
    },
    {
      field: "User",
      headerName: "user",
      flex: 1,
    },
    {
      field: "AppLink",
      headerName: "App Link",
      flex: 1,
    },
    {
      field: "Type",
      headerName: "Type",
      flex: 1,
    },
  ];
  const rows = appsData?.map((cur) => {
    return {
      id: cur._id,
      AppLink: cur.appComID,
      AppName: cur.appName,
      Type: cur.appType,
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
            components={{ Toolbar: GridToolbar }}
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
