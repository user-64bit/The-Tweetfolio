import React from "react";
import Avatar from './Images/profile.jpg';
import "./Feed.css";
import Meme from "./Images/chandler.jpg"
import Post from "./Post";

function Feed() {
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
        text='This site is still under Construction :)'
        image='https://scontent.famd1-3.fna.fbcdn.net/v/t1.6435-9/184122475_315123336647833_3316907985091128742_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rjMxqk1U7r0AX-SHzRp&_nc_ht=scontent.famd1-3.fna&oh=00_AT-tbnZPw5-MyOtSq_RwYMsMlmXPCjY-6h2lOEsp4Jg_6A&oe=6342B6B9'
        avatar={Avatar} />
      </div>
    </>
  );
}

export default Feed;