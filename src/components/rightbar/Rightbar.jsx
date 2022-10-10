import React from "react";
import "./rightbar.css";
import { Users } from "../../DummyData";
import Online from "../online/Online";

const Rightbar = () => {
  return (
    <>
      <div className="rightBar">
        <div className="rightBarWrapper">
          <div className="birthdayContainer">
            <img className="birthdayImg" src="/assets/gift.png" alt=""></img>
            <span className="birthdayText">
              <b>Simran Singh</b> and <b>3 other friends</b> have a birthday
              today.
            </span>
          </div>
          <img className="rightAdd" src="/assets/ad.png" alt=""></img>
          <h4 className="rightBarTitle">Online Friends</h4>
          <ul className="rightBarFreindList">
            {Users.map((u) => (
              <Online key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
