import React, { useState } from "react";
import "../UploadReportsApp/UploadReportsApp.css"
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
const UploadReportsApp = () => {
  const [valueDate, setValueDate] = useState([new Date(), new Date()]);
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth , transition:{duration: 0.1}}}
    >
     <div className="Apps__Dashbord__UploadReports__">
      Dashbord / <span className="Apps__Dashbord__UploadReports__span"> Upload Reports App </span>
    </div>
      <div className="UploadReportsApps__form__main__container">
        <div className="UploadReportsApps__form__container">
      <h3>Upload Report App</h3>
          <div className="Apps__upload__file">
            <div className="Apps__file_name">File</div>
            <div>
              <input name="Apps__upload-file" type="file" />
            </div>
          </div>
          <div className="Apps__type__field">
            <div>Type</div>
            <div>
              <TextField id="outlined-basic" label="Type" variant="outlined" className="TextField__UploadReportsApp" />
            </div>
          </div>
          <div className="Apps__start_date">
            <div>Date Range</div>
            <div>
              <DateRangePicker onChange={setValueDate} value={valueDate} className="datepicker__App" />
            </div>
          </div>
          <div>
            <button className="Apps__UploadReports__submit__btn">SUBMIT</button>
            </div>
        </div>
      </div>
    </motion.div>
  )
}

export default UploadReportsApp