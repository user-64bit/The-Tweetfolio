import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from "@material-ui/icons/Home";
import CallIcon from '@material-ui/icons/Call';
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar">
      <CodeIcon className="sidebar__twitterIcon" />
      <Link to='home'>
        <div className="sidebarBtn">
          <SidebarOption Icon={HomeIcon} text="Home" />
        </div>
      </Link>
      <Link to='profile'>
        <div className="sidebarBtn">
          <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        </div>
      </Link>
      <Link to='posts'>
        <div className="sidebarBtn">
          <SidebarOption Icon={ListAltIcon} text="Posts" />
        </div>
      </Link>
      <Link to='connects'>
        <div className="sidebarBtn">
          <SidebarOption Icon={CallIcon} text="Connects" />
        </div>
      </Link>
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;