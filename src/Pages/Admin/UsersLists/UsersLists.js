import React, { useState, useEffect } from "react";
import "./UsersLists.css";
import UsersTable from "../../../Components/Admin/AdminTables/UsersTable/UsersTable";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import axios from "axios";

const UsersLists = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  const [refresh, setRefresh] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [usersData, setUsersData] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getAllUsers = () => {
    setLoading(true);
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/users/getAll")
      .then((res) => {
        console.log(res);
        setUsersData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllUsers();
  }, [refresh]);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <UsersTable
        handleOpen={handleOpen}
        usersData={usersData}
        refresh={refresh}
        setRefresh={setRefresh}
        setLoading={setLoading}
      />
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="user__box" sx={style}>
            <div> Add New User </div>
            <div className="user_form_textfield_container">
              <div className="add__users__text_field">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </div>
              <div className="add__users__text_field">
                <TextField
                  id="outlined-basic"
                  label="User Name"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="add__users__text_field">
                <TextField
                  id="outlined-basic"
                  label="@Email"
                  variant="outlined"
                  fullWidth
                />
              </div>
              <div className="add__users__text_field">
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  fullWidth
                />
              </div>
              <div className="add__users__text_field">
                <TextField
                  fullWidth
                  id="outlined-number"
                  label="Number"
                  type=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="Phone Number"
                />
              </div>
              <div className="add__users__text_field">
                <TextField
                  id="outlined-number"
                  label="Percentage"
                  type="Number"
                  required
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="40"
                />
              </div>
            </div>
            <div>
              <button className="add__users__text_field__btn">SUBMIT</button>
            </div>
          </Box>
        </Modal>
      </div>
    </motion.div>
  );
};

export default UsersLists;
