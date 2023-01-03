import React, { useState } from "react";
import "../NavBar/Navbar.css";
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
import logo1 from "../../../assets/logo.png";
import { useLocation } from "react-router-dom";
import Deshboard from "../../../Pages/Admin/Deshboard/Deshboard";
import Users from "../../../Pages/Admin/Users lists/Users";
import Sites from "../../../Pages/Admin/Sites/Sites";
import Apps from "../../../Pages/Admin/Apps/Apps";
import Statistics from "../../../Pages/Admin/Statistics/Statistics";
import UploadReports from "../../../Pages/Admin/UploadReports/UploadReports";
import UploadReportsApp from "../../../Pages/Admin/UploadReportsApp/UploadReportsApp";
import DeleteReports from "../../../Pages/Admin/DeleteReports/DeleteReports";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
// axios.defaults.withCredentials = true

const Navbar = ({ setRefresh, refresh }) => {
  const Navigate = useNavigate();
  const handleLogout = (e) => {
    axios
      .get("http://localhost:7000/api/users/logout")
      .then((res) => {
        console.log(res);
        if (res.status===200){
          toast.success(res.data.message);
          setRefresh(!refresh)
        }
      })
      .catch((err) => {
        console.log(err);
        toast.warn(err.response.data.message);
      });
  };

  const path = useLocation().pathname;
  console.log(path);
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
      path: "/",
      name: "Deshboard",
      icon: <SiHubspot />,
    },
    {
      path: "/User/Users",
      name: "Users",
      icon: <FiUsers />,
    },
    {
      path: "/User/Sites",
      name: "Sites",
      icon: <CgWebsite />,
    },
    {
      path: "/User/Apps",
      name: "Apps",
      icon: <IoIosApps />,
    },
    {
      path: "/User/Statistics",
      name: "Statistics",
      icon: <BiStats />,
    },
    {
      path: "/User/UploadReports",
      name: "Upload Reports",
      icon: <TbFileUpload />,
    },
    {
      path: "/User/UploadReportsApp",
      name: "Upload Reports App",
      icon: <HiUpload />,
    },
    {
      path: "/User/DeleteReports",
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
      {/* Same as */}
      <ToastContainer />
      <nav className="main_top_nav">
        <div className="search_bar">
          <div className="login_button_container">
            <div className="login">
              <AiOutlinePoweroff onClick={handleLogout} />
            </div>
          </div>
          <div className="search_icon">
            <BsSearch onClick={toggleSearch} className="search_icon" />
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
        <div className="user_name_icon">
          <div className="line"></div>
          <div>
            <h5 className="user_name">Walzix</h5>
          </div>
          <div className="user_icon">
            <BiUserCircle />
          </div>
        </div>
      </nav>
      <div className="main_container">
        <motion.div
          animate={{
            width: isOpen ? "260px" : "65px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 7,
            },
          }}
          className="sidebar"
        >
          <div className="top_section">
            {isOpen && (
              <img
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
                src={logo1}
                alt={logo1}
              />
            )}
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route) => (
              <NavLink
                activeClassName="active"
                to={route.path}
                key={route.name}
                className="links"
              >
                <div className="icons">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="Link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
          </section>
        </motion.div>
        <div className="path__user">
          {path === "/" || path === "/user" ? (
            <Deshboard />
          ) : path === "/User/Users" ? (
            <Users />
          ) : path === "/User/Sites" ? (
            <Sites />
          ) : path === "/User/Apps" ? (
            <Apps />
          ) : path === "/User/Statistics" ? (
            <Statistics />
          ) : path === "/User/UploadReports" ? (
            <UploadReports />
          ) : path === "/User/UploadReportsApp" ? (
            <UploadReportsApp />
          ) : path === "/User/DeleteReports" ? (
            <DeleteReports />
          ) : null}
          {/* <main>{children}</main> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
