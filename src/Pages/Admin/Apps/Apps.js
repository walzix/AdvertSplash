import React,{useEffect,useState} from "react";
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
  const [refresh, setRefresh] = useState(true)
  const [appsData, setAppsData] = useState()
  const [addApps, setAddApps] = useState({
    appName: "",
    appComID: "",
    appType: "",
    clientEmail: "",
    appNiche: ""
  })
  const [openAppModal, setopenAppModal] = React.useState(false);

  const handlemodalOpen = () => setopenAppModal(true);
  const handleModalClose = () => setopenAppModal(false);

  const [userId, setUserId] = React.useState("");

  const userIdhandleChange = (event) => {
    setUserId(event.target.value);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
useEffect(() => {
 axios
 .get(process.env.REACT_APP_BACKEND_URL+"/api/app/getAllApps")
 .then((res)=>{
  console.log(res);
  setAppsData(res.data.data)
 })
 .catch((err)=>{
  console.log();
 })
}, [refresh])

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="Apps__AddApps_download__container">
        <div className="AddApps__btn__heading__container">
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
          </div>
        </div>
        <AppsTable appsData={appsData}/>
        <Modal
          open={openAppModal}
          onClose={handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="Add__apps__modal" sx={style}>
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
              <div className=" textFieldApp__Form">
                <button className="add__Apps__text_field__btn">SUBMIT</button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </motion.div>
  );
};

export default Apps;
