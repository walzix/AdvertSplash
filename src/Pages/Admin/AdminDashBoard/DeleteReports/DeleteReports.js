import React, { useState } from "react";
import { motion } from "framer-motion";
import "../DeleteReports/DeleteReports.css";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
const DeleteReports = () => {
  const [valueDate, setValueDate] = useState([new Date(), new Date()]);
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
    <div className="delete__Dashbord__UploadReports__">
      Dashbord / <span className="delete__Dashbord__UploadReports__span"> Delete Reports </span>
    </div>
      <div className="delete__form__main__container">
        <div className="delete__form__container">
        <div className="delete__report__top__">
      <h3 className="delete__report__top">Delete Report</h3>
        </div>
          <div className="date__date__range">
            <div>Date</div>
            <div>
              <DateRangePicker
                onChange={setValueDate}
                value={valueDate}
                className="DateRangePicker__delete__report"
              />
            </div>
          </div>
          <button className="delete__report">Submit</button>
        </div>
      </div>
    </motion.div>
  );
};

export default DeleteReports;
