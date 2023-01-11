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
      renderCell: (User) =>(
        <>
      {User.row.status === true ? (

          <div className='Sites__Active'>Active</div> 
      ) : (
        <div className='Sites__Stopped'>Stopped</div>
      )
    }
        </>
      )
    },
  ];

  const rows = [
    { id: 1, AppURL: "Snow", AppName: "Jon", status : false },
    { id: 2, AppURL: "Lannister", AppName: "Cersei", status : true },
    { id: 3, AppURL: "Lannister", AppName: "Jaime", status : false },
    { id: 4, AppURL: "Stark", AppName: "Arya", status : true },
    { id: 5, AppURL: "Targaryen", AppName: "Daenerys", status : false },
    { id: 6, AppURL: "Melisandre", AppName: null, status : true },
    { id: 7, AppURL: "Clifford", AppName: "Ferrara", status : false },
    { id: 8, AppURL: "Frances", AppName: "Rossini", status : true },
    { id: 9, AppURL: "Roxie", AppName: "Harvey", status : false },
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