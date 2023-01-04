import React from "react";
import "./Dashboard.css";
import DashboardCards from "../../../Components/Admin/DashboardCards/DashboardCards";
import SplineChart from "../../../Components/Admin/DashboardCharts/SplineChart";
import { motion } from "framer-motion";
const Dashboard = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="Dashboard">
        <div className="top">
          <div className="top__cards">
            <div>
              <DashboardCards />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom__left">
            <div className="bottom__left__sites">
              <div className="left__sites">
                <div className="Sits__Apps__webmstr">Sites</div>
                <div className="countss">198</div>
              </div>
              <div className="left__sites">
                <div className="Sits__Apps__webmstr">Apps</div>
                <div className="countss">190</div>
              </div>
              <div className="left__sites">
                <div className="Sits__Apps__webmstr">Webmaster</div>
                <div className="countss">41</div>
              </div>
            </div>
          </div>
          <div className="bottom__center"></div>
          <div className="bottom__right">
            <div className="Revenue__chart">Revenue chart</div>
            <SplineChart />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
