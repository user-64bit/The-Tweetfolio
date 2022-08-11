import React from "react";
// import React, { useState, useEffect } from "react";
// import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
// import db from "./firebase";
import FlipMove from "react-flip-move";
import {
  TwitterTweetEmbed,
} from "react-twitter-embed";
function Feed({ids}) {
  


  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <div className="embed_tweets">
        {ids.map((id)=>{
          return (<TwitterTweetEmbed tweetId={id} key={id}/>);
        })}
      </div>

    </div>
  );
}

export default Feed;