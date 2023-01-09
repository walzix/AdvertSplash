import React from "react";
import "./UserDashboard.css";
import { motion } from "framer-motion";
import UserDashboardCards from "../../../Components/User/userDashboardCards/UserDashboardCards";
import UserProfile from "../../../Components/User/UserProfile/UserProfile";
import UserDashboardChart from "../../../Components/User/UserDashboardChart/UserDashboardChart";
const UserDashboard = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="parent"
    >
      <div className="div1">
        <UserProfile />
      </div>
      <div className="div2">
        <UserDashboardCards />
      </div>
      <div className="div3">
        <UserDashboardChart />
      </div>
    </motion.div>
  );
};

export default UserDashboard;
