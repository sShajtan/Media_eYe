import React from 'react';
import './MainBlock.css';
import Slider from "react-slick";
import WOW from 'wowjs';

class MainBlock extends React.Component {

    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }

    render() {

        const settings1 = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 9000,
            speed: 9000,
            cssEase: "linear",
            pauseOnHover: false,
        };

        const settings2 = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: false,
            centerMode: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 9000,
            cssEase: "linear",
            speed: 9000,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        centerMode: false,
                    }
                },
            ]
        };
        return (
            <div className="main_block" >
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <div className="container">
                    <div className="main_block_main">
                        <div className="main_block_main_left">
                            <img className="animate__animated animate__fadeInLeft wow" data-wow-duration="1.5s" data-wow-delay="1s" src="img/big_main_logo.png" />
                            <h6 className="animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1s">A frictionless platform for creating, trading, and distributing NFTs.</h6>
                            <div data-wow-duration="1.5s" data-wow-delay="1s" className="buttons animate__animated animate__fadeInUp wow">
                                <a className="white_btn"><span>Learn More!</span></a>
                                <button className="white_btn"><span>Sign Up!</span></button>
                            </div>
                            <div className="main_block_soc_links animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1s">
                                <a className="white_btn"><img src="img/main_soc/facebook.png" /></a>
                                <a className="white_btn"><img src="img/main_soc/google.png" /></a>
                            </div>
                        </div>
                        <div className="main_block_main_right">
                            <div className="main_block_sliders">
                                <div className="left_sliders">
                                    <Slider {...settings1}>
                                        <div className="main_block_slide">
                                            <div className="main_block_slide_img">
                                                <img src="img/main_slider/1.png" />
                                            </div>
                                            <h4><img src="img/ava_sm.svg" /> @Media_Creator</h4>
                                        </div>
                                        <div className="main_block_slide">
                                            <div className="main_block_slide_img">
                                                <img src="img/main_slider/2.png" />
                                            </div>
                                            <h4><img src="img/ava_sm.svg" /> @Media_Creator</h4>
                                        </div>
                                        <div className="main_block_slide">
                                            <div className="main_block_slide_img">
                                                <img src="img/main_slider/1.png" />
                                            </div>
                                            <h4><img src="img/ava_sm.svg" /> @Media_Creator</h4>
                                        </div>
                                        <div className="main_block_slide">
                                            <div className="main_block_slide_img">
                                                <img src="img/main_slider/2.png" />
                                            </div>
                                            <h4><img src="img/ava_sm.svg" /> @Media_Creator</h4>
                                        </div>
                                        <div className="main_block_slide">
                                            <div className="main_block_slide_img">
                                                <img src="img/main_slider/1.png" />
                                            </div>
                                            <h4><img src="img/ava_sm.svg" /> @Media_Creator</h4>
                                        </div>
                                    </Slider>
                                </div>
                                <div className="right_sliders">
                                    <Slider {...settings2}>
                                        <div className="main_block_slide">
                                            <div className="main_block_slide_img">
                                                <img src="img/main_slider/3.png" />
                                            </div>
                                            <h4><img src="img/ava_sm.svg" /> @Media_Creator</h4>
                                        </div>
                                        <div className="main_block_slide">
                                            <div className="main_block_slide_img">
                                                <img src="img/main_slider/4.png" />
                                            </div>
                                            <h4><img src="img/ava_sm.svg" /> @Media_Creator</h4>
                                        </div>
                                        <div className="main_block_slide">
                                            <div className="main_block_slide_img">
                                                <img src="img/main_slider/3.png" />
                                            </div>
                                            <h4><img src="img/ava_sm.svg" /> @Media_Creator</h4>
                                        </div>
                                        <div className="main_block_slide">
                                            <div className="main_block_slide_img">
                                                <img src="img/main_slider/4.png" />
                                            </div>
                                            <h4><img src="img/ava_sm.svg" /> @Media_Creator</h4>
                                        </div>
                                    </Slider>
                                </div>
                                <div className="backgound_gradient"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainBlock;
