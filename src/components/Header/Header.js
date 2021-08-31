import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { slide as Menu } from "react-burger-menu";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { Collapse } from "react-collapse";
import { updateTheme } from "../../store/app/appSlice";
import Peachdeck from "../../assets/Peachdeck.pptx";
import "./Header.css";

const Header = (props) => {
  const { toggleSoonPopup, toggleNftCollapse, showNftCollapse } = props;
  const theme = useSelector((state) => state.app.darkThem);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileInputShow, setMobileInputShow] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleTheme = () => {
    dispatch(updateTheme());
  };

  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setMobileInputShow(false);
    }
  };

  const toggleMobileSearch = () => {
    setMobileSearch(!mobileSearch);
  };

  const showMobileInput = () => {
    if (mobileInputShow === false) {
      setMobileInputShow(true);
    } else {
    }
  };

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
                <a onClick={toggleNftCollapse}>MeDia eYe Marketplace ▾</a>
                <div
                  className={
                    showNftCollapse ? "nft_collapse active" : "nft_collapse"
                  }
                >
                  <Collapse isOpened={showNftCollapse}>
                    <a onClick={toggleSoonPopup}>NFT Marketplace</a>
                    <a onClick={toggleSoonPopup}>Content Marketplace</a>
                    <a onClick={toggleSoonPopup}>Gallery</a>
                  </Collapse>
                </div>
              </div>
              <a href="https://mediaeyenft.com/blog/about/what-is-the-media-eye-nft-portal/">
                About
              </a>
              <a href="/blog/">Blog</a>
            </div>
            <div
              className={
                mobileSearch ? "header_search active" : "header_search"
              }
            >
              <input type="search" />
              <button>
                <svg
                  height="auto"
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
                src={
                  theme ? "img/mobile_search.png" : "img/mobile_search_dark.png"
                }
              />
            </div>
            <div className="mobile_switch" onClick={toggleTheme}>
              <img
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
              <a className="ntf_header" onClick={toggleSoonPopup}>
                Create NFT
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className={!isOpen ? "open" : null}>
        <Menu onStateChange={() => setIsOpen(!isOpen)} width={"100%"}>
          <a className="menu-item" onClick={toggleSoonPopup}>
            NFT Marketplace
          </a>
          <a className="menu-item" onClick={toggleSoonPopup}>
            Content Marketplace
          </a>
          <a className="menu-item" onClick={toggleSoonPopup}>
            Gallery
          </a>
          <a className="menu-item">Creators</a>
          <a
            className="menu-item"
            href="https://docs.mediaeyenft.com/"
            target="_blank"
          >
            Litepaper
          </a>
          <a className="menu-item" href={Peachdeck} target="_blank">
            Pitchdeck
          </a>
          <a className="menu-item" href="https://mediaeyenft.com/blog/">
            Blog
          </a>
          <a
            className="menu-item"
            href="https://mediaeyenft.com/blog/about/what-is-the-media-eye-nft-portal/"
          >
            About
          </a>
          <Link
            className="menu-item"
            to="team"
            spy={true}
            smooth={true}
            duration={500}
          >
            Team
          </Link>
          <a className="menu-item" href="mailto:mediaeye@mediaeyenft.com">
            Contact
          </a>
          <div className="menu-item">
            <div className="soc_header_mobile">
              <a href="https://medium.com/@MeDIAeYeNFT" target="_blank">
                <img
                  src={
                    theme ? "img/footer_soc/1.png" : "img/footer_soc/1-dark.png"
                  }
                />
              </a>
              <a href="https://t.me/MeDIAeYeNFTofficial " target="_blank">
                <img
                  src={
                    theme ? "img/footer_soc/2.png" : "img/footer_soc/2-dark.png"
                  }
                />
              </a>
              <a href="https://twitter.com/MeDIAeYeNFT" target="_blank">
                <img
                  src={
                    theme ? "img/footer_soc/3.png" : "img/footer_soc/3-dark.png"
                  }
                />
              </a>
              <a href="https://vm.tiktok.com/ZMdPtx5uV/" target="_blank">
                <img
                  src={
                    theme ? "img/footer_soc/4.png" : "img/footer_soc/4-dark.png"
                  }
                />
              </a>
              <a>
                <img
                  src={
                    theme ? "img/footer_soc/5.png" : "img/footer_soc/5-dark.png"
                  }
                />
              </a>
              <a href="https://www.instagram.com/mediaeyenfts/" target="_blank">
                <img
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
    </React.Fragment>
  );
};

export default Header;
