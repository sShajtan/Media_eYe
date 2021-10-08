import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import Linkedinprofileicon from '../Icons/LinkedInProfileIcon';
import './Team.css';

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
  const darkTheme = useSelector((state) => state.app.darkTheme);
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
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          rows: 2,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="team" id="team">
      <link
        href="https://fonts.googleapis.com/css?family=Droid+Sans"
        rel="stylesheet"
      ></link>
      <img
        className="title animate__animated animate__fadeIn wow"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
        src="img/team_title.svg"
        alt="Team"
      />
      <div className="team_wrapper">
        <div className="container">
          <div className="team_main ">
            <Slider {...settings}>
              <div className="team_slide_wrapper">
                <div className="team_slide">
                  <div className="team_slide_img">
                    <img src="img/team/yampolskiy.png" />
                    <a
                      href="https://www.linkedin.com/in/victor-y-76333b9b/"
                      target="_blank"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.2345 26.5H2.15513V10.1427H7.2345V26.5ZM4.69175 7.9115C3.06775 7.9115 1.75 6.56575 1.75 4.94175C1.75 4.16155 2.05993 3.4133 2.61162 2.86162C3.1633 2.30993 3.91155 2 4.69175 2C5.47195 2 6.2202 2.30993 6.77188 2.86162C7.32357 3.4133 7.6335 4.16155 7.6335 4.94175C7.6335 6.56575 6.31575 7.9115 4.69175 7.9115ZM26.2448 26.5H21.1768V18.5375C21.1768 16.6396 21.1383 14.2063 18.536 14.2063C15.8953 14.2063 15.4901 16.2677 15.4901 18.401V26.5H10.416V10.1427H15.2871V12.374H15.358C16.0361 11.0886 17.6925 9.73238 20.1635 9.73238C25.3041 9.73238 26.2491 13.1178 26.2491 17.5146V26.5H26.2448Z"
                          fill="url(#paint0_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="13.9996"
                            y1="2"
                            x2="13.9996"
                            y2="26.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#35B5FC" />
                            <stop offset="1" stop-color="#4E37EA" />
                          </linearGradient>
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
                    <img src="img/team/stefan.png" />
                    <a
                      href="https://www.linkedin.com/in/stefan-arsenijevic-73ab54111/"
                      target="_blank"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.2345 26.5H2.15513V10.1427H7.2345V26.5ZM4.69175 7.9115C3.06775 7.9115 1.75 6.56575 1.75 4.94175C1.75 4.16155 2.05993 3.4133 2.61162 2.86162C3.1633 2.30993 3.91155 2 4.69175 2C5.47195 2 6.2202 2.30993 6.77188 2.86162C7.32357 3.4133 7.6335 4.16155 7.6335 4.94175C7.6335 6.56575 6.31575 7.9115 4.69175 7.9115ZM26.2448 26.5H21.1768V18.5375C21.1768 16.6396 21.1383 14.2063 18.536 14.2063C15.8953 14.2063 15.4901 16.2677 15.4901 18.401V26.5H10.416V10.1427H15.2871V12.374H15.358C16.0361 11.0886 17.6925 9.73238 20.1635 9.73238C25.3041 9.73238 26.2491 13.1178 26.2491 17.5146V26.5H26.2448Z"
                          fill="url(#paint0_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="13.9996"
                            y1="2"
                            x2="13.9996"
                            y2="26.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#35B5FC" />
                            <stop offset="1" stop-color="#4E37EA" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <div>
                    <h6>Stefan Arsenijevic</h6>
                  </div>
                  <span>
                    Senior Marketing Manager Web Developer and SEO Expert
                  </span>
                </div>
              </div>
              <div className="team_slide_wrapper">
                <div className="team_slide">
                  <div className="team_slide_img">
                    <img src="img/team/anda.png" />
                    <a
                      href="https://www.linkedin.com/in/felipe-de-anda-0769ba1bb/"
                      target="_blank"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.2345 26.5H2.15513V10.1427H7.2345V26.5ZM4.69175 7.9115C3.06775 7.9115 1.75 6.56575 1.75 4.94175C1.75 4.16155 2.05993 3.4133 2.61162 2.86162C3.1633 2.30993 3.91155 2 4.69175 2C5.47195 2 6.2202 2.30993 6.77188 2.86162C7.32357 3.4133 7.6335 4.16155 7.6335 4.94175C7.6335 6.56575 6.31575 7.9115 4.69175 7.9115ZM26.2448 26.5H21.1768V18.5375C21.1768 16.6396 21.1383 14.2063 18.536 14.2063C15.8953 14.2063 15.4901 16.2677 15.4901 18.401V26.5H10.416V10.1427H15.2871V12.374H15.358C16.0361 11.0886 17.6925 9.73238 20.1635 9.73238C25.3041 9.73238 26.2491 13.1178 26.2491 17.5146V26.5H26.2448Z"
                          fill="url(#paint0_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="13.9996"
                            y1="2"
                            x2="13.9996"
                            y2="26.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#35B5FC" />
                            <stop offset="1" stop-color="#4E37EA" />
                          </linearGradient>
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
                    <a
                      href="https://www.linkedin.com/in/anatolii-shaitanov-788a6819b/"
                      target="_blank"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.2345 26.5H2.15513V10.1427H7.2345V26.5ZM4.69175 7.9115C3.06775 7.9115 1.75 6.56575 1.75 4.94175C1.75 4.16155 2.05993 3.4133 2.61162 2.86162C3.1633 2.30993 3.91155 2 4.69175 2C5.47195 2 6.2202 2.30993 6.77188 2.86162C7.32357 3.4133 7.6335 4.16155 7.6335 4.94175C7.6335 6.56575 6.31575 7.9115 4.69175 7.9115ZM26.2448 26.5H21.1768V18.5375C21.1768 16.6396 21.1383 14.2063 18.536 14.2063C15.8953 14.2063 15.4901 16.2677 15.4901 18.401V26.5H10.416V10.1427H15.2871V12.374H15.358C16.0361 11.0886 17.6925 9.73238 20.1635 9.73238C25.3041 9.73238 26.2491 13.1178 26.2491 17.5146V26.5H26.2448Z"
                          fill="url(#paint0_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="13.9996"
                            y1="2"
                            x2="13.9996"
                            y2="26.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#35B5FC" />
                            <stop offset="1" stop-color="#4E37EA" />
                          </linearGradient>
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
                    <img src="img/team/chong.png" />
                    <a
                      href="https://www.linkedin.com/in/roy-chong-0914/"
                      target="_blank"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.2345 26.5H2.15513V10.1427H7.2345V26.5ZM4.69175 7.9115C3.06775 7.9115 1.75 6.56575 1.75 4.94175C1.75 4.16155 2.05993 3.4133 2.61162 2.86162C3.1633 2.30993 3.91155 2 4.69175 2C5.47195 2 6.2202 2.30993 6.77188 2.86162C7.32357 3.4133 7.6335 4.16155 7.6335 4.94175C7.6335 6.56575 6.31575 7.9115 4.69175 7.9115ZM26.2448 26.5H21.1768V18.5375C21.1768 16.6396 21.1383 14.2063 18.536 14.2063C15.8953 14.2063 15.4901 16.2677 15.4901 18.401V26.5H10.416V10.1427H15.2871V12.374H15.358C16.0361 11.0886 17.6925 9.73238 20.1635 9.73238C25.3041 9.73238 26.2491 13.1178 26.2491 17.5146V26.5H26.2448Z"
                          fill="url(#paint0_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="13.9996"
                            y1="2"
                            x2="13.9996"
                            y2="26.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#35B5FC" />
                            <stop offset="1" stop-color="#4E37EA" />
                          </linearGradient>
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
                    <img src="img/team/commons.png" />
                    <a
                      href="https://www.linkedin.com/in/jcommons"
                      target="_blank"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.2345 26.5H2.15513V10.1427H7.2345V26.5ZM4.69175 7.9115C3.06775 7.9115 1.75 6.56575 1.75 4.94175C1.75 4.16155 2.05993 3.4133 2.61162 2.86162C3.1633 2.30993 3.91155 2 4.69175 2C5.47195 2 6.2202 2.30993 6.77188 2.86162C7.32357 3.4133 7.6335 4.16155 7.6335 4.94175C7.6335 6.56575 6.31575 7.9115 4.69175 7.9115ZM26.2448 26.5H21.1768V18.5375C21.1768 16.6396 21.1383 14.2063 18.536 14.2063C15.8953 14.2063 15.4901 16.2677 15.4901 18.401V26.5H10.416V10.1427H15.2871V12.374H15.358C16.0361 11.0886 17.6925 9.73238 20.1635 9.73238C25.3041 9.73238 26.2491 13.1178 26.2491 17.5146V26.5H26.2448Z"
                          fill="url(#paint0_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="13.9996"
                            y1="2"
                            x2="13.9996"
                            y2="26.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#35B5FC" />
                            <stop offset="1" stop-color="#4E37EA" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
                  </div>
                  <div>
                    <h6>Jeffrey Commons</h6>
                  </div>
                  <span>
                    Co-Founder, Senior Solidity Developer and Smart Contracts
                    Architect
                  </span>
                </div>
              </div>
              <div className="team_slide_wrapper">
                <div className="team_slide">
                  <div className="team_slide_img">
                    <img src="img/team/gupta.png" />
                    <a
                      href="https://www.linkedin.com/in/harishdgupta"
                      target="_blank"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.2345 26.5H2.15513V10.1427H7.2345V26.5ZM4.69175 7.9115C3.06775 7.9115 1.75 6.56575 1.75 4.94175C1.75 4.16155 2.05993 3.4133 2.61162 2.86162C3.1633 2.30993 3.91155 2 4.69175 2C5.47195 2 6.2202 2.30993 6.77188 2.86162C7.32357 3.4133 7.6335 4.16155 7.6335 4.94175C7.6335 6.56575 6.31575 7.9115 4.69175 7.9115ZM26.2448 26.5H21.1768V18.5375C21.1768 16.6396 21.1383 14.2063 18.536 14.2063C15.8953 14.2063 15.4901 16.2677 15.4901 18.401V26.5H10.416V10.1427H15.2871V12.374H15.358C16.0361 11.0886 17.6925 9.73238 20.1635 9.73238C25.3041 9.73238 26.2491 13.1178 26.2491 17.5146V26.5H26.2448Z"
                          fill="url(#paint0_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="13.9996"
                            y1="2"
                            x2="13.9996"
                            y2="26.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#35B5FC" />
                            <stop offset="1" stop-color="#4E37EA" />
                          </linearGradient>
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
              {/* <div className="team_slide_wrapper">
                <div className="team_slide">
                  <div className="team_slide_img">
                    <img src="img/team/asangaliev.png" />
                    <a href="https://www.linkedin.com/in/askar-assangaliyev-722bbb37/" target="_blank"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.2345 26.5H2.15513V10.1427H7.2345V26.5ZM4.69175 7.9115C3.06775 7.9115 1.75 6.56575 1.75 4.94175C1.75 4.16155 2.05993 3.4133 2.61162 2.86162C3.1633 2.30993 3.91155 2 4.69175 2C5.47195 2 6.2202 2.30993 6.77188 2.86162C7.32357 3.4133 7.6335 4.16155 7.6335 4.94175C7.6335 6.56575 6.31575 7.9115 4.69175 7.9115ZM26.2448 26.5H21.1768V18.5375C21.1768 16.6396 21.1383 14.2063 18.536 14.2063C15.8953 14.2063 15.4901 16.2677 15.4901 18.401V26.5H10.416V10.1427H15.2871V12.374H15.358C16.0361 11.0886 17.6925 9.73238 20.1635 9.73238C25.3041 9.73238 26.2491 13.1178 26.2491 17.5146V26.5H26.2448Z" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="13.9996" y1="2" x2="13.9996" y2="26.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#35B5FC"/>
<stop offset="1" stop-color="#4E37EA"/>
</linearGradient>
</defs>
</svg>

                    </a>

                  </div>
                  <div>
                    <h6>Askar Assangaliyev</h6>
                  </div>
                  <span>Co-Founder, Director of Eurasia Accelerator Partnerships, Investments and Business Development</span>
                </div>
              </div> */}
              <div className="team_slide_wrapper">
                <div className="team_slide">
                  <div className="team_slide_img">
                    <img src="img/team/newman.png" />
                    <a
                      href="https://www.linkedin.com/in/shimon-newman-671928153/"
                      target="_blank"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.2345 26.5H2.15513V10.1427H7.2345V26.5ZM4.69175 7.9115C3.06775 7.9115 1.75 6.56575 1.75 4.94175C1.75 4.16155 2.05993 3.4133 2.61162 2.86162C3.1633 2.30993 3.91155 2 4.69175 2C5.47195 2 6.2202 2.30993 6.77188 2.86162C7.32357 3.4133 7.6335 4.16155 7.6335 4.94175C7.6335 6.56575 6.31575 7.9115 4.69175 7.9115ZM26.2448 26.5H21.1768V18.5375C21.1768 16.6396 21.1383 14.2063 18.536 14.2063C15.8953 14.2063 15.4901 16.2677 15.4901 18.401V26.5H10.416V10.1427H15.2871V12.374H15.358C16.0361 11.0886 17.6925 9.73238 20.1635 9.73238C25.3041 9.73238 26.2491 13.1178 26.2491 17.5146V26.5H26.2448Z"
                          fill="url(#paint0_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="13.9996"
                            y1="2"
                            x2="13.9996"
                            y2="26.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#35B5FC" />
                            <stop offset="1" stop-color="#4E37EA" />
                          </linearGradient>
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
                    <img src="img/team/shill.png" />
                  </div>
                  <div>
                    <h6>King Shill</h6>
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
                    <img src="img/team/erica.png" />
                    <a
                      href="https://www.linkedin.com/in/erickaschwan/"
                      target="_blank"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.2345 26.5H2.15513V10.1427H7.2345V26.5ZM4.69175 7.9115C3.06775 7.9115 1.75 6.56575 1.75 4.94175C1.75 4.16155 2.05993 3.4133 2.61162 2.86162C3.1633 2.30993 3.91155 2 4.69175 2C5.47195 2 6.2202 2.30993 6.77188 2.86162C7.32357 3.4133 7.6335 4.16155 7.6335 4.94175C7.6335 6.56575 6.31575 7.9115 4.69175 7.9115ZM26.2448 26.5H21.1768V18.5375C21.1768 16.6396 21.1383 14.2063 18.536 14.2063C15.8953 14.2063 15.4901 16.2677 15.4901 18.401V26.5H10.416V10.1427H15.2871V12.374H15.358C16.0361 11.0886 17.6925 9.73238 20.1635 9.73238C25.3041 9.73238 26.2491 13.1178 26.2491 17.5146V26.5H26.2448Z"
                          fill="url(#paint0_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="13.9996"
                            y1="2"
                            x2="13.9996"
                            y2="26.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#35B5FC" />
                            <stop offset="1" stop-color="#4E37EA" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
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
                    <img src="img/team/mask.png" />
                  </div>
                  <div>
                    <h6>New Member</h6>
                  </div>
                </div>
              </div>
              <div className="team_slide_wrapper">
                <div className="team_slide">
                  <div className="team_slide_img">
                    <img src="img/team/roma.png" />
                    <a
                      href="https://www.linkedin.com/in/erickaschwan/"
                      target="_blank"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.2345 26.5H2.15513V10.1427H7.2345V26.5ZM4.69175 7.9115C3.06775 7.9115 1.75 6.56575 1.75 4.94175C1.75 4.16155 2.05993 3.4133 2.61162 2.86162C3.1633 2.30993 3.91155 2 4.69175 2C5.47195 2 6.2202 2.30993 6.77188 2.86162C7.32357 3.4133 7.6335 4.16155 7.6335 4.94175C7.6335 6.56575 6.31575 7.9115 4.69175 7.9115ZM26.2448 26.5H21.1768V18.5375C21.1768 16.6396 21.1383 14.2063 18.536 14.2063C15.8953 14.2063 15.4901 16.2677 15.4901 18.401V26.5H10.416V10.1427H15.2871V12.374H15.358C16.0361 11.0886 17.6925 9.73238 20.1635 9.73238C25.3041 9.73238 26.2491 13.1178 26.2491 17.5146V26.5H26.2448Z"
                          fill="url(#paint0_linear)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="13.9996"
                            y1="2"
                            x2="13.9996"
                            y2="26.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#35B5FC" />
                            <stop offset="1" stop-color="#4E37EA" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </a>
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
      <div className="container">
        <img src="img/Line.svg" className="block_line" alt="line" />
      </div>
    </div>
  );
};

export default Team;
