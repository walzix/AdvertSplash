import React from "react";
import AdminNavBar from "../../Components/Admin/AdminNavBar/AdminNavBar";
const Admin = ({ setRefresh, refresh, setAdminSession }) => {
  return (
    <div>
      <AdminNavBar
        setRefresh={setRefresh}
        refresh={refresh}
        setAdminSession={setAdminSession}
      />
    </div>
  );
};

export default Admin;
