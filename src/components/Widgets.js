import React,{useState} from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    const [userTweets, setUserTweets] = useState([]);

    const tweets = () =>{
        console.log("All tweets of user");
    }

  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        {/* <TwitterTweetEmbed tweetId={"1556600758908227585"} /> */}

        {/* <TwitterTimelineEmbed
          sourceType="profile"
          screenName="aparth11"
          options={{ height: 400 }}
        /> */}

        {/* <TwitterShareButton
          url={"https://twitter.com/aparth11"}
          options={{ text: "#reactjs is awesome", via: "aparth11" }}
        /> */}
      </div>
    </div>
  );
}

export default Widgets;
// Footer