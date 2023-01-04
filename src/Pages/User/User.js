import React from "react";
import Navbar from "../../Components/User/NavBar/Navbar";
const User = ({ setRefresh, refresh ,setCheckUserSession}) => {
  return (
    <div>
      <Navbar setRefresh={setRefresh} refresh={refresh} setCheckUserSession={setCheckUserSession}/>
    </div>
  );
};

export default User;
