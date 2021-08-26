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
                                <img className="footer_logo" src={this.props.theme ? "img/footer_logo_dark.png" : "img/logo.png"} />
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
                                    <li><a href="https://mediaeyenft.com/blog/">Blog</a></li>
                                </ul>
                                <ul>
                                    <li><a>For Investors:</a></li>
                                    <li><a>Litepaper</a></li>
                                    <li><a>Peachdeck</a></li>
                                    <li><a>Governance</a></li>

                                </ul>
                                <ul>
                                    <li><a>About Us</a></li>
                                    <li><a>Team</a></li>
                                    <li><a>Terms Of Service</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer_right">

                            <a href="https://medium.com/@MeDIAeYeNFT" target="_blank"><img src={this.props.theme ? "img/footer_soc/1.png" : "img/footer_soc/1-dark.png"} /></a >
                            <a href="https://t.me/MeDiaeYeNFT" target="_blank"><img src={this.props.theme ? "img/footer_soc/2.png" : "img/footer_soc/2-dark.png"} /></a >
                            <a href="https://twitter.com/MeDIAeYeNFT" target="_blank"><img src={this.props.theme ? "img/footer_soc/3.png" : "img/footer_soc/3-dark.png"} /></a >
                            <a href="https://vm.tiktok.com/ZMdPtx5uV/" target="_blank"><img src={this.props.theme ? "img/footer_soc/4.png" : "img/footer_soc/4-dark.png"} /></a >
                            <a ><img src={this.props.theme ? "img/footer_soc/5.png" : "img/footer_soc/5-dark.png"} /></a >
                            <a href="https://www.instagram.com/mediaeyenfts/" target="_blank"><img src={this.props.theme ? "img/footer_soc/6.png" : "img/footer_soc/6-dark.png"} /></a >
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
