import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminLogin from "./Pages/Admin/AdminLogin/AdminLogin";
import UserLogin from "./Pages/User/User Login/UserLogin";
import UserSignUp from "./Pages/User/User Sign Up/UserSignUp";
import User from "../src/Pages/User/User";
import Admin from "./Pages/Admin/Admin";
import ErrorPage from "./Pages/ErrorPage";
import axios from "axios";
axios.defaults.withCredentials = true;

const App = (setRefresh, refresh) => {
  const [loading, setLoading] = React.useState(false);
  const [userData, setUserData] = React.useState("admin");
  function AdminWhole() {
    const [refresh, setRefresh] = React.useState(true);
    const [checkAdminSession, setCheckAdminSession] = React.useState(false);
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/admin/checkAdminSession")
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          setCheckAdminSession(true);
        } else {
          setCheckAdminSession(false);
        }
      })
      .catch((err) => {
        // console.log(err);
      });
    return (
      <div className="App">
        {checkAdminSession ? (
          <>
            <Admin
              setRefresh={(item) => {
                setRefresh(item);
              }}
              setCheckAdminSession={(item) => {
                setCheckAdminSession(item);
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
        )}
      </div>
    );
  }
  function UserWhole() {
    const [refresh, setRefresh] = React.useState(true);
    const [checkUserSession, setCheckUserSession] = React.useState(false);
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/users/checkUserSession")
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          setCheckUserSession(true);
        } else {
          setCheckUserSession(false);
        }
      })
      .catch((err) => {
        // console.log(err);
      });
    return (
      <div className="App">
        {/* {true ? ( */}
        {checkUserSession ? (
          <>
            <User
              setRefresh={(item) => {
                setRefresh(item);
              }}
              setCheckUserSession={(item) => {
                setCheckUserSession(item);
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
        )}
      </div>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Admin Routes */}
          <Route
            path="/AdminLogin"
            element={AdminWhole()}
            setRefresh={setRefresh}
            refresh={refresh}
          />
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
          <Route
            path="/User"
            element={UserWhole()}
            setRefresh={setRefresh}
            refresh={refresh}
          />
          <Route path="/UserSignup" element={<UserSignUp />} />
          <Route path="/UserLogin" element={UserWhole()} />
          <Route path="/User/Users" element={UserWhole()} />
          <Route path="/User/Sites" element={UserWhole()} />
          <Route path="/User/Apps" element={UserWhole()} />
          {/* Error page  */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
