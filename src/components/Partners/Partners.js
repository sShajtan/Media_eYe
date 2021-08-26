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
            <div className="partners">
                <div className="container">
                    <img className="title animate__animated animate__fadeIn wow" data-wow-duration="1s" data-wow-delay="0.5s" src="img/partners_title.png" />
                    <div className="team_main animate__animated animate__fadeInUp wow" data-wow-duration="1s" data-wow-delay="0.5s">
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
                                        <img src={this.props.theme ? "img/partners/2-dark.png" : "img/partners/2.png"} />
                                    </a>
                                </div>
                            </div>
                            <div className="partners_slide_wrapper">
                                <div className="partners_slide">
                                    <a>
                                        <img src={this.props.theme ? "img/partners/3-dark.png" : "img/partners/3.png"} />
                                    </a>
                                </div>
                            </div>
                            <div className="partners_slide_wrapper">
                                <div className="partners_slide">
                                    <a>
                                        <img src={this.props.theme ? "img/partners/4-dark.png" : "img/partners/4.png"} />
                                    </a>
                                </div>
                            </div>
                            <div className="partners_slide_wrapper">
                                <div className="partners_slide">
                                    <a>
                                        <img src={this.props.theme ? "img/partners/5-dark.png" : "img/partners/5.png"} />
                                    </a>
                                </div>
                            </div>
                            <div className="partners_slide_wrapper">
                                <div className="partners_slide">
                                    <a>
                                        <img src={this.props.theme ? "img/partners/6-dark.png" : "img/partners/6.png"} />
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
