import React from 'react';
import './Footer.css';


class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="footer_main">
                        <div className="footer_left">
                            <a>
                                <img src="img/footer_logo.png" />
                            </a>
                            <div className="footer_menu">
                                <ul>
                                    <li><a>Content Marketplace</a></li>
                                    <li><a>Media eYe GALLERY</a></li>
                                    <li><a>Artists</a></li>
                                    <li><a>Campaigns</a></li>
                                </ul>
                                <ul>
                                    <li><a>Tutorial</a></li>
                                    <li><a>Support</a></li>
                                    <li><a>News</a></li>
                                </ul>
                                <ul>
                                    <li><a>Whitepaper</a></li>
                                    <li><a>Contact</a></li>
                                    <li><a>About Us</a></li>
                                    <li><a>Team</a></li>
                                    <li><a>Terms Of Service</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer_right">
                            <a><img src="img/footer_soc/1.png" /></a>
                            <a><img src="img/footer_soc/2.png" /></a>
                            <a><img src="img/footer_soc/3.png" /></a>
                            <a><img src="img/footer_soc/4.png" /></a>
                            <a><img src="img/footer_soc/5.png" /></a>
                            <a><img src="img/footer_soc/6.png" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
