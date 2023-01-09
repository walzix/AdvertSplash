import React, { useState, useEffect } from "react";
import "./UsersApps.css";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
axios.defaults.withCredentials = true;

const UsersApps = () => {
  const [appsData, setAppsData] = useState();

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_BACKEND_URL + `/api/users/getAppsByUser_user`)
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
    },
  ];

  const rows = [
    { id: 1, AppURL: "Snow", AppName: "Jon", STATUS: 35 },
    { id: 2, AppURL: "Lannister", AppName: "Cersei", STATUS: 42 },
    { id: 3, AppURL: "Lannister", AppName: "Jaime", STATUS: 45 },
    { id: 4, AppURL: "Stark", AppName: "Arya", STATUS: 16 },
    { id: 5, AppURL: "Targaryen", AppName: "Daenerys", STATUS: null },
    { id: 6, AppURL: "Melisandre", AppName: null, STATUS: 150 },
    { id: 7, AppURL: "Clifford", AppName: "Ferrara", STATUS: 44 },
    { id: 8, AppURL: "Frances", AppName: "Rossini", STATUS: 36 },
    { id: 9, AppURL: "Roxie", AppName: "Harvey", STATUS: 65 },
  ];

  return (
    <div className="UsersApps__table__Container">
      <div style={{ height: 400, width: "95%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // checkboxSelection
        />
      </div>
    </div>
  );
};

export default UsersApps;
