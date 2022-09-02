import React, {useState} from 'react'
import BannerImage from './Images/Code.png';
import './Profile.css';
import ModalImage from "react-modal-image";
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TimeLine from './TimeLine';
import avatar from './Images/twitter.jpg';
import Post from './Post';
import Iframely from './Iframely';
import MySkills from './MySkills';





const Profile = () => {
  const displayName = 'Arth 🇮🇳'
  const userName = 'aparth11'

  return (
    <>

    <div className="main_container">
        <div className="my-profile" key='1'>
          <div className="name_tag">
            <h2>
              Arth 🇮🇳
            </h2>
          </div>
          <div className="banner_image">
            <ModalImage small={BannerImage} large={BannerImage}/>
          </div>
          <div className="profile_image">
            <ModalImage small={avatar} large={avatar}/>
          </div>

          <div className="descryption">
            <div className="userName">
                <h2>aparth11</h2>
                <h4><a href='https://twitter.com/aparth11' target={"_blank"} rel='noreferrer'>aparth11</a></h4>
            </div>
            <div className="bio">
              <p>@Code 👨‍💻 @Anime 😌 @Gym 💪 @Sarcasm 😼 @Night owl🦉 @gamer 🎲</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima dolores ea nisi voluptate, iste soluta architecto ipsam saepe odio sint obcaecati omnis facilis eius blanditiis temporibus quisquam repudiandae animi repellat reprehenderit eos unde adipisci earum! Sunt facilis similique dolore?</p>
            </div>
            <div className="connections">
              <a href='https://twitter.com/aparth11' rel="noreferrer" target={'_blank'}><TwitterIcon className='connections-icon twitter'/></a>
              <a href='https://github.com/arth2002' rel="noreferrer"  target={'_blank'}><GitHubIcon className='connections-icon github'/></a>
              <a href='https://www.linkedin.com/in/arth-prajapati-835325214/' rel="noreferrer" target={'_blank'}><LinkedInIcon className='connections-icon linkedin'/></a>
              <a href='https://instagram.com/ap_arth_1' rel="noreferrer" target={'_blank'}><InstagramIcon className='connections-icon instagram'/></a>
            </div>
          </div>

          <div className="my_journey">
            <div className="education">
              <Post 
                // key={data.id}
                displayName={displayName}
                username={userName}
                verified="true"
                text={<MySkills/>}
                avatar={avatar}
                
              ></Post>
              <Post 
                // key={data.id}
                displayName={displayName}
                username={userName}
                verified="true"
                text={<TimeLine/>}
                avatar={avatar}
                
              ></Post>
              <Post 
                displayName={displayName}
                username={userName}
                verified="true"
                text={<Iframely url='https://github.com/open-sauced/open-sauced/pull/1453' size='' />}
                avatar={avatar}
                
              ></Post>
              <Post 
                 displayName={displayName}
                username={userName}
                verified="true"
                text={<Iframely url='https://github.com/codinasion/codinasion-programme/pull/654' size='' />}
                avatar={avatar}
                
              ></Post>
            </div>
          </div>



        </div>
    </div>

    </>
  )
}

export default Profile;