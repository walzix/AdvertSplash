import React, { useState, useEffect } from "react";
import "../User Login/UserLogin.css";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import LoadingButton from "@mui/lab/LoadingButton";
// axios.defaults.withCredentials = true;

const UserLogin = ({ setRefresh, refresh }) => {
  const secure = window.location.protocol === "https";
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData(() => {
      return {
        ...userData,
        [name]: value,
      };
    });
  };
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userData;

    if (email === "") {
      toast.warn("Please Enter Your Email");
    } else if (!email.includes("@")) {
      toast.warn("Please Enter Valid Email Address");
    } else if (password === "") {
      toast.warn("Please Enter Your Password");
    } else if (password.length < 5) {
      toast.warn("Password Length Must be Greater Then Five");
    } else {
      let body = {
        email: userData.email,
        password: userData.password,
      };
      setLoadingBtn(true);
      axios
        .post(process.env.REACT_APP_BACKEND_URL + "/api/users/login", body)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            toast.success(res.data.message);
            setTimeout(() => {
              setRefresh(!refresh);
              setLoadingBtn(false);
            }, 3000);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoadingBtn(false);
        });
    }
  };

  // Password hide state
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //  end
  return (
    <div className="User__login_form">
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
      <form onSubmit={handleSubmit} className="User__right__form__container">
        <div className=" User_Login">User Login</div>
        <div>
          <TextField
            onChange={handleChange}
            value={userData.username}
            name="email"
            id="email"
            sx={{ m: 1, width: "35ch" }}
            label="@Email"
            variant="outlined"
            required
          />
        </div>
        <div>
          <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              onChange={handleChange}
              value={userData.password}
              autoComplete="false"
              required
              name="password"
              id="password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <div>
          <LoadingButton loading={loadingBtn} variant="outlined" type="submit">
            Login
          </LoadingButton>
        </div>
        <NavLink to="/UserSignUp">
          <span>Sign up</span>
        </NavLink>
        <span>Forgot Your Passward?</span>
      </form>
    </div>
  );
};

export default UserLogin;
