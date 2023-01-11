import React, { useState, useEffect } from "react";
import "./UsersApps.css";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { GridToolbar } from "@mui/x-data-grid";
axios.defaults.withCredentials = true;

const UsersApps = () => {
  const [appsData, setAppsData] = useState();
  useEffect(() => {
    axios
      .post(process.env.REACT_APP_BACKEND_URL + `/api/app/getAppsByUser_user`)
      .then((res) => {
        console.log(res);
        setAppsData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    { field: "AppName", headerName: "APPLICATION NAME", width: 130, flex: 1 },
    { field: "AppURL", headerName: "APPLICATION URL", width: 130, flex: 1 },
    {
      field: "STATUS",
      headerName: "STATUS",
      width: 160,
      renderCell: (Users) => (
        <>
          {Users.row.Status === true ? (
            <div className="User__Active">Active</div>
          ) : (
            <div className="User__Stopped">Stopped</div>
          )}
        </>
      ),
    },
  ];

  const rows = appsData?.map((cur) => {
    return {
      id: cur._id,
      AppURL: cur.appComID,
      AppName: cur.appName,
      Type: cur.appType,
      User: cur.clientEmail,
    };
  });
  return (
    <div className="UsersApps__table__Container">
      {appsData ? (
        <div style={{ height: 400, width: "95%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            components={{ Toolbar: GridToolbar }}
          />
        </div>
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

export default UsersApps;
