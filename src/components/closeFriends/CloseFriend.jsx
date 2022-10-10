import React from "react";
import "./closefriend.css";

const CloseFriend = ({ user }) => {
  return (
    <li className="sideBarFriend">
      <img className="sideBarFriendImg" src={user.profilePicture} alt="" />
      <span className="sideBarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
