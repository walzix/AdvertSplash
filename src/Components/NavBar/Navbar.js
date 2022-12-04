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
import { NavLink } from "react-router-dom";
import logo1 from "../../assets/logo.png";
const Navbar = ({ children }) => {
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
      path: "/Users",
      name: "Users",
      icon: <FiUsers />,
    },
    {
      path: "/Sites",
      name: "Sites",
      icon: <CgWebsite />,
    },
    {
      path: "/Apps",
      name: "Apps",
      icon: <IoIosApps />,
    },
    {
      path: "/Statistics",
      name: "Statistics",
      icon: <BiStats />,
    },
    {
      path: "/UploadReports",
      name: "Upload Reports",
      icon: <TbFileUpload />,
    },
    {
      path: "/UploadReportsApp",
      name: "Upload Reports App",
      icon: <HiUpload />,
    },
    {
      path: "/DeleteReports",
      name: "Delete Reports",
      icon: <TiDocumentDelete />,
    },
  ];

  return (
    <>
      <nav className="main_top_nav">
         <div className="search_bar">
         <div className="login_button_container">
          <div className="login"><AiOutlinePoweroff /></div>
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
          width: isOpen ? "210px" : "50px",
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
            <motion.img
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
      <main>{children}</main>
    </div>
    </>
  );
};

export default Navbar;
