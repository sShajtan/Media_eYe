import React from 'react';
import './Team.css';
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


class Team extends React.Component {
    render() {

        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
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
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        rows: 1,
                        dots: true
                    }
                },
            ]
        };

        return (
            <div className="team">
                <div className="container">
                    <h3 className="block_title">MeDIA <img src="img/eye.png" /> TEAM</h3>
                    <div className="team_main animate__animated animate__fadeInUp wow" data-wow-duration="1.5s" data-wow-delay="1s">

                        <Slider {...settings}>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><img src="img/link.svg" /></a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><img src="img/link.svg" /></a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><img src="img/link.svg" /></a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><img src="img/link.svg" /></a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><img src="img/link.svg" /></a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><img src="img/link.svg" /></a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><img src="img/link.svg" /></a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><img src="img/link.svg" /></a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><img src="img/link.svg" /></a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><img src="img/link.svg" /></a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default Team;
