import React from 'react';
import './Roadmap.css';

class Roadmap extends React.Component {
    render() {
        return (
            <div className="roadmap">
                <div className="roadmap_left_bg"></div>
                <div className="roadmap_right_bg"></div>
                <div className="container">
                    <img className="title animate__animated animate__zoomIn wow" data-wow-duration="1.5s" data-wow-delay="1s" src="img/roadmap_title.svg" />
                    <div className="roadmap_main">
                        <div className="roadmap_main_block_wrapper active">
                            <span>The MeDIA eYe NFT Portal Concept is developed</span>
                            <div className="roadmap_main_block">
                                <h4>Q1/21</h4>
                                <div className="line animate__animated animate__flipInX wow" data-wow-duration="1.5s" data-wow-delay="1.5s"></div>
                            </div>
                            <span></span>
                        </div>
                        <div className="roadmap_main_block_wrapper active">
                            <span></span>
                            <div className="roadmap_main_block ">
                                <h4>Q2/21</h4>
                                <div className="line animate__animated animate__flipInX wow" data-wow-duration="1.5s" data-wow-delay="2s"></div>
                            </div>
                            <span>TDevelopment MeDIA eYe Platform and Testing
                            </span>

                        </div>
                        <div className="roadmap_main_block_wrapper">
                            <span>Presale and IDO Fundraising Platform Launch (Beta)
                            </span>
                            <div className="roadmap_main_block">
                                <h4>Q3/21</h4>
                                <div className="line animate__animated animate__flipInX wow" data-wow-duration="1.5s" data-wow-delay="2.5s"></div>
                            </div>
                            <span></span>

                        </div>
                        <div className="roadmap_main_block_wrapper">
                            <span></span>
                            <div className="roadmap_main_block">
                                <h4>Q4/21</h4>
                            </div>
                            <span>MeDIA eYe Staking Pool and Rewards Pool Launch, platform goes into full operation</span>
                        </div>
                    </div>
                    <div className="roadmap_mobile">

                        <img src={this.props.theme ? "img/roadmap_mobile_dark.svg" : "img/roadmap_mobile.svg"} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Roadmap;
