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
            autoplay: false,
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
            <div className="team" id="team">
                <link href='http://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet'></link>
                <div className="container">
                    <img className="title animate__animated animate__fadeIn wow" data-wow-duration="1s" data-wow-delay="0.5s" src="img/team_title.svg" />
                    <div className="team_main " >
                        <Slider {...settings}>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team/yampolskiy.png" />
                                    <div>
                                        <h6>Victor Yampolsky</h6>
                                        <a href="https://www.linkedin.com/in/victor-y-76333b9b/" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <span>Co-Founder - Business Development and Growth</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team/stefan.png" />
                                    <div>
                                        <h6>Stefan Arsenijevic</h6>
                                        <a href="https://www.linkedin.com/in/stefan-arsenijevic-73ab54111/" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <span>Senior Marketing Manager, Web Developer and SEO Expert</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team/anda.png" />
                                    <div>
                                        <h6>Felipe De Anda</h6>
                                        <a href="https://www.linkedin.com/in/felipe-de-anda-0769ba1bb/" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <span>Senior Manager Growth and Development - Co Founder
                                    </span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team/miro.png" />
                                    <div>
                                        <h6>Mada Miro</h6>
                                        <a href="https://www.linkedin.com/in/mada-miro-6b8058182" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <span>Marketing Manager</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team/shaitanov.png" />
                                    <div>
                                        <h6>Anatolii Shaitanov</h6>
                                        <a href="https://www.linkedin.com/in/anatolii-shaitanov-788a6819b/" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <img src="img/team/chong.png" />
                                    <div>
                                        <h6>Roy Chong</h6>
                                        <a href="https://www.linkedin.com/in/roy-chong-0914/" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <span>Senior Blockchain & Web Developer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team/commons.png" />
                                    <div>
                                        <h6>Jeffery Commons</h6>
                                        <a target="_blank" href="https://www.linkedin.com/in/jcommons"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <span>Co - Founder - Senior Solidity Developer and Smart Contracts Architect</span>
                                </div>
                            </div>
                            {/* <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team/dellacanne.png" />
                                    <div>
                                        <h6>Antoni Dellacanne</h6>
                                        <a href="https://www.linkedin.com/in/antoniodellecanne/" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <span>Data Science and Data
                                        Analytics</span>
                                </div>
                            </div> */}
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team/gupta.png" />
                                    <div>
                                        <h6>Harish D. Gupta</h6>
                                        <a href="https://www.linkedin.com/in/felipe-de-anda-0769ba1bb/" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <span>Finance and economic planning</span>
                                </div>
                            </div>
                            {/* <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team/Ferretti.png" />
                                    <div>
                                        <h6>Andrea Ferretti</h6>
                                        <a href="https://www.linkedin.com/in/andrea-ferretti-b056b8183/" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <span>Senior Data Scientist
                                        (Politecnico di Torino)</span>
                                </div>
                            </div> */}
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team/assangaliyev.png" />
                                    <div>
                                        <h6>Askar Assangaliyev</h6>
                                        <a href="https://www.linkedin.com/in/askar-assangaliyev-722bbb37/" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <span className="askar">Co-Founder - Director of Eurasia Accelerator Partnerships, Investments and Business Development</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team/newman.png" />
                                    <div>
                                        <h6>Shimon Newman</h6>
                                        <a href="https://www.linkedin.com/in/shimon-newman-671928153/" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <span>Co-Founder - Tokenomics Expert</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team/shill.png" />
                                    <div>
                                        <h6>King Shill</h6>
                                        <a ><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                    <span>Ci-Founder - Senior
                                        Developer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team/ruslan.png" />
                                    <div>
                                        <h6>Ruslan Gavriljuk</h6>
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
                                    <span>Front end developer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper">
                                <div className="team_slide">
                                    <img src="img/team/roma.png" />
                                    <div>
                                        <h6>Roman Ferlii</h6>
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
                                    <span>UI/UX Designer</span>
                                </div>
                            </div>
                            <div className="team_slide_wrapper"></div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default Team;
