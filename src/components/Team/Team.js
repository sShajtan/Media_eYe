import React from "react";
import Slider from "react-slick";
import Linkedinprofileicon from "../Icons/LinkedInProfileIcon";
import "./Team.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      data-role="none"
      className="slick-arrow slick-next"
      onClick={onClick}
    >
      <span>&#8594;</span>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      data-role="none"
      className="slick-arrow slick-prev"
      onClick={onClick}
    >
      <span>&#8592;</span>
    </button>
  );
}

const Team = () => {
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          rows: 2,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="team" id="team">
      <link
        href="http://fonts.googleapis.com/css?family=Droid+Sans"
        rel="stylesheet"
      ></link>
      <div className="container">
        <img
          className="title animate__animated animate__fadeIn wow"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
          src="img/team_title.svg"
        />
        <div className="team_main ">
          <Slider {...settings}>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <div className="team_slide_img">
                  <img src="img/team/yampolskiy.png" />
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
                <div>
                  <h6>Victor Yampolsky</h6>
                </div>
                <span>Co-Founder, Business Development and Growth</span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <div className="team_slide_img">
                  <img src="img/team/mask.png" />
                  <a href="https://www.linkedin.com/in/stefan-arsenijevic-73ab54111/" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div>
                  <h6>Stefan Arsenijevic</h6>
                </div>
                <span>Senior Marketing Manager Web Developer and SEO Expert</span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <div className="team_slide_img">
                  <img src="img/team/mask.png" />
                  <a href="https://www.linkedin.com/in/felipe-de-anda-0769ba1bb/" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div>
                  <h6>Felipe De Anda</h6>
                </div>
                <span>Co-Founder, Senior Manager Growth and Development</span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <div className="team_slide_img">
                  <img src="img/team/shaitanov.png" />
                  <a href="https://www.linkedin.com/in/anatolii-shaitanov-788a6819b/" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div>
                  <h6>Anatolii Shaitanov</h6>
                </div>
                <span>Senior UI/UX Designer</span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <div className="team_slide_img">
                  <img src="img/team/mask.png" />
                  <a href="https://www.linkedin.com/in/roy-chong-0914/" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div>
                  <h6>Roy Chong</h6>
                </div>
                <span>Senior Blockchain & Web Developer</span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <div className="team_slide_img">
                  <img src="img/team/mask.png" />
                  <a href="https://www.linkedin.com/in/jcommons" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div>
                  <h6>Jeffrey Commons</h6>
                </div>
                <span>Co-Founder,  Senior Solidity Developer and Smart Contracts Architrct</span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <div className="team_slide_img">
                  <img src="img/team/mask.png" />
                  <a href="https://www.linkedin.com/in/harishdgupta" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div>
                  <h6>Harish D. Gupta</h6>
                </div>
                <span>Finance and Economic Planning</span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <div className="team_slide_img">
                  <img src="img/team/asangaliev.png" />
                  <a href="https://www.linkedin.com/in/askar-assangaliyev-722bbb37/" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div>
                  <h6>Askar Assangaliyev</h6>
                </div>
                <span>Co-Founder, Director of Eurasia Accelerator Partnerships, Investments and Business Development</span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <div className="team_slide_img">
                  <img src="img/team/mask.png" />
                  <a href="https://www.linkedin.com/in/shimon-newman-671928153/" target="_blank"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div>
                  <h6>Shimon Newman</h6>
                </div>
                <span>Co-Founder, Tokenomics Expert</span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <div className="team_slide_img">
                  <img src="img/team/mask.png" />

                </div>
                <div>
                  <h6>King Shull</h6>
                </div>
                <span>Co-Founder, Senior Developer</span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <div className="team_slide_img">
                  <img src="img/team/veronica.png" />
                </div>
                <div>
                  <h6>Veronika Sharma</h6>
                </div>
                <span>Director of Social Media Marketing</span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <div className="team_slide_img">
                  <img src="img/team/ruslan.png" />

                </div>
                <div>
                  <h6>Ruslan Gavriljuk</h6>
                </div>
                <span>Front-end Developer</span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <div className="team_slide_img">
                  <img src="img/team/erica.png" />

                </div>
                <div>
                  <h6>Ericka Schwan</h6>
                </div>
                <span>Creative Director</span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <div className="team_slide_img">
                  <img src="img/team/roma.png" />

                </div>
                <div>
                  <h6>Roman Ferlii</h6>
                </div>
                <span>UI/UX Designer</span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
