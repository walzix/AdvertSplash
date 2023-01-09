import React from 'react'
import "./UserSites.css"
import { DataGrid } from "@mui/x-data-grid";
const UserSites = () => {
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
    <div className='UserSites__container'>
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
  )
}

export default UserSites