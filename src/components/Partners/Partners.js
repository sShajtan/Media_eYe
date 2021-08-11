import React from 'react';
import './Partners.css';
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

class Partners extends React.Component {
    render() {

        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            rows: 2,
            slidesPerRow: 1,
            arrows: true,
            autoplay: true,
            pauseOnHover: false,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        rows: 3,
                        slidesToShow: 2,
                    }
                },
            ]
        };

        return (
            <div className="team">
                <div className="container">
                    <h3 className="block_title">PARTNERS</h3>
                    <div className="team_main animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1s">
                        <Slider {...settings}>
                            <div className="partners_slide_wrapper">
                                <div className="partners_slide">
                                    <a>
                                        <img src="img/partners/1.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="partners_slide_wrapper">
                                <div className="partners_slide">
                                    <a>
                                        <img src="img/partners/2.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="partners_slide_wrapper">
                                <div className="partners_slide">
                                    <a>
                                        <img src="img/partners/3.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="partners_slide_wrapper">
                                <div className="partners_slide">
                                    <a>
                                        <img src="img/partners/4.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="partners_slide_wrapper">
                                <div className="partners_slide">
                                    <a>
                                        <img src="img/partners/5.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="partners_slide_wrapper">
                                <div className="partners_slide">
                                    <a>
                                        <img src="img/partners/6.png" />
                                    </a>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default Partners;
