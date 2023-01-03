import React, { useState } from "react";
import "../User Sign Up/UserSignUp.css";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import {NavLink, useNavigate} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// axios.defaults.withCredentials = true
const UserSignUp = () => {
  // user registration

  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [registered, setRegistered] = useState([]);

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    setUserRegistration({ ...userRegistration, [name]: value });
  };
const Navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userRegistration.username === "") {
      toast.warn("please enter your name");
    } else if (userRegistration.email === "") {
      toast.warn("enter your email please");
    } else if (!userRegistration.email.includes("@")) {
      toast.warn("please enter valid email address");
    } else if (userRegistration.phone === "") {
      toast.warn("please enter your phone number");
    } else if (userRegistration.password === "") {
      toast.warn("please enter password");
    } else if (!userRegistration.password.length > 5) {
      toast.warn("password must be greater then 5 characters");
    } else {
      let body = {
        fullname: userRegistration.username,
        email: userRegistration.email,
        phoneNum: userRegistration.phone,
        password: userRegistration.password,
      };
      axios.post("http://localhost:7000/api/users/register", body)
      .then((res)=>{
        console.log(res);
        if ( res.status === 400) {
          toast.success(res.data.message);
        } else {
          toast.success("Signup Successful")
          Navigate("/user")
        }

      })
      .catch((err)=>{
        console.log(err);
      });
    }
  };

  // end

  // password hide State

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //  end

  return (
    <>
      <ToastContainer
        position="top-left"
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
          <form onSubmit={handleSubmit}>
      <div className="SignUp__form">
        <div className="signUp__form__container">
            <div className="user__SignUp__"> User Signup </div>
            <div>
              <TextField
                sx={{ m: 1, width: "35ch" }}
                value={userRegistration.username}
                onChange={handleChange}
                name="username"
                id="username"
                label="User Name"
                variant="outlined"
                required
              />
            </div>
            <div>
              <TextField
                sx={{ m: 1, width: "35ch" }}
                value={userRegistration.email}
                onChange={handleChange}
                name="email"
                id="email"
                label="@email"
                variant="outlined"
                required
              />
            </div>
            <div>
              <TextField
                sx={{ m: 1, width: "35ch" }}
                value={userRegistration.phone}
                onChange={handleChange}
                name="phone"
                id="phone"
                label="Phone Number"
                variant="outlined"
                required
              />
            </div>
            <div>
              <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password*
                </InputLabel>
                <OutlinedInput
                  value={userRegistration.password}
                  onChange={handleChange}
                  name="password"
                  id="pasword"
                  required
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
                  label="Password*"
                />
              </FormControl>
            </div>
            <div>
              <button className="signUp__btn" type="submit">
                Sign Up
              </button>
            </div>
            <span>Already a member?
            <NavLink to="/UserLogin">
            <span>Login</span>
            </NavLink>
            </span>
        </div>
      </div>
          </form>
    </>
  );
};

export default UserSignUp;
