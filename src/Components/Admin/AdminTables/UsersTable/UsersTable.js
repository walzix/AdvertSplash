import React, { useState } from "react";
import "./UsersTable.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Menu from "@mui/material/Menu";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import MenuItem from "@mui/material/MenuItem";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import axios from "axios";
axios.defaults.withCredentials = true;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UsersTable = ({
  handleOpen,
  usersData,
  refresh,
  setRefresh,
  setLoading,
}) => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const handleApi = (api) => {
    setLoading(true);
    axios
      .post(process.env.REACT_APP_BACKEND_URL + `/api/users/${api}`, email)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          toast.success(res.data.message);
          setLoading(false);
          setRefresh(!refresh);
          setEmail("");
        }
      })
      .catch((err) => {
        console.log();
        setLoading(false);
      });
  };
  console.log(email);
  const rows = usersData?.map((cur) => {
    return {
      id: cur._id,
      Email: cur.email,
      firstName: cur.fullname,
      TotalSitesApps: "1",
      Status: cur.userStatus,
      Action: "",
    };
  });

  const columns = [
    {
      field: "firstName",
      headerName: "First name",
      flex: 1,
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "TotalSitesApps",
      headerName: "Total Sites / Apps",
      flex: 1,
    },
    {
      flex: 1,
      field: "Status",
      headerName: "Status",
      renderCell: (user) => (
        <>
          {user.row.Status === "Registered" || user.row.Status === "Active" ? (
            <div className="Active">{user.row.Status}</div>
          ) : (
            <div className="not_active">Not Active</div>
          )}
        </>
      ),
    },
    {
      flex: 1,
      field: "Action",
      headerName: "Action",
      editable: false,
      renderCell: (user) => (
        <div className="UserTable__btn__container">
          {user.row.Status === "Active" ? (
            <Button
              size="small"
              variant="contained"
              onClick={() => {
                handleApi("suspendUser");
                setEmail(user.row.Email);
              }}
            >
              Suspend
            </Button>
          ) : user.row.Status === "Suspended" ? (
            <Button
              size="small"
              variant="contained"
              onClick={() => {
                handleApi("restoreUser");
                setEmail(user.row.Email);
              }}
            >
              Active
            </Button>
            ): user.row.Status === "Registered" ?( 
              <Button
              size="small"
              variant="contained"
              onClick={() => {
                handleApi("approveUser");
                setEmail(user.row.Email);
              }}
            >
              Approve
            </Button> 
          ) : null}
          <Button
            color="error"
            size="small"
            variant="contained"
            onClick={() => {
              setOpen(true);
              setEmail(user.row.Email);
            }}
          >
            Delete
          </Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"User delete permanently?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button
                color="error"
                onClick={() => handleApi("deleteUser_admin")}
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      ),
    },
  ];

  return (
    <>
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
      <div className="users__table__container">
        <div className="Users_Head_btn">
          <div>USERS</div>
          <div className="Add_download_btns">
            <button className="Add_sites_btn" onClick={handleOpen}>
              {" "}
              <AiOutlineUserAdd className="Add_icon" /> ADD USERS{" "}
            </button>
          </div>
        </div>

        {usersData ? (
          <div className="table__contine">
            <Box sx={{ height: 400, width: "95%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
              />
            </Box>
          </div>
        ) : (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </div>
    </>
  );
};
export default UsersTable;
