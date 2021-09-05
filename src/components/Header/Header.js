import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { slide as Menu } from "react-burger-menu";
import {
  Link,
} from "react-scroll";
import { Collapse } from "react-collapse";
import { updateTheme } from "../../store/app/appSlice";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const { toggleSoonPopup, toggleNftCollapse, showNftCollapse } = props;
  const theme = useSelector((state) => state.app.darkTheme);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(updateTheme());
  };

  const toggleMobileSearch = () => {
    setMobileSearch(!mobileSearch);
  };


  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <React.Fragment>
      <header>
        <div className="container">
          <div className="header_main" ref={wrapperRef}>
            <div className="header_logo">
              <a href="/">
                <img src="img/logo.png" alt="logo" />
              </a>
            </div>
            <div className="header_left_menu">
              <div>
                <button onClick={toggleNftCollapse}>MeDIA eYe Marketplace ▾</button>
                <div
                  className={
                    showNftCollapse ? "nft_collapse active" : "nft_collapse"
                  }
                >
                  <Collapse isOpened={showNftCollapse}>
                    <button onClick={toggleSoonPopup}>NFT Marketplace</button>
                    <button onClick={toggleSoonPopup}>Content Marketplace</button>
                    <button onClick={toggleSoonPopup}>Gallery</button>
                  </Collapse>
                </div>
              </div>
              <a href="https://mediaeyenft.com/blog/about/what-is-the-media-eye-nft-portal/" target="_blank" rel="noreferrer">
                About
              </a>
              <a href="https://mediaeyenft.com/blog/" target="_blank" rel="noreferrer">Blog</a>
            </div>
            <div
              className={
                mobileSearch ? "header_search active" : "header_search"
              }
            >
              <input type="search" />
              <button>
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="13.2923"
                    cy="13.2916"
                    r="8.45833"
                    stroke="#555555"
                    strokeWidth="2"
                  />
                  <path
                    d="M13.291 9.66675C12.815 9.66675 12.3436 9.76051 11.9038 9.94268C11.464 10.1249 11.0644 10.3919 10.7278 10.7285C10.3911 11.0651 10.1241 11.4647 9.94195 11.9045C9.75978 12.3443 9.66602 12.8157 9.66602 13.2917"
                    stroke="#555555"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M24.166 24.1667L20.541 20.5417"
                    stroke="#555555"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mobile_search" onClick={toggleMobileSearch}>
              <img
                alt="mobile_icon"
                src={
                  theme ? "img/mobile_search.png" : "img/mobile_search_dark.png"
                }
              />
            </div>
            <div className="mobile_switch" onClick={toggleTheme}>
              <img
                alt="toggle_theme_icon"
                src={theme ? "img/sun_mobile.png" : "img/sun_mobile_dark.png"}
              />
            </div>
            <div className="header_right_menu">
              <div className="toggle-button-cover">
                <div className="button-cover">
                  <div className="button b2" id="button-12">
                    <input
                      type="checkbox"
                      className="checkbox"
                      onChange={toggleTheme}
                    />
                    <div className="knobs">
                      <span></span>
                    </div>
                    <div className="layer"></div>
                  </div>
                </div>
              </div>
              <button className="ntf_header" onClick={toggleSoonPopup}>
                Create NFT
              </button>
              {/* <div className="auth">
                <NavLink  to="/login" className="login">
                  <span>Log in</span>
                </NavLink>
                <NavLink to="/signup" className="signup">
                  <span>Sign Up</span>
                </NavLink> 
              </div> */}
            </div>
          </div>
        </div>
      </header>
      <div className={isOpen ? "open" : null}>
        <Menu onOpen={handleIsOpen}
          onClose={handleIsOpen} isOpen={isOpen} width={"100%"} >
          <button className="menu-item" onClick={toggleSoonPopup}>
            NFT Marketplace
          </button>
          <button className="menu-item" onClick={toggleSoonPopup}>
            Content Marketplace
          </button>
          <button className="menu-item" onClick={toggleSoonPopup}>
            Gallery
          </button>
          <button className="menu-item">Creators</button>
          <button className="menu-item" onClick={toggleNftCollapse}>Investors ▾</button>
          <div className="mobile_investors_collapse">
            <Collapse isOpened={showNftCollapse} >
              <a href="https://mediaeyenft.com/pitchdesk/" target="_blank" rel="noreferrer">
                Pitchdeck
              </a>
              <a href="https://mediaeyenft.com/pitchdeck/whitelist/" target="_blank" rel="noreferrer">Fundraising</a>
            </Collapse>
          </div>
          <a
            className="menu-item"
            href="https://docs.mediaeyenft.com/"
            target="_blank"
            rel="noreferrer"
          >
            Litepaper
          </a>

          <a
            className="menu-item"
            href="https://mediaeyenft.com/blog/about/what-is-the-media-eye-nft-portal/"
            target="_blank" rel="noreferrer"
          >
            About
          </a>
          <a
            href="/#team"
            onClick={closeMenu}
          >
            Team
          </a>
          <a className="menu-item" href="https://mediaeyenft.com/blog/">
            Blog
          </a>
          <a className="menu-item" href="mailto:mediaeye@mediaeyenft.com">
            Contact
          </a>
          <div className="menu-item">
            <div className="soc_header_mobile">
              <a href="https://medium.com/@MeDIAeYeNFT" target="_blank" rel="noreferrer">
                <img alt="soc_icon"
                  src={
                    theme ? "img/footer_soc/1.png" : "img/footer_soc/1-dark.png"
                  }
                />
              </a>
              <a href="https://t.me/MeDIAeYeNFTofficial" target="_blank" rel="noreferrer">
                <img alt="soc_icon"
                  src={
                    theme ? "img/footer_soc/2.png" : "img/footer_soc/2-dark.png"
                  }
                />
              </a>
              <a href="https://twitter.com/MeDIAeYeNFT" target="_blank" rel="noreferrer">
                <img alt="soc_icon"
                  src={
                    theme ? "img/footer_soc/3.png" : "img/footer_soc/3-dark.png"
                  }
                />
              </a>
              <a href="https://vm.tiktok.com/ZMdPtx5uV/" target="_blank" rel="noreferrer">
                <img alt="soc_icon"
                  src={
                    theme ? "img/footer_soc/4.png" : "img/footer_soc/4-dark.png"
                  }
                />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" >
                <img alt="soc_icon"
                  src={
                    theme ? "img/footer_soc/5.png" : "img/footer_soc/5-dark.png"
                  }
                />
              </a>
              <a href="https://www.instagram.com/mediaeyenfts/" target="_blank" rel="noreferrer">
                <img alt="soc_icon"
                  src={
                    theme ? "img/footer_soc/6.png" : "img/footer_soc/6-dark.png"
                  }
                />
              </a>
            </div>
          </div>
          <div className="menu-item">
            <div>
              <button onClick={toggleSoonPopup}>
                <span>Create NFT</span>
              </button>
              <button className="login">
                <span>Login</span>
              </button>
            </div>
          </div>
        </Menu>
      </div>
    </React.Fragment >
  );
};

export default Header;
