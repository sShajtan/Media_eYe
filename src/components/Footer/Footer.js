import React from "react";
import { Link } from "react-scroll";
import Peachdeck from "../../assets/Peachdeck.pptx";
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
              <img className="footer_logo" src="img/logo.png" />
            </a>
            <div className="footer_menu">
              <ul>
                <li>
                  <a onClick={toggleSoonPopup}>NTF Marketplace</a>
                </li>
                <li>
                  <a onClick={toggleSoonPopup}>Content Marketplace</a>
                </li>
                <li>
                  <a onClick={toggleSoonPopup}>Gallery</a>
                </li>
                <li>
                  <a>Creators</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="https://mediaeyenft.com/pitchdesk/" target="_blank">
                    Pitchdeck
                  </a>
                </li>
                <li>
                  <a href="https://mediaeyenft.com/pitchdesk/fundraising/" target="_blank">
                    Fundraising
                  </a>
                </li>
                <li>
                  <a href="https://docs.mediaeyenft.com/" target="_blank">
                    Litepaper
                  </a>
                </li>
                {/* <li><a href="https://quaidao.io/" target="_blank">Governance</a></li> */}
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
                  <a href="https://mediaeyenft.com/blog/">Blog</a>
                </li>
                <li>
                  <a href="mailto:support@mediaeyenft.com">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_right">
            <a href="https://medium.com/@MeDIAeYeNFT" target="_blank">
              <MediumIcon />
            </a>
            <a href="https://t.me/MeDIAeYeNFTofficial " target="_blank">
              <TelegramIcon />
            </a>
            <a href="https://twitter.com/MeDIAeYeNFT" target="_blank">
              <TwitterIcon />
            </a>
            <a href="https://vm.tiktok.com/ZMdPtx5uV/" target="_blank">
              <TiktokIcon />
            </a>
            <a>
              <GithubIcon />
            </a>
            <a href="https://www.instagram.com/mediaeyenfts/" target="_blank">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
