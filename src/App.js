import React , {useEffect} from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminLogin from "./Pages/Admin/AdminDashBoard/Admin Login/AdminLogin";
import UserLogin from "./Pages/User/UserDashboard/User Login/UserLogin";
import UserSignUp from "./Pages/User/UserDashboard/User Sign Up/UserSignUp";
import User from "../src/Pages/User/User";
import Admin from "./Pages/Admin/Admin";
import ErrorPage from "./Pages/ErrorPage";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// axios.defaults.withCredentials = true


const App = (setRefresh, refresh) => {
  function AdminWhole() {
    

    const [refresh, setRefresh] = React.useState(true);

    return (
      <div className="App">
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
      {/* Same as */}
      <ToastContainer />
        {localStorage.userType === "Admin" ? (
          <>
            <Admin
              setRefresh={(item) => {
                setRefresh(item);
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
      .get("http://localhost:7000/api/users/checkUserSession")
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          setCheckUserSession(true)
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
    // let cookies = document.cookies.getItem("API_TOKEN")
    // console.log(cookies);
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
          <Route path="/Admin/Deshboard" element={AdminWhole()} />
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
