import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import { useWeb3React } from '@web3-react/core';
import { isAuth } from '../../utils/auth';
import { updateTheme } from '../../store/app/appSlice';
import './Header.css';
import Item from '../Icons/Item';
import Edit from '../Icons/Edit';
import SearchIcon from '../Icons/SearchIcon';
import StarHeader from '../Icons/StarHeader';
import Sun from '../Icons/Sun';
import Moon from '../Icons/Moon';
import { withRouter } from 'react-router';

const Header = (props) => {
  const {
    toggleSoonPopup,
    toggleNftCollapse,
    showNftCollapse,
    showWalletCollapse,
    toggleWalletCollapse
  } = props;
  const { chainId, account, activate, deactivate } = useWeb3React();
  const theme = useSelector((state) => state.app.darkTheme);
  const user = useSelector((state) => state.app.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(isAuth());
  const [mobileSearch, setMobileSearch] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    setIsLogin(user?.token ? true : false);
  }, [user]);
  const toggleTheme = () => {
    dispatch(updateTheme());
  };

  const toggleMobileSearch = () => {
    setMobileSearch(!mobileSearch);
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      <header
        style={
          props.location.pathname === '/hub/treasureland'
            ? { position: 'relative' }
            : null
        }
      >
        <div className="container">
          <div className="header_main" ref={wrapperRef}>
            <div className="header_logo">
              <a href="/">
                <img src="../../../img/logo.png" alt="logo" />
              </a>
            </div>
            <div className="header_left_menu">
              <div>
                <button onClick={toggleNftCollapse}>
                  MeDIA eYe Marketplace ▾
                </button>
                <div
                  className={
                    showNftCollapse ? 'nft_collapse active' : 'nft_collapse'
                  }
                >
                  <Collapse isOpened={showNftCollapse}>
                    <Link to="/nft-marketplace">NFT Marketplace </Link>
                    {/* <button onClick={toggleSoonPopup}>NFT Marketplace</button> */}
                    <Link to="/events-gallery">Events Gallery </Link>
                    {/* <button onClick={toggleSoonPopup}>Gallery</button> */}
                  </Collapse>
                </div>
              </div>
              <NavLink to="/about">About</NavLink>
              <a
                href="https://mediaeyenft.com/blog/"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </div>
            <div
              className={
                mobileSearch ? 'header_search active' : 'header_search'
              }
            >
              <input type="search" />
              <button>
                <SearchIcon />
              </button>
            </div>
            <div className="mobile_search" onClick={toggleMobileSearch}>
              <img
                alt="mobile_icon"
                src={
                  theme
                    ? '../../../img/mobile_search.png'
                    : '../../../img/mobile_search_dark.png'
                }
              />
            </div>
            <div className="toggle_theme toggle_theme_mobile">
              <div onClick={toggleTheme}>{theme ? <Sun /> : <Moon />}</div>
            </div>
            <div className="header_right_menu">
              {/* <div className="toggle-button-cover">
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
              </div> */}

              {/* {isLogin  ? ( */}
              {true ? (
                // !account ? null : (
                false ? null : (
                  // <button
                  //   className="ntf_header"
                  //   onClick={() => history.push('/connect-wallet')}
                  // >
                  //   Connect Wallet
                  // </button>
                  <React.Fragment>
                    <button
                      className="ntf_header"
                      onClick={() => history.push('/create')}
                    >
                      Create NFT
                    </button>
                    <div className="user_header_menu">
                      <div className="network">
                        Network &nbsp;
                        <span>
                          ETH <i>&#9660;</i>
                        </span>
                      </div>
                      <div
                        onClick={() => history.push('/favorites')}
                        className="header_selected_link"
                      >
                        <StarHeader />
                        <span>1123</span>
                      </div>

                      <div className="header_avatar">
                        <div
                          className="header_avatar_wrapper"
                          onClick={toggleWalletCollapse}
                        >
                          <img src="../../../img/avatar.png" alt="avatar" />
                        </div>
                        <div
                          className={
                            showWalletCollapse
                              ? 'wallet_collapse active'
                              : 'wallet_collapse'
                          }
                        >
                          <Collapse isOpened={showWalletCollapse}>
                            <div className="wallet_collapse_main">
                              <h5>{account && account}</h5>
                              <div className="wallet_row">
                                <img
                                  src="../../../img/token_1.png"
                                  alt="token"
                                />
                                <div>
                                  <h6>eYe Balance</h6>
                                  <span>0 eYe</span>
                                </div>
                                <button className="buy_eye">Buy eYe</button>
                              </div>
                              <div className="wallet_row">
                                <img
                                  src="../../../img/token_2.png"
                                  alt="token"
                                />
                                <div>
                                  <h6>Balance</h6>
                                  <span>0.037 ETH $119</span>
                                </div>
                              </div>
                              <div className="wallet_row">
                                <img
                                  src="../../../img/token_3.png"
                                  alt="token"
                                />
                                <div>
                                  <h6>Bidding Balance</h6>
                                  <span>0 wETH</span>
                                </div>
                              </div>
                              <div className="wallet_footer">
                                <a className="" href="/account/minted">
                                  <Item />
                                  &ensp;My Profile
                                </a>
                                <a className="" href="/profile">
                                  <Edit />
                                  &ensp;Edit profile
                                </a>
                              </div>
                            </div>
                          </Collapse>
                        </div>
                      </div>
                      <div className="toggle_theme">
                        <div onClick={toggleTheme}>
                          {theme ? <Sun /> : <Moon />}
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )
              ) : (
                <React.Fragment>
                  <button
                    className="ntf_header connect_wallet_btn"
                    onClick={() => history.push('/connect-wallet')}
                  >
                    Connect Wallet
                  </button>
                  <div className="auth">
                    <Link to="/login" className="login">
                      <span>Log in</span>
                    </Link>
                    <Link to="/signup" className="signup">
                      <span>Sign Up</span>
                    </Link>
                  </div>

                  <div className="toggle_theme">
                    <div onClick={toggleTheme}>
                      {theme ? <Sun /> : <Moon />}
                    </div>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className={isOpen ? 'open' : null}>
        <Menu
          onOpen={handleIsOpen}
          onClose={handleIsOpen}
          isOpen={isOpen}
          width={'100%'}
          outerContainerId={'root'}
        >
          <a className="menu-item" href="nft-marketplace">
            NFT Marketplace
          </a>
          <a href="/events-gallery" className="menu-item">
            Events Gallery
          </a>
          <a className="menu-item" href="/creators">
            Creators
          </a>
          <button className="menu-item" onClick={toggleNftCollapse}>
            Investors ▾
          </button>
          <div className="mobile_investors_collapse">
            <Collapse isOpened={showNftCollapse}>
              <a
                href="https://mediaeyenft.com/pitchdeck/"
                target="_blank"
                rel="noreferrer"
              >
                Pitchdeck
              </a>
              <a
                href="https://mediaeyenft.com/pitchdeck/whitelist"
                target="_blank"
                rel="noreferrer"
              >
                Fundraising
              </a>
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
            target="_blank"
            rel="noreferrer"
          >
            About
          </a>
          <a href="/#team" onClick={closeMenu}>
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
              <a
                href="https://medium.com/@MeDIAeYeNFT"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="soc_icon"
                  src={
                    theme
                      ? '../../../img/footer_soc/1.png'
                      : '../../../img/footer_soc/1-dark.png'
                  }
                />
              </a>
              <a
                href="https://t.me/MeDIAeYeNFTofficial"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="soc_icon"
                  src={
                    theme
                      ? '../../../img/footer_soc/2.png'
                      : '../../../img/footer_soc/2-dark.png'
                  }
                />
              </a>
              <a
                href="https://twitter.com/MeDIAeYeNFT"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="soc_icon"
                  src={
                    theme
                      ? '../../../img/footer_soc/3.png'
                      : '../../../img/footer_soc/3-dark.png'
                  }
                />
              </a>
              <a
                href="https://vm.tiktok.com/ZMdPtx5uV/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="soc_icon"
                  src={
                    theme
                      ? '../../../img/footer_soc/4.png'
                      : '../../../img/footer_soc/4-dark.png'
                  }
                />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <img
                  alt="soc_icon"
                  src={
                    theme
                      ? '../../../img/footer_soc/5.png'
                      : '../../../img/footer_soc/5-dark.png'
                  }
                />
              </a>
              <a
                href="https://www.instagram.com/mediaeyenfts/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="soc_icon"
                  src={
                    theme
                      ? '../../../img/footer_soc/6.png'
                      : '../../../img/footer_soc/6-dark.png'
                  }
                />
              </a>
            </div>
          </div>
          <div className="menu-item">
            <div>
              {isLogin ? (
                <button
                  className="ntf_header"
                  onClick={() => history.push('/create')}
                >
                  Create NFT
                </button>
              ) : (
                <button
                  className="connect_wallet_btn"
                  onClick={() => history.push('/connect-wallet')}
                >
                  Connect Wallet
                </button>
              )}
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

export default withRouter(Header);
