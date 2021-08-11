import React from 'react';
import './Creators.css';
import Slider from "react-slick";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" data-role="none" className="slick-arrow slick-next" onClick={onClick} ><span></span><i>&#8594;</i></button>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" data-role="none" className="slick-arrow slick-prev" onClick={onClick} ><span></span><i>&#8592;</i></button>
    );
}

class Creators extends React.Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        dots: true
                    }
                },
            ]
        };
        return (
            <div className="creators">
                <div className="container">
                    <h3 className="block_title">CREATORS</h3>
                    <div className="creators_main animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1s">
                        <Slider {...settings}>
                            <div className="creator_slide_wrapper">
                                <div className="creator_slide">
                                    <div></div>
                                    <img src="img/creator_slider/5.png" />
                                    <h5>MeDIA eYe Creator</h5>
                                </div>
                            </div>
                            <div className="creator_slide_wrapper">
                                <div className="creator_slide">
                                    <div></div>
                                    <img src="img/creator_slider/5.png" />
                                    <h5>MeDIA eYe Creator</h5>
                                </div>
                            </div>
                            <div className="creator_slide_wrapper">
                                <div className="creator_slide">
                                    <div></div>
                                    <img src="img/creator_slider/5.png" />
                                    <h5>MeDIA eYe Creator</h5>
                                </div>
                            </div>
                            <div className="creator_slide_wrapper">
                                <div className="creator_slide">
                                    <div></div>
                                    <img src="img/creator_slider/5.png" />
                                    <h5>MeDIA eYe Creator</h5>
                                </div>
                            </div>
                            <div className="creator_slide_wrapper">
                                <div className="creator_slide">
                                    <div></div>
                                    <img src="img/creator_slider/5.png" />
                                    <h5>MeDIA eYe Creator</h5>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default Creators;
