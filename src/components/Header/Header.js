import React from 'react';
import './Header.css';
import { slide as Menu } from 'react-burger-menu';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Collapse } from 'react-collapse';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            mobileInputShow: false,
            mobileSearch: false,
            showNftCollapse: false
        };
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.showMobileInput = this.showMobileInput.bind(this);
        this.toggleMobileSearch = this.toggleMobileSearch.bind(this);
        this.toggleNftCollapse = this.toggleNftCollapse.bind(this);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ mobileInputShow: false })
        }
    }

    toggleMobileSearch() {
        this.setState({ mobileSearch: !this.state.mobileSearch });
    }

    toggleNftCollapse() {
        this.setState({ showNftCollapse: !this.state.showNftCollapse });
    }



    showMobileInput() {
        if (this.state.mobileInputShow === false) {
            this.setState({ mobileInputShow: true })
        } else {

        }
    }

    render() {
        return (
            <React.Fragment>

                <header>
                    <div className="container">
                        <div className="header_main" ref={this.setWrapperRef}>
                            <div className="header_logo">
                                <a href="/">
                                    <img src="img/logo.png" alt="logo" />
                                </a>
                            </div>
                            <div className="header_left_menu">
                                <div>
                                    <a onClick={this.toggleNftCollapse}>NFT Marketplace ▾</a>
                                    <div className="nft_collapse">
                                        <Collapse isOpened={this.state.showNftCollapse}>
                                            <a>Content Marketplace</a>
                                            <a>Gallery</a>
                                        </Collapse>
                                    </div>
                                </div>
                                <a href="/static/media/Peachdeck.c4889107.pdf">About</a>
                                <a href="/blog/">Blog</a>
                            </div>
                            <div className={this.state.mobileSearch ? "header_search active" : "header_search"}>
                                <input type="search" />
                                <button>
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="13.2923" cy="13.2916" r="8.45833" stroke="#555555" stroke-width="2" />
                                        <path d="M13.291 9.66675C12.815 9.66675 12.3436 9.76051 11.9038 9.94268C11.464 10.1249 11.0644 10.3919 10.7278 10.7285C10.3911 11.0651 10.1241 11.4647 9.94195 11.9045C9.75978 12.3443 9.66602 12.8157 9.66602 13.2917" stroke="#555555" stroke-width="2" stroke-linecap="round" />
                                        <path d="M24.166 24.1667L20.541 20.5417" stroke="#555555" stroke-width="2" stroke-linecap="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mobile_search" onClick={this.toggleMobileSearch}>
                                <img src={this.props.theme ? "img/mobile_search.png" : "img/mobile_search_dark.png"} />
                            </div>
                            <div className="mobile_switch" onClick={this.props.toggleTheme}>
                                <img src={this.props.theme ? "img/sun_mobile.png" : "img/sun_mobile_dark.png"} />
                            </div>

                            <div className="header_right_menu">
                                <div class="toggle-button-cover">
                                    <div class="button-cover">
                                        <div class="button b2" id="button-12">
                                            <input type="checkbox" class="checkbox" onChange={this.props.toggleTheme} />
                                            <div class="knobs">
                                                <span></span>
                                            </div>
                                            <div class="layer"></div>
                                        </div>
                                    </div>
                                </div>
                                <a className="ntf_header" onClick={this.props.toggleSoonPopup}>NFT Creator</a>
                            </div>
                        </div>
                    </div>
                </header >
                <div className={!this.state.isOpen ? "open" : null}>
                    <Menu onStateChange={() => this.setState({ isOpen: !this.state.isOpen })} width={'100%'}>
                        <a className="menu-item">NFT Marketplace</a>
                        <a className="menu-item" >Content Marketplace</a>
                        <a className="menu-item" >Gallery</a>
                        <a className="menu-item" >Artists</a>
                        <a className="menu-item" >Campaigns</a>
                        <a className="menu-item" >Contact</a>
                        <Link className="menu-item" to="about" spy={true} smooth={true} duration={500}>About Us</Link>
                        <Link className="menu-item" to="team" spy={true} smooth={true} duration={500}>Team</Link>
                        <a className="menu-item" >Terms Of Service</a>
                        <div className="menu-item">
                            <div className="soc_header_mobile">
                                <a>
                                    <a href="https://medium.com/@MeDIAeYeNFT" target="_blank"><img src={this.props.theme ? "img/footer_soc/1.png" : "img/footer_soc/1-dark.png"} /></a >
                                </a>
                                <a href="https://t.me/MeDIAeYeNFTofficial " target="_blank"><img src={this.props.theme ? "img/footer_soc/2.png" : "img/footer_soc/2-dark.png"} /></a >
                                <a href="https://twitter.com/MeDIAeYeNFT" target="_blank"><img src={this.props.theme ? "img/footer_soc/3.png" : "img/footer_soc/3-dark.png"} /></a >
                                <a href="https://vm.tiktok.com/ZMdPtx5uV/" target="_blank"><img src={this.props.theme ? "img/footer_soc/4.png" : "img/footer_soc/4-dark.png"} /></a >
                                <a ><img src={this.props.theme ? "img/footer_soc/5.png" : "img/footer_soc/5-dark.png"} /></a >
                                <a href="https://www.instagram.com/mediaeyenfts/" target="_blank"><img src={this.props.theme ? "img/footer_soc/6.png" : "img/footer_soc/6-dark.png"} /></a >
                            </div>
                        </div>
                        <div className="menu-item">
                            <div>
                                <button onClick={this.props.toggleSoonPopup}><span>NFT Creator</span></button>
                                <button className="login"><span>Login</span></button>
                            </div>
                        </div>
                    </Menu></div></React.Fragment >
        )
    }
}

export default Header;
