import React from 'react';
import './Tokenomics.css';


class Tokenomics extends React.Component {
    render() {

        return (
            <div className="tokenomics">
                <div className="container">
                    <h3 className="block_title">MeDIA <img src="img/eye.png" /> TOKENOMICS</h3>
                    <h4>Total token supply:{" "} 1 Billion (fixed supply)</h4>
                    <h5>500M ERC20 and 500M BEP20</h5>
                    <div className="tokenomics_main">
                        <div className="tokenomics_left">
                            <div className="tokenomics_left_wrapper">
                                <img src="img/tokenomics_left.png" />
                                <img src="img/scale.png" className="scale animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1s" />
                                <div className="tokenomics_bg"></div>
                            </div>
                        </div>
                        <div className="tokenomics_mobile">
                            <img src="img/tokenomics_mobile.png" />
                            <img src="img/mobile_scale.png" className="mobile_scale animate__animated animate__flipInX wow" data-wow-duration="1.5s" data-wow-delay="1s" />
                        </div>
                        <div className="tokenomics_right">
                            <div className="tokenomics_right_wrapper">
                                <div className="tokenomics_right_block">
                                    <h6 className="animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1s">Team</h6><span className="animate__animated animate__fadeInRight wow" data-wow-duration="1.5s" data-wow-delay="1s">230M eYe (vesting 24 to 36 months)</span>
                                </div>
                                <div className="tokenomics_right_block">
                                    <h6 className="animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1s">Presale</h6><span className="animate__animated animate__fadeInRight wow" data-wow-duration="1.5s" data-wow-delay="1s">25M eYe ($0.02 to 0.025 per eYe token) </span>
                                </div>
                                <div className="tokenomics_right_block">
                                    <h6 className="animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1s">IDO</h6><span className="animate__animated animate__fadeInRight wow" data-wow-duration="1.5s" data-wow-delay="1s">75M eYe ($0.025 to 0.035 per/eYe) 60% locked liquidity</span>
                                </div>
                                <div className="tokenomics_right_block">
                                    <h6 className="animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1s">Marketing  &<br /> Rewards:</h6><span className="animate__animated animate__fadeInRight wow" data-wow-duration="1.5s" data-wow-delay="1s">220M eYe</span>
                                </div>
                                <div className="tokenomics_right_block">
                                    <h6 className="animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1s">Development &<br />  Investments</h6><span className="animate__animated animate__fadeInRight wow" data-wow-duration="1.5s" data-wow-delay="1s">200M eYe</span>
                                </div>
                                <div className="tokenomics_right_block">
                                    <h6 className="animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1s">QUAI DAO<br />  Treasury </h6><span className="animate__animated animate__fadeInRight wow" data-wow-duration="1.5s" data-wow-delay="1s">250M eYe</span>
                                </div>
                            </div>
                            <div className="tokenomics_right_footer">
                                <h6 className="animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1s">Transaction tax rate:</h6> <span className="animate__animated animate__fadeInRight wow" data-wow-duration="1.5s" data-wow-delay="1s">2% on all Ethereum and Binance Smart Chain Transactions </span>
                            </div>
                        </div>
                        <div className="tokenomics_footer animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1s">
                            <a className="white_btn"><span>Buy eYe !</span></a> <a className="white_btn"><img src="img/eye_btn.png" /></a>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Tokenomics;
