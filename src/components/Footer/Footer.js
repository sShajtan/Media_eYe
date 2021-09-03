import React from "react";
import { Link } from "react-scroll";
import GithubIcon from "../Icons/GithubIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import MediumIcon from "../Icons/MediumIcon";
import TelegramIcon from "../Icons/TelegramIcon";
import TiktokIcon from "../Icons/TiktokIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import "./Footer.css";

const Footer = (props) => {
  const { toggleSoonPopup } = props;
  return (
    <footer>
      <div className="container">
        <div className="footer_main">
          <div className="footer_left">
            <a href="/">
              <img className="footer_logo" src="img/logo.png" alt="logo" />
            </a>
            <div className="footer_menu">
              <ul>
                <li>
                  <button onClick={toggleSoonPopup}>NTF Marketplace</button>
                </li>
                <li>
                  <button onClick={toggleSoonPopup}>Content Marketplace</button>
                </li>
                <li>
                  <button onClick={toggleSoonPopup}>Gallery</button>
                </li>
                <li>
                  <button>Creators</button>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://mediaeyenft.com/blog/about/what-is-the-media-eye-nft-portal/">
                    About
                  </a>
                </li>
                <li>
                  <Link to="team" spy={true} smooth={true} duration={500}>
                    Team
                  </Link>
                </li>
                <li>
                  <a href="https://mediaeyenft.com/blog/" target="_blank" rel="noreferrer">Blog</a>
                </li>
                <li>
                  <a href="mailto:support@mediaeyenft.com">Contact</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://mediaeyenft.com/pitchdeck/" target="_blank" rel="noreferrer">
                    Pitchdeck
                  </a>
                </li>
                <li>
                  <a href="https://mediaeyenft.com/pitchdeck/fundraising/" target="_blank" rel="noreferrer">
                    Fundraising
                  </a>
                </li>
                <li>
                  <a href="https://docs.mediaeyenft.com/" target="_blank" rel="noreferrer">
                    Litepaper
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_right">
            <a href="https://medium.com/@MeDIAeYeNFT" target="_blank" rel="noreferrer">
              <MediumIcon />
            </a>
            <a href="https://t.me/MeDIAeYeNFTofficial " target="_blank" rel="noreferrer">
              <TelegramIcon />
            </a>
            <a href="https://twitter.com/MeDIAeYeNFT" target="_blank" rel="noreferrer">
              <TwitterIcon />
            </a>
            <a href="https://vm.tiktok.com/ZMdPtx5uV/" target="_blank" rel="noreferrer">
              <TiktokIcon />
            </a>
            <button>
              <GithubIcon />
            </button>
            <a href="https://www.instagram.com/mediaeyenfts/" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
