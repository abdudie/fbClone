import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
} from "@material-ui/icons";
import { Users } from "../../DummyData";
import CloseFriend from "../closeFriends/CloseFriend";

const Sidebar = () => {
  return (
    <>
      <div className="sideBar">
        <div className="sideBarWrapper">
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <RssFeed className="sideBarIcon" />
              <span className="sideBarListItemText">Feed</span>
            </li>
            <li className="sideBarListItem">
              <HelpOutline className="sideBarIcon" />
              <span className="sideBarListItemText">Questions</span>
            </li>
            <li className="sideBarListItem">
              <WorkOutline className="sideBarIcon" />
              <span className="sideBarListItemText">Jobs</span>
            </li>
            <li className="sideBarListItem">
              <Event className="sideBarIcon" />
              <span className="sideBarListItemText">Events</span>
            </li>
            <li className="sideBarListItem">
              <School className="sideBarIcon" />
              <span className="sideBarListItemText">Courses</span>
            </li>
            <li className="sideBarListItem">
              <PlayCircleFilledOutlined className="sideBarIcon" />
              <span className="sideBarListItemText">Videos</span>
            </li>
            <li className="sideBarListItem">
              <Group className="sideBarIcon" />
              <span className="sideBarListItemText">Group</span>
            </li>
            <li className="sideBarListItem">
              <Bookmark className="sideBarIcon" />
              <span className="sideBarListItemText">Bookmark</span>
            </li>
          </ul>
          <button className="sideBarButton">Show More</button>
          <hr className="sidebarHr" />
          <ul className="sideBarFriendList">
            {Users.map((u) => (
              <CloseFriend key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
