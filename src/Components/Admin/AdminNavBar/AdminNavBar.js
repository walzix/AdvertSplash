import React, { useState } from "react";
import "./AdminNavBar.css";
import { motion, AnimatePresence } from "framer-motion";
import { SiHubspot } from "react-icons/si";
import { FiUsers } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { IoIosApps } from "react-icons/io";
import { BiStats } from "react-icons/bi";
import { TbFileUpload } from "react-icons/tb";
import { HiUpload } from "react-icons/hi";
import { TiDocumentDelete } from "react-icons/ti";
import { FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlinePoweroff } from "react-icons/ai";
import { Navigate, NavLink } from "react-router-dom";
import logo1 from "../../../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../../../Pages/Admin/Dashboard/Dashboard";
import Users from "../../../Pages/Admin/UsersLists/UsersLists";
import Sites from "../../../Pages/Admin/Sites/Sites";
import Apps from "../../../Pages/Admin/Apps/Apps";
import Statistics from "../../../Pages/Admin/Statistics/Statistics";
import UploadReports from "../../../Pages/Admin/UploadReports/UploadReports";
import UploadReportsApp from "../../../Pages/Admin/UploadReportsApp/UploadReportsApp";
import DeleteReports from "../../../Pages/Admin/DeleteReports/DeleteReports";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


const AdminNavBar = ({ setRefresh, refresh ,setAdminSession}) => {
  const handleLogout = (e) => {
    axios
    .get(process.env.REACT_APP_BACKEND_URL+"/api/admin/logout")
    .then((res) => {
      console.log(res);
      if (res.status===200){
        toast.success(res.data.message);
        setRefresh(!refresh)
        setAdminSession(false)
      }
    })
    .catch((err) => {
      console.log(err);
      toast.warn(err.response.data.message);
    });
  };

  const path = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toggleSearch = () => setIsOpenSearch(!isOpenSearch);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 20,
      },
    },
    show: {
      width: "200px",
      height: "35px",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
      },
    },
  };
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 8,
      },
    },
  };
  const routes = [
    {
      path: path==="/admin"?"/admin":"/Admin/Dashboard",
      name: "Dashboard",
      icon: <SiHubspot />,
    },
    {
      path: "/Admin/Users",
      name: "Users",
      icon: <FiUsers />,
    },
    {
      path: "/Admin/Sites",
      name: "Sites",
      icon: <CgWebsite />,
    },
    {
      path: "/Admin/Apps",
      name: "Apps",
      icon: <IoIosApps />,
    },
    {
      path: "/Admin/Statistics",
      name: "Statistics",
      icon: <BiStats />,
    },
    {
      path: "/Admin/UploadReports",
      name: "Upload Reports",
      icon: <TbFileUpload />,
    },
    {
      path: "/Admin/UploadReportsApp",
      name: "Upload Reports App",
      icon: <HiUpload />,
    },
    {
      path: "/Admin/DeleteReports",
      name: "Delete Reports",
      icon: <TiDocumentDelete />,
    },
  ];
  return (
    <>
     <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <nav className="Admin__main_top_nav">
        <div className="Admin__search_bar">
          <div className="Admin__login_button_container">
            <div className="Admin__login">
              <AiOutlinePoweroff onClick={handleLogout} />
            </div>
          </div>
          <div className="Admin__search_icon">
            <BsSearch onClick={toggleSearch} className="Admin__search_icon" />
          </div>
          <AnimatePresence>
            {isOpenSearch && (
              <motion.input
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={inputAnimation}
                placeholder="Search..."
              />
            )}
          </AnimatePresence>
        </div>
        <div className="Admin__user_name_icon">
          <div className="Admin__line"></div>
          <div>
            <h5 className="Admin__user_name">Walzix</h5>
          </div>
          <div className="Admin__user_icon">
            <BiUserCircle />
          </div>
        </div>
      </nav>
      <div className="Admin__main_container">
        <motion.div
          animate={{
            width: isOpen ? "260px" : "55px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 7,
            },
          }}
          className="Admin__sidebar"
        >
          <div className="Admin__top_section">
            {isOpen && (
              <img
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="Admin__logo"
                src={logo1}
                alt={logo1}
              />
            )}
            <div className="Admin__bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="Admin__routes">
            {routes.map((route) => (
              <NavLink
                activeClassName="Admin__active"
                to={route.path}
                key={route.name}
                className="Admin__links"
              >
                <div className="Admin__icons">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="Admin__Link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
          </section>
        </motion.div>
        <div className="Admin__path__Admin">
        {path === "/Admin" || path === "/Admin/Dashboard" ||path === "/admin"  ? (
          <Dashboard />
        ) : path === "/Admin/Users" ? (
          <Users />
        ) : path === "/Admin/Sites" ? (
          <Sites />
        ) : path === "/Admin/Apps" ? (
          <Apps />
        ) : path === "/Admin/Statistics" ? (
          <Statistics />
        ) : path === "/Admin/UploadReports" ? (
          <UploadReports />
        ) : path === "/Admin/UploadReportsApp" ? (
          <UploadReportsApp />
        ) : path === "/Admin/DeleteReports" ? (
          <DeleteReports />
        ) : null}
        {/* <main>{children}</main> */}
        </div>
      </div>
    </>
  );
};

export default AdminNavBar;
