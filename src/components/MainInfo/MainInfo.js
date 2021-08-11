import React from 'react';
import './MainInfo.css';
import WOW from 'wowjs';

class MainInfo extends React.Component {

    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }
    render() {
        return (
            <div className="main_info">
                <div className="container">
                    <div className="main_info_main">
                        <div className="main_info_left">
                            <img src="img/info.png" />
                        </div>
                        <div className="main_info_right">
                            <img className="animate__animated animate__fadeInLeft wow" data-wow-duration="1.5s" data-wow-delay="1s" src="img/color_logo.png" />
                            <p className="animate__animated animate__fadeInLeft wow" data-wow-duration="1.5s" data-wow-delay="1s">MeDIA eYe NFT Portal puts the power of blockchain to work for your next marketing campaign, promotion, rewards program or creating a collectible..  Sign Up with Googe or Facebook</p>
                            <a className="white_btn animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1s"><span>Start Campaign</span></a>
                        </div>
                    </div>
                    <div className="main_info_footer">
                        <div className="main_info_footer_block animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1s">
                            <div>
                                <div></div>
                                <img src="img/main_info/1.png" />
                            </div>
                            <h6>Content Marketplace</h6>
                        </div>
                        <div className="main_info_footer_block animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1.5s">
                            <div>
                                <div></div>
                                <img src="img/main_info/2.png" />
                            </div>
                            <h6>NFT Creator</h6>
                        </div>
                        <div className="main_info_footer_block animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="2s">
                            <div>
                                <div></div>
                                <img src="img/main_info/3.png" />
                            </div>
                            <h6>Campaign Launch</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainInfo;
