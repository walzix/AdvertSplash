import React from "react";
import "./UserVerify.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const UserVerify = () => {
  const search = useLocation().search;
  const navigate = useNavigate();
  const confirmationCode = new URLSearchParams(search).get("code");
  const [MyText, setMyText] = React.useState("Verifying Email...");
  React.useEffect(() => {
    console.log(confirmationCode);
    if (!confirmationCode) {
      setMyText("Invalid Link");
    } else {
      // //console.log(process.env.REACT_APP_BACKEND_URL)
      axios
        .post(
          "" +
            process.env.REACT_APP_BACKEND_URL +
            "/api/users/verifyEmail:confCode",
          { confCode: confirmationCode }
        )
        .then((res) => {
          //console.log(res);
          if (res.data.error) {
            setMyText(res.data.message + "\n" + "Redirecting to login...");
          } else if (!res.data.error) {
            setMyText(res.data.message + "\n" + "Redirecting to login...");
          }
          setTimeout(() => {
            navigate("/");
          }, 5000);
        })
        .catch((err) => {
          setMyText("Unexpected Error Occured \n Please try again");
          console.log(err);
        });
    }
  }, []);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        backgroundColor: "white",
        color: "#44a0ed",
        fontSize: "xx-large",
        textAlign: "center",
        whiteSpace: "pre-line",
      }}
    >
      {MyText}
    </div>
  );
};

export default UserVerify;
