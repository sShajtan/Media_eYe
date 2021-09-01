import React from "react";
import TelegramBoxIcon from "../Icons/TelegramBoxIcon";
import TwitterBoxIcon from "../Icons/TwitterBoxIcon";
import MediumBoxIcon from "../Icons/MediumBoxIcon";
import "./Community.css";

const Community = () => {
  return (
    <div className="community">
      <div className="container">
        <img alt="title"
          src="img/community_title.png"
          className="title  animate__animated animate__fadeIn wow"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        />
        <div className="community_main">
          <a href="https://t.me/MeDIAeYeNFTofficial" target="_blank" rel="noreferrer">
            <TelegramBoxIcon />
          </a>
          <a href="https://twitter.com/MeDIAeYeNFT" target="_blank" rel="noreferrer">
            <TwitterBoxIcon />
          </a>
          <a href="https://medium.com/@MeDIAeYeNFT" target="_blank" rel="noreferrer">
            <MediumBoxIcon />
          </a>
        </div>
        <div className="community_btn">
          <a className="contact_button" href="mailto:support@mediaeyenft.com">
            <span>CONTACT US</span>
          </a>
        </div>
      </div>
    </div >
  );
};

export default Community;
