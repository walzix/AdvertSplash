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
import Box from "@mui/material/Box";
import axios from "axios";
import Modal from "@mui/material/Modal";
import LoadingButton from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";
axios.defaults.withCredentials = true;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const UserLogin = ({ setRefresh, refresh }) => {
  const secure = window.location.protocol === "https";
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [forgotPass, setForgotPass] = useState("");
  const [loadingBtnForPass, setLoadingBtnForPass] = useState(false);
  const [open, setOpen] = React.useState(false);
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
            // toast.success(res.data.message);
            setRefresh(!refresh);
            setLoadingBtn(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoadingBtn(false);
        });
    }
  };
  const handleForgotEmailSubmit = (e) => {
    e.preventDefault();

    if (forgotPass === "") {
      toast.warn("Please Enter Your Email");
    } else {
      let body = {
        email: forgotPass,
      };
      setLoadingBtnForPass(true);
      axios
        .post(
          process.env.REACT_APP_BACKEND_URL +
            "/api/users/requestForgotPassword",
          body
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            toast.success(res.data.message);
            // setRefresh(!refresh);
            setLoadingBtnForPass(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoadingBtnForPass(false);
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
        <div className="User__right__form__container__textfield">
          <TextField
            onChange={handleChange}
            value={userData.username}
            name="email"
            id="email"
            fullWidth
            label="@Email"
            variant="outlined"
            required
          />
        </div>
        <div className="User__right__form__container__textfield">
          <FormControl fullWidth variant="outlined">
            <InputLabel fullWidth htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              onChange={handleChange}
              value={userData.password}
              autoComplete="false"
              required
              name="password"
              id="password"
              fullWidth
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
        <div className="User__right__form__container__textfield">
          <LoadingButton
            fullWidth
            loading={loadingBtn}
            variant="contained"
            type="submit"
          >
            Login
          </LoadingButton>
        </div>
        <NavLink to="/UserSignUp">
          <span>Sign up</span>
        </NavLink>
        <div className="UserLogin__forgotPas" onClick={() => setOpen(true)}>
          Forgot Your Password?
        </div>
      </form>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="UserLogin__modal">
          <form onSubmit={handleForgotEmailSubmit}>
            <div className="UserLogin__modal__heading">Enter Email</div>
            <div className="UserLogin__modal__textfield">
              <TextField
                onChange={(e) => setForgotPass(e.target.value)}
                value={forgotPass}
                name="email"
                id="email"
                fullWidth
                label="@Email"
                variant="outlined"
                required
              />
            </div>
            <div className="UserLogin__modal__btn_container">
              <Button
                variant="contained"
                color="error"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>

              <LoadingButton
                loading={loadingBtnForPass}
                variant="contained"
                type="submit"
              >
                Submit
              </LoadingButton>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default UserLogin;
