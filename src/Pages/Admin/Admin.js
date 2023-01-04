import React from "react";
import AdminNavBar from "../../Components/Admin/AdminNavBar/AdminNavBar";
const Admin = ({ setRefresh, refresh, setCheckAdminSession }) => {
  return (
    <div>
      <AdminNavBar
        setRefresh={setRefresh}
        refresh={refresh}
        setCheckAdminSession={setCheckAdminSession}
      />
    </div>
  );
};

export default Admin;
