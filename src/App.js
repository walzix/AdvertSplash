import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./Pages/Admin/AdminLogin/AdminLogin";
import UserLogin from "./Pages/User/User Login/UserLogin";
import UserSignUp from "./Pages/User/User Sign Up/UserSignUp";
import User from "../src/Pages/User/User";
import Admin from "./Pages/Admin/Admin";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ErrorPage from "./Pages/ErrorPage";
import axios from "axios";
axios.defaults.withCredentials = true;

const App = () => {
  const [refresh, setRefresh] = React.useState(true);
  const [userData, setUserData] = React.useState();
  const [adminLoading, setAdminLoading] = React.useState(true);
  const [userLoading, setUserLoading] = React.useState(true);
  const [adminSession, setAdminSession] = React.useState(false);
  const [userSession, setUserSession] = React.useState(false);

  const checkAdminSession = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/admin/checkAdminSession")
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          setAdminSession(true);
        } else {
          setAdminSession(false);
        }
        setAdminLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setAdminLoading(false);
      });
  };
  const checkUserSession = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/users/checkUserSession")
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          setUserSession(true);
        } else {
          setUserSession(false);
        }
        setUserLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setUserLoading(false);
      });
  };
  function AdminWhole() {
    return (
      <div className="App">
        {!adminLoading ? (
          adminSession ? (
            <>
              <Admin
                setRefresh={(item) => {
                  setRefresh(item);
                }}
                setAdminSession={(item) => {
                  setAdminSession(item);
                }}
                refresh={refresh}
              />
            </>
          ) : (
            <AdminLogin
              setRefresh={(item) => {
                setRefresh(item);
              }}
              refresh={refresh}
            />
          )
        ) : (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </div>
    );
  }

  function UserWhole() {
    return (
      <div className="App">
        {!userLoading ? (
          userSession ? (
            <>
              <User
                setRefresh={(item) => {
                  setRefresh(item);
                }}
                setUserSession={(item) => {
                  setUserSession(item);
                }}
                refresh={refresh}
              />
            </>
          ) : (
            <UserLogin
              setRefresh={(item) => {
                setRefresh(item);
              }}
              refresh={refresh}
            />
          )
        ) : (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </div>
    );
  }
  useEffect(() => {
    checkAdminSession();
    checkUserSession();
  }, [refresh]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Admin Routes */}
          <Route path="/AdminLogin" element={AdminWhole()} />
          <Route path="/Admin" element={AdminWhole()} />
          <Route path="/Admin/Dashboard" element={AdminWhole()} />
          <Route path="/Admin/Users" element={AdminWhole()} />
          <Route path="/Admin/Sites" element={AdminWhole()} />
          <Route path="/Admin/Apps" element={AdminWhole()} />
          <Route path="/Admin/Statistics" element={AdminWhole()} />
          <Route path="/Admin/UploadReports" element={AdminWhole()} />
          <Route path="/Admin/UploadReportsApp" element={AdminWhole()} />
          <Route path="/Admin/DeleteReports" element={AdminWhole()} />
          {/* User routes */}
          <Route path="/" element={UserWhole()} />
          <Route path="/UserSignup" element={<UserSignUp />} />
          <Route path="/UserLogin" element={UserWhole()} />
          <Route path="/User" element={UserWhole()} />
          <Route path="/User/UserApps" element={UserWhole()} />
          <Route path="/User/UserSites" element={UserWhole()} />
          {/* Error page  */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
