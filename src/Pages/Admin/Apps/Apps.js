import React, { useEffect, useState } from "react";
import "../Apps/Apps.css";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { HiViewGridAdd } from "react-icons/hi";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AppsTable from "../../../Components/Admin/AdminTables/AppsTable/AppsTable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const Apps = () => {
  const [refresh, setRefresh] = useState(true);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [appsData, setAppsData] = useState();
  const [addApp, setAddApp] = useState({
    appName: "",
    appComID: "",
    appType: "",
    clientEmail: "",
    appNiche: "",
  });
  const [openAppModal, setopenAppModal] = React.useState(false);
  const handleAddAppChange = (e) => {
    const { name, value } = e.target;
    setAddApp({ ...addApp, [name]: value });
  };
  const handleAddAppSubmit = (e) => {
    e.preventDefault();
    if (
      !addApp.appComID ||
      !addApp.appName ||
      !addApp.appNiche ||
      !addApp.appType ||
      !addApp.clientEmail
    ) {
      toast.warn("Please fill the data");
    } else {
      setLoadingBtn(true);
      axios
        .post(
          process.env.REACT_APP_BACKEND_URL + "/api/app/addApplication",
          addApp
        )
        .then((res) => {
          console.log(res);
          if (res.status == 201) {
            toast.success(res.data.message);
            setRefresh(!refresh);
            setLoadingBtn(false);
          }
        })
        .catch((err) => {
          console.log();
        });
    }
  };
  const handlemodalOpen = () => setopenAppModal(true);
  const handleModalClose = () => setopenAppModal(false);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/app/getAllApps")
      .then((res) => {
        console.log(res);
        setAppsData(res.data.data);
      })
      .catch((err) => {
        console.log();
      });
  }, [refresh]);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
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
      <div className="Apps__AddApps_download__container">
        <div className="AddApps__btn__heading__container">
          <div>APPS</div>
          <div className="AddApps__btn____Apps__Download__btn___container">
            <button className="AddApps__btn" onClick={handlemodalOpen}>
              
              <HiViewGridAdd className="Add__app_Icon" /> ADD APPS
            </button>
            <button className="Apps__Download__btn">
              
              <HiDownload className="apps__download__Icon" /> DOWNLOAD
            </button>
          </div>
        </div>
        <AppsTable appsData={appsData} />
        <Modal
          open={openAppModal}
          onClose={handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="Add__apps__modal" sx={style}>
            <form onSubmit={handleAddAppSubmit}>
              <h3 className="mob__App_top">MOBILE APPLICATIONS</h3>
              <div className="textFieldApp__Form">
                <TextField
                  fullWidth
                  variant="outlined"
                  id="outlined-basic"
                  value={addApp.appName}
                  name="appName"
                  label="App NAme"
                  onChange={handleAddAppChange}
                  required
                />
              </div>
              <div className="textFieldApp__Form">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  value={addApp.clientEmail}
                  name="clientEmail"
                  label="Client Email"
                  onChange={handleAddAppChange}
                  required
                />
              </div>
              <div className="textFieldApp__Form">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  value={addApp.appNiche}
                  name="appNiche"
                  label="App appNiche"
                  onChange={handleAddAppChange}
                  required
                />
              </div>
              <div className="textFieldApp__Form">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  value={addApp.appComID}
                  name="appComID"
                  label="App ComID"
                  onChange={handleAddAppChange}
                  required
                />
              </div>

              <div className="textFieldApp__Form">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={addApp.appType}
                    label="Type"
                    name="appType"
                    onChange={handleAddAppChange}
                  >
                    <MenuItem value={"Mobile"}>Mobile</MenuItem>
                    <MenuItem value={"Web"}>Web</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className=" textFieldApp__Form">
                <LoadingButton
                  type="submit"
                  loading={loadingBtn}
                  variant="outlined"
                >
                  Submit
                </LoadingButton>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    </motion.div>
  );
};

export default Apps;
