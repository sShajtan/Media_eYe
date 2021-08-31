import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "./Partners.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      data-role="none"
      className="slick-arrow slick-next"
      onClick={onClick}
    >
      <span></span>
      <i>&#8594;</i>
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
      <span></span>
      <i>&#8592;</i>
    </button>
  );
}

const Partners = () => {
  const theme = useSelector((state) => state.app.darkTheme);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState();

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
        },
      },
    ],
  };

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  });

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <div className="partners">
      <div className="container">
        <img
          className="title animate__animated animate__fadeIn wow"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
          src="img/partners_title.png"
        />
        <div
          className="team_main animate__animated animate__fadeInUp wow"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
        >
          <Slider {...settings}>
            <div className="partners_slide_wrapper">
              <div className="partners_slide">
                <a href="https://quai-invest.net/" target="_blank">
                  <img src="img/partners/1.png" />
                </a>
              </div>
            </div>
            <div className="partners_slide_wrapper">
              <div className="partners_slide">
                <a href="https://filecoin.io/" target="_blank">
                  <img
                    src={
                      theme ? "img/partners/2-dark.png" : "img/partners/2.png"
                    }
                  />
                </a>
              </div>
            </div>
            <div className="partners_slide_wrapper">
              <div className="partners_slide">
                <a href="https://www.mogulproductions.com/" target="_blank">
                  <img
                    src={
                      theme ? "img/partners/3-dark.png" : "img/partners/3.png"
                    }
                  />
                </a>
              </div>
            </div>
            <div className="partners_slide_wrapper">
              <div className="partners_slide">
                <a href="https://ramp.network/" target="_blank">
                  <img
                    src={
                      theme ? "img/partners/6-dark.png" : "img/partners/6.png"
                    }
                  />
                </a>
              </div>
            </div>
            <div className="partners_slide_wrapper">
              <div className="partners_slide">
                <a href="https://www.bigleap.com/" target="_blank">
                  <img
                    src={
                      theme ? "img/partners/4-dark.png" : "img/partners/4.png"
                    }
                  />
                </a>
              </div>
            </div>

            {/* {this.state.width > 768 ? <div className="partners_slide_wrapper empty"></div> : null} */}

            <div className="partners_slide_wrapper">
              <div className="partners_slide">
                <a href="https://apeswap.finance/" target="_blank">
                  <img
                    src={theme ? "img/partners/8.png" : "img/partners/8.png"}
                  />
                </a>
              </div>
            </div>
            {/* <div className="partners_slide_wrapper">
                                <div className="partners_slide">
                                    <a href="https://www.rampdefi.com/" target="_blank">
                                        <img src={theme ? "img/partners/7-dark.png" : "img/partners/7.png"} />
                                    </a>
                                </div>
                            </div> */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Partners;
