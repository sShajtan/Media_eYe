import React from 'react';
import './Team.css';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" data-role="none" className="slick-arrow slick-next" onClick={onClick} ><span>
            &#8594;</span></button>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" data-role="none" className="slick-arrow slick-prev" onClick={onClick} ><span>
            &#8592;</span></button>
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
            pauseOnHover: true,
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
                        rows: 2,
                        dots: true
                    }
                },
            ]
        };

        return (
            <div className="team">
                <link href='http://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet'></link>
                <div className="container">
                    <img className="title animate__animated animate__fadeIn wow" data-wow-duration="1s" data-wow-delay="0.5s" src="img/team_title.svg" />
                    <div className="team_main " >

                        <Slider {...settings}>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip11)">
                                                <path d="M8.268 28H2.463V9.306H8.268V28ZM5.362 6.756C3.506 6.756 2 5.218 2 3.362C2 2.47034 2.35421 1.6152 2.98471 0.984707C3.6152 0.35421 4.47034 0 5.362 0C6.25366 0 7.1088 0.35421 7.73929 0.984707C8.36979 1.6152 8.724 2.47034 8.724 3.362C8.724 5.218 7.218 6.756 5.362 6.756ZM29.994 28H24.202V18.9C24.202 16.731 24.158 13.95 21.184 13.95C18.166 13.95 17.703 16.306 17.703 18.744V28H11.904V9.306H17.471V11.856H17.552C18.327 10.387 20.22 8.837 23.044 8.837C28.919 8.837 29.999 12.706 29.999 17.731V28H29.994Z" fill="#525252" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip11">
                                                    <rect width="32" height="32" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        </a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip1)">
                                                <path d="M8.268 28H2.463V9.306H8.268V28ZM5.362 6.756C3.506 6.756 2 5.218 2 3.362C2 2.47034 2.35421 1.6152 2.98471 0.984707C3.6152 0.35421 4.47034 0 5.362 0C6.25366 0 7.1088 0.35421 7.73929 0.984707C8.36979 1.6152 8.724 2.47034 8.724 3.362C8.724 5.218 7.218 6.756 5.362 6.756ZM29.994 28H24.202V18.9C24.202 16.731 24.158 13.95 21.184 13.95C18.166 13.95 17.703 16.306 17.703 18.744V28H11.904V9.306H17.471V11.856H17.552C18.327 10.387 20.22 8.837 23.044 8.837C28.919 8.837 29.999 12.706 29.999 17.731V28H29.994Z" fill="#525252" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip1">
                                                    <rect width="32" height="32" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        </a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip2)">
                                                <path d="M8.268 28H2.463V9.306H8.268V28ZM5.362 6.756C3.506 6.756 2 5.218 2 3.362C2 2.47034 2.35421 1.6152 2.98471 0.984707C3.6152 0.35421 4.47034 0 5.362 0C6.25366 0 7.1088 0.35421 7.73929 0.984707C8.36979 1.6152 8.724 2.47034 8.724 3.362C8.724 5.218 7.218 6.756 5.362 6.756ZM29.994 28H24.202V18.9C24.202 16.731 24.158 13.95 21.184 13.95C18.166 13.95 17.703 16.306 17.703 18.744V28H11.904V9.306H17.471V11.856H17.552C18.327 10.387 20.22 8.837 23.044 8.837C28.919 8.837 29.999 12.706 29.999 17.731V28H29.994Z" fill="#525252" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip2">
                                                    <rect width="32" height="32" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        </a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip3)">
                                                <path d="M8.268 28H2.463V9.306H8.268V28ZM5.362 6.756C3.506 6.756 2 5.218 2 3.362C2 2.47034 2.35421 1.6152 2.98471 0.984707C3.6152 0.35421 4.47034 0 5.362 0C6.25366 0 7.1088 0.35421 7.73929 0.984707C8.36979 1.6152 8.724 2.47034 8.724 3.362C8.724 5.218 7.218 6.756 5.362 6.756ZM29.994 28H24.202V18.9C24.202 16.731 24.158 13.95 21.184 13.95C18.166 13.95 17.703 16.306 17.703 18.744V28H11.904V9.306H17.471V11.856H17.552C18.327 10.387 20.22 8.837 23.044 8.837C28.919 8.837 29.999 12.706 29.999 17.731V28H29.994Z" fill="#525252" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip3">
                                                    <rect width="32" height="32" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        </a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip5)">
                                                <path d="M8.268 28H2.463V9.306H8.268V28ZM5.362 6.756C3.506 6.756 2 5.218 2 3.362C2 2.47034 2.35421 1.6152 2.98471 0.984707C3.6152 0.35421 4.47034 0 5.362 0C6.25366 0 7.1088 0.35421 7.73929 0.984707C8.36979 1.6152 8.724 2.47034 8.724 3.362C8.724 5.218 7.218 6.756 5.362 6.756ZM29.994 28H24.202V18.9C24.202 16.731 24.158 13.95 21.184 13.95C18.166 13.95 17.703 16.306 17.703 18.744V28H11.904V9.306H17.471V11.856H17.552C18.327 10.387 20.22 8.837 23.044 8.837C28.919 8.837 29.999 12.706 29.999 17.731V28H29.994Z" fill="#525252" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip5">
                                                    <rect width="32" height="32" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        </a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip6)">
                                                <path d="M8.268 28H2.463V9.306H8.268V28ZM5.362 6.756C3.506 6.756 2 5.218 2 3.362C2 2.47034 2.35421 1.6152 2.98471 0.984707C3.6152 0.35421 4.47034 0 5.362 0C6.25366 0 7.1088 0.35421 7.73929 0.984707C8.36979 1.6152 8.724 2.47034 8.724 3.362C8.724 5.218 7.218 6.756 5.362 6.756ZM29.994 28H24.202V18.9C24.202 16.731 24.158 13.95 21.184 13.95C18.166 13.95 17.703 16.306 17.703 18.744V28H11.904V9.306H17.471V11.856H17.552C18.327 10.387 20.22 8.837 23.044 8.837C28.919 8.837 29.999 12.706 29.999 17.731V28H29.994Z" fill="#525252" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip6">
                                                    <rect width="32" height="32" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        </a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip7)">
                                                <path d="M8.268 28H2.463V9.306H8.268V28ZM5.362 6.756C3.506 6.756 2 5.218 2 3.362C2 2.47034 2.35421 1.6152 2.98471 0.984707C3.6152 0.35421 4.47034 0 5.362 0C6.25366 0 7.1088 0.35421 7.73929 0.984707C8.36979 1.6152 8.724 2.47034 8.724 3.362C8.724 5.218 7.218 6.756 5.362 6.756ZM29.994 28H24.202V18.9C24.202 16.731 24.158 13.95 21.184 13.95C18.166 13.95 17.703 16.306 17.703 18.744V28H11.904V9.306H17.471V11.856H17.552C18.327 10.387 20.22 8.837 23.044 8.837C28.919 8.837 29.999 12.706 29.999 17.731V28H29.994Z" fill="#525252" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip7">
                                                    <rect width="32" height="32" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        </a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip8)">
                                                <path d="M8.268 28H2.463V9.306H8.268V28ZM5.362 6.756C3.506 6.756 2 5.218 2 3.362C2 2.47034 2.35421 1.6152 2.98471 0.984707C3.6152 0.35421 4.47034 0 5.362 0C6.25366 0 7.1088 0.35421 7.73929 0.984707C8.36979 1.6152 8.724 2.47034 8.724 3.362C8.724 5.218 7.218 6.756 5.362 6.756ZM29.994 28H24.202V18.9C24.202 16.731 24.158 13.95 21.184 13.95C18.166 13.95 17.703 16.306 17.703 18.744V28H11.904V9.306H17.471V11.856H17.552C18.327 10.387 20.22 8.837 23.044 8.837C28.919 8.837 29.999 12.706 29.999 17.731V28H29.994Z" fill="#525252" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip8">
                                                    <rect width="32" height="32" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        </a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip9)">
                                                <path d="M8.268 28H2.463V9.306H8.268V28ZM5.362 6.756C3.506 6.756 2 5.218 2 3.362C2 2.47034 2.35421 1.6152 2.98471 0.984707C3.6152 0.35421 4.47034 0 5.362 0C6.25366 0 7.1088 0.35421 7.73929 0.984707C8.36979 1.6152 8.724 2.47034 8.724 3.362C8.724 5.218 7.218 6.756 5.362 6.756ZM29.994 28H24.202V18.9C24.202 16.731 24.158 13.95 21.184 13.95C18.166 13.95 17.703 16.306 17.703 18.744V28H11.904V9.306H17.471V11.856H17.552C18.327 10.387 20.22 8.837 23.044 8.837C28.919 8.837 29.999 12.706 29.999 17.731V28H29.994Z" fill="#525252" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip9">
                                                    <rect width="32" height="32" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        </a>
                                    </div>
                                    <span>Senior UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team_ava.png" />
                                    <div>
                                        <h6>Name</h6>
                                        <a><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip10)">
                                                <path d="M8.268 28H2.463V9.306H8.268V28ZM5.362 6.756C3.506 6.756 2 5.218 2 3.362C2 2.47034 2.35421 1.6152 2.98471 0.984707C3.6152 0.35421 4.47034 0 5.362 0C6.25366 0 7.1088 0.35421 7.73929 0.984707C8.36979 1.6152 8.724 2.47034 8.724 3.362C8.724 5.218 7.218 6.756 5.362 6.756ZM29.994 28H24.202V18.9C24.202 16.731 24.158 13.95 21.184 13.95C18.166 13.95 17.703 16.306 17.703 18.744V28H11.904V9.306H17.471V11.856H17.552C18.327 10.387 20.22 8.837 23.044 8.837C28.919 8.837 29.999 12.706 29.999 17.731V28H29.994Z" fill="#525252" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip10">
                                                    <rect width="32" height="32" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        </a>
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
