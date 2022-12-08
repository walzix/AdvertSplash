import React, {useState} from "react";
import "../Statistics/Statistics.css"
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { motion } from "framer-motion";
import DatePicker from "react-multi-date-picker"
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
import transition from "react-element-popper/animations/transition"
const Statistics = () => {
  const today = new Date()
  const tomorrow = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)

  const [values, setValues] = useState([today, tomorrow])

  const columns = [
    {
      field: "Day",
      headerName: "Day",
     
      flex:1,
    },
    {
      field: "Views",
      headerName: "Views",
     
      flex:1,
    },
    {
      field: "Clicks",
      headerName: "Clicks",
      flex:1,
      
    },
    {
      field: "AdRequests",
      headerName: "Ad Requests",
      flex:1,
   
    },
    {
      field: "CTR",
      headerName: "CTR",
      flex:1,
    
    },
    {
      field: "CPM",
      headerName: "CPM",
      flex:1,
   
    },
    {
      field: "Revenue",
      headerName: "Revenue",
      flex:1,
      
    },
  ];

  const rows = [
    { id: 1, Views: "11", Day: "1", Clicks: 35, CTR: 1.4, AdRequests: 12 , CPM:12 , Revenue:" $100"},
    { id: 2, Views: "22", Day: "2", Clicks: 42, CTR: 1.4, AdRequests: 12 , CPM:12 ,Revenue: "$100"},
    { id: 3, Views: "33", Day: "3", Clicks: 45, CTR: 1.4, AdRequests: 12 , CPM:12 ,Revenue: "$100"},
    { id: 4, Views: "44", Day: "4", Clicks: 16, CTR: 1.4, AdRequests: 12 , CPM:12 ,Revenue: "$100"},
    { id: 5, Views: "55", Day: "5", Clicks: 55, CTR: 1.4, AdRequests: 12 , CPM:12 ,Revenue:" $100"},
    { id: 6, Views: "66", Day: "6", Clicks: 150, CTR: 1.4, AdRequests: 12 , CPM:12 ,Revenue: "$100"},
    { id: 7, Views: "77", Day: "7", Clicks: 44, CTR: 1.4, AdRequests: 12 , CPM:12 ,Revenue:" $100"},
    { id: 8, Views: "88", Day: "8", Clicks: 36, CTR: 1.4, AdRequests: 12 , CPM:12 ,Revenue:" $100"},
    { id: 9, Views: "99", Day: "9", Clicks: 65, CTR: 1.4, AdRequests: 12 , CPM:12 ,Revenue: "$100"},
  ];
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
    <div className="search__filter__date_picker__container">
    <div>
    <DatePicker className="bg-dark"
    animations={[
        transition({
          from: 35,
          transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
        }),
      ]} 
      multiple
      value={values} 
      onChange={setValues}
      style={{height:"40px",margin:"0 15px 0 0 "}}
    />
      <button className="filter__btn">Filter</button>
    </div>
    </div>
      <Box sx={{ height: 400, width: "104%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          experimentalFeatures={{ newEditingApi: true }}
          disableExtendRowFullWidth={false}
        />
      </Box>
    </motion.div>
  );
};

export default Statistics;
