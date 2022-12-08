import React, { useState } from "react";
import "../UploadReports/UploadReports.css";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

const UploadReports = () => {
  const [valueDate, setValueDate] = useState([new Date(), new Date()]);
  
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
    <div className="Dashbord__UploadReports__">
      Dashbord / <span className="Dashbord__UploadReports__span"> Upload Reports </span>
    </div>
      <div className="UploadReports__form__main__container">
        <div className="UploadReports__form__container">
      <h3>Upload Report</h3>
          <div className="upload__file">
            <div className="file_name">File</div>
            <div>
              <input name="upload-file" type="file" />
            </div>
          </div>
          <div className="type__field">
            <div>Type</div>
            <div>
              <TextField id="outlined-basic" label="Type" variant="outlined" className="asdf" />
            </div>
          </div>
          <div className="start_date">
            <div>Date Range</div>
            <div>
              <DateRangePicker onChange={setValueDate} value={valueDate} className="DateRangePicker__" />
            </div>
          </div>
          <div>
            <button className="UploadReports__submit__btn">SUBMIT</button>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UploadReports;
