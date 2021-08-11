import React from 'react';
import './Community.css';


class Community extends React.Component {
    render() {
        return (
            <div className="community">
                <div className="container">
                    <h3 className="block_title">Join the Community</h3>
                    <div className="community_main animate__animated animate__fadeInUp wow" data-wow-duration="1s" data-wow-delay="1s">
                        <a>
                            <span>
                                Telegram
                                <img src="img/community/1.png" />
                                <img src="img/community/11.png" />
                            </span>
                        </a>
                        <a>
                            <span>
                                Twitter
                                <img src="img/community/2.png" />
                                <img src="img/community/22.png" />
                            </span>
                        </a>
                        <a>
                            <span>
                                Medium
                                <img src="img/community/3.png" />
                                <img src="img/community/33.png" />
                            </span>
                        </a>
                    </div>
                    <a className="white_btn"><span>CONTACT US</span></a>
                </div >
            </div >
        )
    }
}

export default Community;
