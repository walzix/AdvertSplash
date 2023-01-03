import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Sites.css";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import MenuItem from "@mui/material/MenuItem";
import { FaSitemap } from "react-icons/fa";
import { TfiDownload } from "react-icons/tfi";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Sites = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [modalopen, setModalOpen] = React.useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClosee = () => setModalOpen(false);

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

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "User", headerName: "User", flex: 1 },
    { field: "Sites", headerName: "Site", flex: 1 },
    { field: "Themes", headerName: "Themes", flex: 1 },
    {
      field: "Status",
      headerName: "Status",
      flex: 1,

      renderCell: (Users) => (
        <>
          {Users.row.Status === true ? (
            <div className="Active">Active</div>
          ) : (
            <div className="Stopped">Stopped</div>
          )}
        </>
      ),
    },
    {
      field: "Actions",
      headerName: "Actions",

      flex: 1,
      renderCell: (Users) => (
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
              <MenuItem onClick={handleClose}>Disabled</MenuItem>
              <MenuItem onClick={handleClose}>Edit</MenuItem>
            </Menu>
          </div>
        </>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      User: "Snow",
      Sites: "www.walzix.com",
      Themes: "Jon",
      Status: true,
      Actions: "",
    },
    {
      id: 2,
      User: "Lannister",
      Sites: "www.walzix.com",
      Themes: "Cersei",
      Status: true,
    },
    {
      id: 3,
      User: "Lannister",
      Sites: "www.walzix.com",
      Themes: "Jaime",
      Status: true,
    },
    {
      id: 4,
      User: "Stark",
      Sites: "www.walzix.com",
      Themes: "Arya",
      Status: true,
    },
    {
      id: 5,
      User: "Targaryen",
      Sites: "www.walzix.com",
      Themes: "Daenerys",
      Status: null,
    },
    {
      id: 6,
      User: "Melisandre",
      Sites: "www.walzix.com",
      Themes: null,
      Status: true,
    },
    {
      id: 7,
      User: "Clifford",
      Sites: "www.walzix.com",
      Themes: "Ferrara",
      Status: true,
    },
    {
      id: 8,
      User: "Frances",
      Sites: "www.walzix.com",
      Themes: "Rossini",
      Status: true,
    },
    {
      id: 9,
      User: "Roxie",
      Sites: "www.walzix.com",
      Themes: "Harvey",
      Status: true,
    },
  ];
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <motion.div
      className="Sites_table_container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="siteHead_Add_download_btn">
        <div>SITES</div>
        <div className="Add_download_btns">
          <button className="Add_sites_btn" onClick={handleOpen}>
            <FaSitemap className="user_add_icon" /> ADD SITES
          </button>
          {/* modal start  */}
          <div>
            <Modal
              open={modalopen}
              onClose={handleClosee}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                  <div className="ADD__SITES">
                    <h3>ADD SITES</h3>
                  </div>
                  <div className="textfiled___">
                    <TextField
                      id="outlined-basic"
                      label="Site Domain"
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                  <div className="textfiled___">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                      User ID
                      </InputLabel>
                      <Select
                        fullWidth
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="User ID"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}></MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="textfiled___">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Site Theme
                      </InputLabel>
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
                <button className="add__users__text_field__btn">SUBMIT</button>
              </Box>
            </Modal>
          </div>
          {/* modal end  */}
          <button className="download_btn">
            <TfiDownload className="user_add_icon" /> DOWNLOAD
          </button>
        </div>
      </div>
      <div className="sites__table__containe">
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

export default Sites;
