import React from "react";
import "./topbar.css";

import { Search, Person, Chat, Notifications } from "@material-ui/icons";

const Topbar = () => {
  return (
    <>
      <div className="tbContainer">
        <div className="tbLeft">
          <span className="tbLogo">facebookClone</span>
        </div>
        <div className="tbCenter">
          <div className="searchbar">
            <Search className="searchIcon" />
            <input
              placeholder="Search for friends, post or video"
              className="searchInput"
            ></input>
          </div>
        </div>
        <div className="tbRight">
          <div className="tbLinks">
            <span className="tbLinks">Homepage</span>
            <span className="tbLinks">Timeline</span>
          </div>
          <div className="tbIcons">
            <div className="tbIconItem">
              <Person />
              <span className="tbIconBadge">1</span>
            </div>
          </div>
          <div className="tbIcons">
            <div className="tbIconItem">
              <Chat />
              <span className="tbIconBadge">1</span>
            </div>
          </div>
          <div className="tbIcons">
            <div className="tbIconItem">
              <Notifications />
              <span className="tbIconBadge">1</span>
            </div>
          </div>
          <img
            src="/assets/person/person1.jpg"
            alt=""
            className="tbImage"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Topbar;
