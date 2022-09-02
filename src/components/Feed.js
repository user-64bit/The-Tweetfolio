import React from "react";
import Avatar from './Images/profile.jpg';
import "./Feed.css";

import Post from "./Post";

function Feed({ids}) {
  return (
  <>
      <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>

        <Post
        key='1'
        displayName="Arth 🇮🇳 "
        username='aparth11'
        verified='true'
        text='Hello Everyone'
        avatar={Avatar} />
      </div>
    </>
  );
}

export default Feed;