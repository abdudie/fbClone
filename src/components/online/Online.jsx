import React from "react";
import "./online.css";

const Online = ({ user }) => {
  return (
    <li className="rightBarFriend">
      <div className="rightBarProfileImgContainer">
        <img
          className="rightBarProfileImg"
          src={user.profilePicture}
          alt=""
        ></img>
        <span className="rightBarOnline"></span>
      </div>
      <span className="rightBarUserName">{user.username}</span>
    </li>
  );
};

export default Online;
