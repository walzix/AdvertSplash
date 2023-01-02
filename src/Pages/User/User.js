import React from "react";
import Navbar from "../../Components/User/NavBar/Navbar";
const User = ({ setRefresh, refresh }) => {
  return (
    <div>
      <Navbar setRefresh={setRefresh} refresh={refresh} />
    </div>
  );
};

export default User;
