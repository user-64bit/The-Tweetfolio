import React from "react";
import COVER_IMAGE from "../../assets/cover.jpg";
import PROFILE_IMAGE from "../../assets/profile.jpg";
import UserInfo from "./UserInfo";
import TwitterCoverModal from "./TwitterCoverModal";
import TwitterProfileModal from "./TwitterProfileModal";
const Profile = () => {
  return (
    <div className="border-[#2b3c47] border-l border-r">
      <div>
        <TwitterCoverModal image={COVER_IMAGE} />
      </div>
      <div>
        <TwitterProfileModal image={PROFILE_IMAGE} />
      </div>
      <div className="ps-2">
        <UserInfo />
      </div>
    </div>
  );
};

export default Profile;
