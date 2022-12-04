import React from "react";
import { Route , Routes , useLocation } from 'react-router-dom' 
import Deshboard from '../../Pages/Deshboard/Deshboard'
import Users from '../../Pages/Users/Users'
import Sites from '../../Pages/Sites/Sites'
import Apps from '../../Pages/Apps/Apps'
import Statistics from '../../Pages/Statistics/Statistics'
import UploadReports from '../../Pages/UploadReports/UploadReports'
import UploadReportsApp from '../../Pages/UploadReportsApp/UploadReportsApp'
import DeleteReports from '../../Pages/DeleteReports/DeleteReports'
import {AnimatePresence} from "framer-motion"
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <>
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Deshboard />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Sites" element={<Sites />} />
        <Route path="/Apps" element={<Apps />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="/UploadReports" element={<UploadReports />} />
        <Route path="/UploadReportsApp" element={<UploadReportsApp />} />
        <Route path="/DeleteReports" element={<DeleteReports />} />
      </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
