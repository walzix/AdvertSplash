import React, { useState } from "react";
import "../Apps/Apps.css";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { HiViewGridAdd } from "react-icons/hi";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Apps = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const columns = [
    {
      field: "AppName",
      headerName: "App Name",
      width: 330,
    },
    {
      field: "User",
      headerName: "user",
      width: 170,
    },
    {
      field: "AppLink",
      headerName: "App Link",
      width: 330,
    },
    {
      field: "Status",
      headerName: "Status",
      width: 180,
      renderCell: (user) => (
        <>
          {user.row.Status === true ? (
            <div className="Active">Active</div>
          ) : (
            <div className="not_active">Not Active</div>
          )}
        </>
      ),
    },
    {
      field: "Action",
      headerName: "Action",
      width: 130,
      editable: false,
      renderCell: (user) => (
        <>
          <div>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Actions
              <MdOutlineKeyboardArrowDown />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Remove User</MenuItem>
              <MenuItem onClick={handleClose}>Update App Status</MenuItem>
            </Menu>
          </div>
        </>
      ),
    },
  ];

  const rows = [
    { id: 1, AppLink: "Snow", AppName: "Jon", Status: 35, User: "asd" },
    { id: 2, AppLink: "Lannister", AppName: "Cersei", Status: 42, User: "asd" },
    { id: 3, AppLink: "Lannister", AppName: "Jaime", Status: 45, User: "asd" },
    { id: 4, AppLink: "Stark", AppName: "Arya", Status: 16, User: "asfd" },
    {
      id: 5,
      AppLink: "Targaryen",
      AppName: "Daenerys",
      Status: null,
      User: "asfd",
    },
    { id: 6, AppLink: "Melisandre", AppName: null, Status: 150, User: "asd" },
    { id: 7, AppLink: "Clifford", AppName: "Ferrara", Status: 44, User: "asd" },
    { id: 8, AppLink: "Frances", AppName: "Rossini", Status: 36, User: "asd" },
    { id: 9, AppLink: "Roxie", AppName: "Harvey", Status: 65, User: "asf" },
  ];

  const [openAppModal, setopenAppModal] = React.useState(false);
  const handlemodalOpen = () => setopenAppModal(true);
  const handleModalClose = () => setopenAppModal(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const [userId, setUserId] = React.useState("");

  const userIdhandleChange = (event) => {
    setUserId(event.target.value);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="Apps__AddApps_download__container">
        <div>APPS</div>
        <div className="AddApps__btn____Apps__Download__btn___container">
          <button className="AddApps__btn" onClick={handlemodalOpen}>
            {" "}
            <HiViewGridAdd className="Add__app_Icon" /> ADD APPS
          </button>
          <button className="Apps__Download__btn">
            {" "}
            <HiDownload className="apps__download__Icon" /> DOWNLOAD{" "}
          </button>
          <div>
            <Modal
              open={openAppModal}
              onClose={handleModalClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
            
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">

                <h3 className="mob__App_top">MOBILE APPLICATIONS</h3>
                  <div className="textFieldApp__Form">
                    <TextField
                    fullWidth
                      id="outlined-basic"
                      label="App NAme"
                      variant="outlined"
                    />
                  </div>
                  <div className="textFieldApp__Form">
                    <TextField
                    fullWidth
                      id="outlined-basic"
                      label="App Link(Google Play / iTunes)"
                      variant="outlined"
                    />
                  </div>

                  <div className="textFieldApp__Form">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">User ID</InputLabel>
                      <Select
                        fullWidth
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={userId}
                        label="User ID"
                        onChange={userIdhandleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="textFieldApp__Form">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Site Theme</InputLabel>
                      <Select
                        fullWidth
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Site Theme"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}></MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className=" textFieldApp__Form">
                    <button className="add__Apps__text_field__btn">SUBMIT</button>
                  </div>
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
      <div className="Apps__table__container">
      <Box  sx={{ height: 400, width: "95%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
      </div>
    </motion.div>
  );
};

export default Apps;
