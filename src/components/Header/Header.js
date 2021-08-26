import React from 'react';
import './Header.css';
import { slide as Menu } from 'react-burger-menu';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            mobileInputShow: false
        };
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.showMobileInput = this.showMobileInput.bind(this);

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



    showMobileInput() {
        if (this.state.mobileInputShow === false) {
            this.setState({ mobileInputShow: true })
        } else {
            // Serach
        }
    }

    render() {
        return (
            <React.Fragment>

                <header>
                    <div className="container">
                        <div className="header_main" ref={this.setWrapperRef}>
                            <div className="header_logo">
                                <a>
                                    <img src="img/logo.png" />
                                </a>
                            </div>
                            <div className="header_left_menu">
                                <a>Content Marketplace ▾</a>
                                <a>NFT Gallery</a>
                            </div>
                            <div className="header_search">
                                <input />
                                <button>
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="13.2923" cy="13.2916" r="8.45833" stroke="#555555" stroke-width="2" />
                                        <path d="M13.291 9.66675C12.815 9.66675 12.3436 9.76051 11.9038 9.94268C11.464 10.1249 11.0644 10.3919 10.7278 10.7285C10.3911 11.0651 10.1241 11.4647 9.94195 11.9045C9.75978 12.3443 9.66602 12.8157 9.66602 13.2917" stroke="#555555" stroke-width="2" stroke-linecap="round" />
                                        <path d="M24.166 24.1667L20.541 20.5417" stroke="#555555" stroke-width="2" stroke-linecap="round" />
                                    </svg>

                                </button>
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
                                <a className="ntf_header">NFT Creator</a>
                            </div>
                            {/* <div className={this.state.mobileInputShow ? 'mobile_search header_search ' : 'mobile_search header_search hidden'}>
                                <input placeholder="search" />
                                <button onClick={this.showMobileInput}>
                                    <img src="img/search.svg" />
                                </button>
                            </div> */}
                        </div>
                    </div>
                </header >
                <div className={!this.state.isOpen ? "open" : null}>
                    <Menu onStateChange={() => this.setState({ isOpen: !this.state.isOpen })} width={'100%'}>
                        <a className="menu-item" href="/">Content</a>
                        <a className="menu-item" >Marketplace</a>
                        <a className="menu-item" >Media eYe</a>
                        <a className="menu-item" >GALLERYArtists</a>
                        <a className="menu-item" >Campaigns</a>
                        <a className="menu-item" >Tutorial</a>
                        <a className="menu-item" >Support</a>
                        <a className="menu-item" >News</a>
                        <a className="menu-item" >Whitepaper</a>
                        <a className="menu-item" >Contact</a>
                        <a className="menu-item" >About Us</a>
                        <a className="menu-item" > Team</a>
                        <a className="menu-item" >Terms Of Service</a>
                        {/* <div className="menu-item">
                            <div>
                                <button className="white_btn"><span>Log In</span></button>
                                <button className="white_btn"><span>SignUp</span></button>
                            </div>
                        </div> */}
                        <div className="menu-item">
                            <div className="soc_header_mobile">
                                <a>
                                    <img src="img/soc_mobile_header/1.png" />
                                </a>
                                <a>
                                    <img src="img/soc_mobile_header/2.png" />
                                </a>
                                <a>
                                    <img src="img/soc_mobile_header/3.png" />
                                </a>
                                <a>
                                    <img src="img/soc_mobile_header/4.png" />
                                </a>
                                <a>
                                    <img src="img/soc_mobile_header/5.png" />
                                </a>
                                <a>
                                    <img src="img/soc_mobile_header/6.png" />
                                </a>
                            </div>
                        </div>
                    </Menu></div></React.Fragment >
        )
    }
}

export default Header;
