import React from 'react';
import './MainBlock.css';
import Slider from "react-slick";
import WOW from 'wowjs';

class MainBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
            nav3: null
        };
    }


    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2,
            nav3: this.slider3
        });
        const wow = new WOW.WOW();
        wow.init();
    }

    render() {

        var settings1 = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
        };
        var settings2 = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        arrows: true,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        arrows: true,
                        vertical: true,
                    }
                },

            ]
        };
        var settings3 = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,

        };


        return (
            <div className="main_block" >
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <div className="container">
                    <div className="main_block_main">
                        <div className="main_block_main_left">
                            <img className="animate__animated animate__fadeInLeft wow logo" data-wow-duration="1.5s" data-wow-delay="1s" src="img/big_main_logo.png" />
                            <h6 className="animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1s">A frictionless platform for creating, trading, and distributing NFTs.</h6>
                            <div className="main_left_buttons">
                                <a className="learn_more"><span>Learn More</span></a>
                                <a className="sign_up"><span>SignUP</span></a>
                            </div>
                            <div className="left_slider">
                                <h4>Creators</h4>
                                <div className="left_slider_main">
                                    <Slider asNavFor={this.state.nav3}
                                        ref={slider => (this.slider2 = slider)} {...settings2} >
                                        <div className="left_slide_wrapper">
                                            <div className="left_slide">
                                                <img src="img/ava.png" />
                                                <div>
                                                    <span>Owner</span>
                                                    <h5>Media</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="left_slide_wrapper">
                                            <div className="left_slide">
                                                <img src="img/ava.png" />
                                                <div>
                                                    <span>Owner</span>
                                                    <h5>Media</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="left_slide_wrapper">
                                            <div className="left_slide">
                                                <img src="img/ava.png" />
                                                <div>
                                                    <span>Owner</span>
                                                    <h5>Media</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="left_slide_wrapper">
                                            <div className="left_slide">
                                                <img src="img/ava.png" />
                                                <div>
                                                    <span>Owner</span>
                                                    <h5>Media</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="main_block_main_right">
                            <div className="main_block_sliders">
                                <svg className="slider_border" width="100%" height="auto" viewBox="0 0 699 713" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M56.6877 10.2065L15.1762 43.0133V285.783L23.6571 291.98V328.067L17.8544 332.806H7.14176V348.845H4.4636V702.064L653.471 701.7L688.287 672.174V613.122L680.699 606.56V482.988H699V713H0V0H699V446.536L686.948 438.152V330.984H675.343L670.433 327.703V247.144L687.841 232.928V115.188L674.004 102.794H656.596L542.774 10.2065H56.6877Z" fill="#141233" />
                                </svg>
                                <Slider asNavFor={this.state.nav2}
                                    ref={slider => (this.slider1 = slider)} {...settings1} >
                                    <div className="main_slide">
                                        <img src="img/main_slider/1.jpg" ></img>
                                    </div>
                                    <div className="main_slide">
                                        <img src="img/main_slider/2.jpg" ></img>
                                    </div>
                                    <div className="main_slide">
                                        <img src="img/main_slider/3.jpg" ></img>
                                    </div>
                                    <div className="main_slide">
                                        <img src="img/main_slider/4.jpg" ></img>
                                    </div>
                                </Slider>
                                <div className="right_small_slider">
                                    <Slider asNavFor={this.state.nav1}
                                        ref={slider => (this.slider3 = slider)} {...settings3} >
                                        <div className="main_small_slide">
                                            <img src="img/small_slider/2.jpg" />
                                        </div>
                                        <div className="main_small_slide">
                                            <img src="img/small_slider/1.jpg" />
                                        </div>
                                        <div className="main_small_slide">
                                            <img src="img/small_slider/3.jpg" />
                                        </div>
                                        <div className="main_small_slide">
                                            <img src="img/small_slider/4.jpg" />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainBlock;
