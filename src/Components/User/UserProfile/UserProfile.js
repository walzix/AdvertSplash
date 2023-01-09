import React from "react";
import "./UserProfile.css";
import UserDp from "../../../assets/images/userDP.jpg";
const UserProfile = () => {
  return (
    <div className="User__Profile">
      <div className="User__profile__Container">
        <div className="User__Dp">
          <img src={UserDp} />
        </div>
        <div className="Profile__User__Name"> women </div>
        <div className="Profile__Status"> STATUS </div>
      </div>
    </div>
  );
};

export default UserProfile;
