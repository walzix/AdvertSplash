import React, { useState, useEffect } from "react";
import "./UsersApps.css";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
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

  const rows = [
    { id: 1, AppURL: "Snow", AppName: "Jon", Status: false },
    { id: 2, AppURL: "Lannister", AppName: "Cersei", Status: true },
    { id: 3, AppURL: "Lannister", AppName: "Jaime", Status: true },
    { id: 4, AppURL: "Stark", AppName: "Arya", Status: true },
    { id: 5, AppURL: "Targaryen", AppName: "Daenerys", Status: false },
    { id: 6, AppURL: "Melisandre", AppName: null, Status: true },
    { id: 7, AppURL: "Clifford", AppName: "Ferrara", Status: true },
    { id: 8, AppURL: "Frances", AppName: "Rossini", Status: false },
    { id: 9, AppURL: "Roxie", AppName: "Harvey", Status: true },
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
