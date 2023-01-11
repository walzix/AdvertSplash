import React, { useState } from "react";
import "./Navbar.css";
import { motion, AnimatePresence } from "framer-motion";
import { SiHubspot } from "react-icons/si";
import { FiUsers } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineAppstore } from "react-icons/ai";
import { BiStats } from "react-icons/bi";
import { TbFileUpload } from "react-icons/tb";
import { HiUpload } from "react-icons/hi";
import { TiDocumentDelete } from "react-icons/ti";
import { IoApps } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { FcSettings } from "react-icons/fc";
import logo1 from "../../../assets/logo.png";
import { useLocation } from "react-router-dom";
import UserDashboard from "../../../Pages/User/UserDashboard/UserDashboard";
import UsersApps from "../../../Pages/User/UsersApps/UsersApps";
import UserSites from "../../../Pages/User/UserSites/UserSites";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
axios.defaults.withCredentials = true;
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
const Navbar = ({ setRefresh, refresh, setUserSession }) => {
  const path = useLocation().pathname;
  console.log(path);
  const [changePassword, setChangePassword] = useState({
    oldPass: "",
    newPassOne: "",
    newPassTwo: "",
  });
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toggleSearch = () => setIsOpenSearch(!isOpenSearch);
  // logout states
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // end

  const routes = [
    {
      path: "/",
      name: "Dashboard",
      icon: <SiHubspot />,
    },
    {
      path: "/User/UserSites",
      name: "Sites",
      icon: <CgWebsite />,
    },
    {
      path: "/User/UserApps",
      name: "Apps",
      icon: <AiOutlineAppstore />,
    },
  ];
  const handleLogout = (e) => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/users/logout")
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success(res.data.message);
          setRefresh(!refresh);
          setUserSession(false);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.warn(err.response.data.message);
      });
  };
  const handleChangePassChange = (e) => {
    let { name, value } = e.target;
    setChangePassword({ ...changePassword, [name]: value });
  };
  const handlePassChangeSub = (e) => {
    e.preventDefault();
    if (
      !changePassword.newPassOne ||
      !changePassword.newPassTwo ||
      !changePassword.oldPass
    ) {
      toast.warn("Please fill the data");
    } else {
      setLoadingBtn(true);
      axios
        .post(
          process.env.REACT_APP_BACKEND_URL + "/api/users/resetPassword",
          changePassword
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            toast.success(res.data.message);
            setLoadingBtn(false);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.warn(err.response.data.message);
          setLoadingBtn(false);
        });
    }
  };
  // logout modal

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    // height: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  const [openModal, setOpenModal] = React.useState(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);
  // password input states
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
            <div className="login"></div>
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
          <div className="user_icon">{/* <BiUserCircle /> */}</div>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <FcSettings className="setting__logo" />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleModalOpen}>Change Password</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
          <div>
            <Modal
              open={openModal}
              onClose={handleModalClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="modal-modal-title" variant="h6" component="h2">
                  <div className="modal_container">
                    <div className="Password_change_heading">
                      Change Password
                    </div>
                    <form onSubmit={handlePassChangeSub}>
                      <div className="modal_inputs">
                        <div>
                          <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">
                              Old Password
                            </InputLabel>
                            <OutlinedInput
                              id="outlined-adornment-password"
                              type={showPassword ? "text" : "password"}
                              name="oldPass"
                              value={changePassword.oldPass}
                              required
                              onChange={handleChangePassChange}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                              label="Password"
                            />
                          </FormControl>
                        </div>
                        <div>
                          <FormControl
                            sx={{ m: 1, width: "35ch" }}
                            variant="outlined"
                          >
                            <InputLabel htmlFor="outlined-adornment-password">
                              Password
                            </InputLabel>
                            <OutlinedInput
                              id="outlined-adornment-password"
                              type={showPassword ? "text" : "password"}
                              name="newPassOne"
                              value={changePassword.newPassOne}
                              required
                              onChange={handleChangePassChange}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                              label="Password"
                            />
                          </FormControl>
                        </div>
                        <div>
                          <FormControl
                            sx={{ m: 1, width: "35ch" }}
                            variant="outlined"
                          >
                            <InputLabel htmlFor="outlined-adornment-password">
                              Confirm Password
                            </InputLabel>
                            <OutlinedInput
                              id="outlined-adornment-password"
                              type={showPassword ? "text" : "password"}
                              name="newPassTwo"
                              value={changePassword.newPassTwo}
                              required
                              onChange={handleChangePassChange}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                  >
                                    {showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                              label="Password"
                            />
                          </FormControl>
                        </div>
                      </div>
                      <div className="modal_btns">
                        <Button variant="outlined" color="error">
                          Cancel
                        </Button>
                        <LoadingButton
                          loading={loadingBtn}
                          type="submit"
                          variant="outlined"
                        >
                          Submit
                        </LoadingButton>
                      </div>
                    </form>
                  </div>
                </div>
              </Box>
            </Modal>
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
        <motion.div
          className="path__user"
          animate={{
            marginLeft: isOpen ? "260px" : "65px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 7,
            },
          }}
        >
          {path === "/" || path === "/user" ? (
            <UserDashboard />
          ) : path === "/User/UserApps" ? (
            <UsersApps />
          ) : path === "/User/UserSites" ? (
            <UserSites />
          ) : null}
          {/* <main>{children}</main> */}
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
