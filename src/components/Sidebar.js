import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from "@material-ui/icons/Home";
// import SearchIcon from "@material-ui/icons/Search";
// import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CallIcon from '@material-ui/icons/Call';
// import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import Profile from "./Profile";
import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar">
      <CodeIcon className="sidebar__twitterIcon" />
      <Link to='/home'>
        <SidebarOption active Icon={HomeIcon} text="Home"/>
      </Link>
      <Link to='/profile'>
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      </Link>
      <Link to='posts'>
        <SidebarOption Icon={ListAltIcon} text="Posts" />
      </Link>
      <SidebarOption Icon={CallIcon} text="Let's Connect" />
      {/* <SidebarOption Icon={SearchIcon} text="Explore" /> */}
      {/* <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" /> */}
      {/* <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" /> */}
      {/* <SidebarOption Icon={MoreHorizIcon} text="More" /> */}

      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;