import React from 'react';
import './MainInfo.css';
import WOW from 'wowjs';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class MainInfo extends React.Component {

    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }
    render() {
        return (
            <div className="main_info" id="about">
                <div className="container">
                    <img className="title animate__animated animate__fadeInRight wow" data-wow-duration="1.5s" data-wow-delay="0.5s" src="img/nft_title.svg" />
                    <div className="main_info_main">
                        <div className="main_info_left">
                            <img className="animate__animated animate__zoomIn wow" data-wow-duration="1.5s" data-wow-delay="0.5s" src="img/nft_img.png" />
                            <img className="title" src="img/nft_title.svg" />
                        </div>
                        <div className="main_info_right">
                            <p>Non Fungible Tokens (NFTs) have many use cases, an NFT is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable.
                                <br />
                                <div>
                                    <ul>
                                        NFTs can be used to:

                                        <li><span>remove intermediaries</span></li>
                                        <li><span>hold record of ownership</span></li>
                                        <li><span>provide immutable provenance</span></li>
                                        <li><span>connect artists with audiences</span></li>
                                        <li><span>promote brands</span></li>
                                        <li><span>create new markets</span></li>
                                        <li><span>drive growth of the Metaverse</span></li>
                                    </ul>

                                    <img className="animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="0.5s" src="img/nft_img_2.png" />
                                </div>
                            </p>
                            <Link to="faq" spy={true} smooth={true} duration={500} className="check_faq_button"><span>Сheck out our FAQ</span></Link>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainInfo;
