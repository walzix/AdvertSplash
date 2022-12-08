import React, { useState } from "react";
import Table from "../../Components/Users/Table/Table";
import "../Users/Users.css";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const Users = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
   
  };
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Table handleOpen={handleOpen} />
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="user__box" sx={ style}>
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

export default Users;
