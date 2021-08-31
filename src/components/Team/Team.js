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
                <img src="img/team/yampolskiy.png" />
                <div>
                  <h6>Victor Yampolsky</h6>
                  <a
                    href="https://www.linkedin.com/in/victor-y-76333b9b/"
                    target="_blank"
                  >
                    <Linkedinprofileicon />
                  </a>
                </div>
                <span>Co-Founder, Business Development and Growth</span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <img src="img/team/stefan.png" />
                <div>
                  <h6>Stefan Arsenijevic</h6>
                  <a
                    href="https://www.linkedin.com/in/stefan-arsenijevic-73ab54111/"
                    target="_blank"
                  >
                    <Linkedinprofileicon />
                  </a>
                </div>
                <span>
                  Senior Marketing Manager, Web Developer and SEO Expert
                </span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <img src="img/team/anda.png" />
                <div>
                  <h6>Felipe De Anda</h6>
                  <a
                    href="https://www.linkedin.com/in/felipe-de-anda-0769ba1bb/"
                    target="_blank"
                  >
                    <Linkedinprofileicon />
                  </a>
                </div>
                <span>Co-Founder, Senior Manager Growth and Development</span>
              </div>
            </div>

            <div className="team_slide_wrapper">
              <div className="team_slide">
                <img src="img/team/shaitanov.png" />
                <div>
                  <h6>Anatolii Shaitanov</h6>
                  <a
                    href="https://www.linkedin.com/in/anatolii-shaitanov-788a6819b/"
                    target="_blank"
                  >
                    <Linkedinprofileicon />
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
                  <a
                    href="https://www.linkedin.com/in/roy-chong-0914/"
                    target="_blank"
                  >
                    <Linkedinprofileicon />
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
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/jcommons"
                  >
                    <Linkedinprofileicon />
                  </a>
                </div>
                <span>
                  Co - Founder, Senior Solidity Developer and Smart Contracts
                  Architect
                </span>
              </div>
            </div>

            <div className="team_slide_wrapper">
              <div className="team_slide">
                <img src="img/team/gupta.png" />
                <div>
                  <h6>Harish D. Gupta</h6>
                  <a
                    href="https://www.linkedin.com/in/felipe-de-anda-0769ba1bb/"
                    target="_blank"
                  >
                    <Linkedinprofileicon />
                  </a>
                </div>
                <span>Finance and Economic Planning</span>
              </div>
            </div>

            <div className="team_slide_wrapper">
              <div className="team_slide">
                <img src="img/team/assangaliyev.png" />
                <div>
                  <h6>Askar Assangaliyev</h6>
                  <a
                    href="https://www.linkedin.com/in/askar-assangaliyev-722bbb37/"
                    target="_blank"
                  >
                    <Linkedinprofileicon />
                  </a>
                </div>
                <span className="askar">
                  Co-Founder, Director of Eurasia Accelerator Partnerships,
                  Investments and Business Development
                </span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <img src="img/team/newman.png" />
                <div>
                  <h6>Shimon Newman</h6>
                  <a
                    href="https://www.linkedin.com/in/shimon-newman-671928153/"
                    target="_blank"
                  >
                    <Linkedinprofileicon />
                  </a>
                </div>
                <span>Co-Founder Tokenomics Expert</span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <img src="img/team/shill.png" />
                <div>
                  <h6>King Shill</h6>
                  <a>
                    <Linkedinprofileicon />
                  </a>
                </div>
                <span>Ci-Founder, Senior Developer</span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <img src="img/team/ruslan.png" />
                <div>
                  <h6>Ruslan Gavriljuk</h6>
                  <a>
                    <Linkedinprofileicon />
                  </a>
                </div>
                <span>Front-end Developer</span>
              </div>
            </div>
            <div className="team_slide_wrapper">
              <div className="team_slide">
                <img src="img/team/roma.png" />
                <div>
                  <h6>Roman Ferlii</h6>
                  <a>
                    <Linkedinprofileicon />
                  </a>
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
