import React from "react";
import AdminNavBar from "../../Components/Admin/AdminNavBar/AdminNavBar";
const Admin = ({ setRefresh, refresh }) => {
  return (
    <div>
      <AdminNavBar setRefresh={setRefresh} refresh={refresh} />
    </div>
  );
};

export default Admin;
