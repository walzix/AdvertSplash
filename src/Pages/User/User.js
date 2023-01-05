import React from "react";
import Navbar from "../../Components/User/NavBar/Navbar";
const User = ({ setRefresh, refresh ,setUserSession}) => {
  return (
    <div>
      <Navbar setRefresh={setRefresh} refresh={refresh} setUserSession={setUserSession}/>
    </div>
  );
};

export default User;
