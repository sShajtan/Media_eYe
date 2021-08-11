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
                                <input placeholder="search" />
                                <button>
                                    <img src="img/search.svg" />
                                </button>
                            </div>
                            <div className="header_right_menu">
                                <a className="blue_btn">NFT Creator</a>
                                <button className="white_btn"><span>Log In</span></button>
                                <button className="white_btn"><span>SignUp</span></button>
                            </div>
                            <div className={this.state.mobileInputShow ? 'mobile_search header_search ' : 'mobile_search header_search hidden'}>
                                <input placeholder="search" />
                                <button onClick={this.showMobileInput}>
                                    <img src="img/search.svg" />
                                </button>
                            </div>
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
                        <div className="menu-item">
                            <div>
                                <button className="white_btn"><span>Log In</span></button>
                                <button className="white_btn"><span>SignUp</span></button>
                            </div>
                        </div>
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
