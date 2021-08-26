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
                    <img className="title animate__animated animate__fadeInRight wow" data-wow-duration="1.5s" data-wow-delay="1s" src="img/nft_title.svg" />
                    <div className="main_info_main">
                        <div className="main_info_left">
                            <img className="animate__animated animate__zoomIn wow" data-wow-duration="1.5s" data-wow-delay="1s" src="img/nft_img.png" />
                            <img className="title" src="img/nft_title.svg" />
                        </div>
                        <div className="main_info_right">
                            <p>A non-fungible token, also a unique token, is a type of cryptographic token, each instance of which is unique and cannot be exchanged or replaced with another other token, although tokens are usually fungible in nature.</p>
                            <a className="check_faq_button"><span>Сheck out our FAQ</span></a>

                            <div>
                                <img className="animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1s" src="img/nft_img_2.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainInfo;
