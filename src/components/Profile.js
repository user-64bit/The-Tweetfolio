import React from 'react'
import BannerImage from './Images/Code.png';
import ProfileImage from './Images/profile.jpg';
import './Profile.css';
import ModalImage from "react-modal-image";
import ProfileBio from './ProfileBio';

const Profile = () => {
  return (
    <>
    <div className="main_container">
      <div className="header">
        <div className="name_tag">
          <h2>
          Arth 🇮🇳
          </h2>
        </div>
        <div className="banner_image">
          <ModalImage small={BannerImage} large={BannerImage}/>
        </div>
        <div className="profile_image">
          <ModalImage small={ProfileImage} large={ProfileImage}/>
        </div>

        <div className="descryption">
          <div className="userName">
              <h2>Arth 🇮🇳 </h2>
              <h4><a href="https://twitter.com/aparth11" target={"_blank"}>@aparh11</a></h4>
          </div>
          <div className="bio">
            <p>@Code 👨‍💻 @Anime 😌 @Gym 💪  @Sarcasm 😼 @Night owl🦉 @gamer 🎲  </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima dolores ea nisi voluptate, iste soluta architecto ipsam saepe odio sint obcaecati omnis facilis eius blanditiis temporibus quisquam repudiandae animi repellat reprehenderit eos unde adipisci earum! Sunt facilis similique dolore?</p>
            
          </div>
        </div>




      </div>
    </div>

    </>
  )
}

export default Profile;