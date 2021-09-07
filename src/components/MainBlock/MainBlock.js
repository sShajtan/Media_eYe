import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import WOW from 'wowjs';
import './MainBlock.css';

const MainBlock = (props) => {
  const { togglePopup } = props;
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [nav3, setNav3] = useState(null);
  const slider1 = useRef();
  const slider2 = useRef();
  const slider3 = useRef();

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
    setNav3(slider3.current);
    const wow = new WOW.WOW({ live: false });
    wow.init();
  }, []);

  var settings1 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false
  };
  var settings2 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: true
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: true,
          vertical: true
        }
      }
    ]
  };
  var settings3 = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false
  };

  return (
    <div className="main_block">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <div className="container">
        <div className="main_block_main">
          <div className="main_block_main_left">
            <img
              alt="MeDIA eYe NFT Portal logo"
              className="animate__animated animate__fadeInLeft wow logo"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
              src="img/big_main_logo.png"
            />
            <h6
              className="animate__animated animate__fadeInUp wow"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              A frictionless platform for creating, trading, and distributing
              NFTs.
            </h6>
            <div className="main_left_buttons">
              <a
                className="learn_more"
                href="https://mediaeyenft.com/pitchdeck/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Learn More</span>
              </a>
              <button className="sign_up" onClick={togglePopup}>
                <span>Sign Up</span>
              </button>
            </div>
            <div className="left_slider">
              <h4>NFT Art</h4>
              <div className="left_slider_main">
                <Slider asNavFor={nav3} ref={slider2} {...settings2}>
                  <div className="left_slide_wrapper">
                    <div className="left_slide">
                      <img src="img/ava.png" alt="avatar" />
                      <div>
                        <span>Creator</span>
                        <h5>Media</h5>
                      </div>
                    </div>
                  </div>
                  <div className="left_slide_wrapper">
                    <div className="left_slide">
                      <img src="img/ava.png" alt="avatar" />
                      <div>
                        <span>Creator</span>
                        <h5>Media</h5>
                      </div>
                    </div>
                  </div>
                  <div className="left_slide_wrapper">
                    <div className="left_slide">
                      <img src="img/ava.png" alt="avatar" />
                      <div>
                        <span>Creator</span>
                        <h5>Media</h5>
                      </div>
                    </div>
                  </div>
                  <div className="left_slide_wrapper">
                    <div className="left_slide">
                      <img src="img/ava.png" alt="avatar" />
                      <div>
                        <span>Creator</span>
                        <h5>Media</h5>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="main_block_main_right">
            <div className="main_block_sliders">
              <svg
                className="slider_border"
                width="100%"
                viewBox="0 0 699 713"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56.6877 10.2065L15.1762 43.0133V285.783L23.6571 291.98V328.067L17.8544 332.806H7.14176V348.845H4.4636V702.064L653.471 701.7L688.287 672.174V613.122L680.699 606.56V482.988H699V713H0V0H699V446.536L686.948 438.152V330.984H675.343L670.433 327.703V247.144L687.841 232.928V115.188L674.004 102.794H656.596L542.774 10.2065H56.6877Z"
                  fill="#141233"
                />
              </svg>
              <Slider asNavFor={nav2} ref={slider1} {...settings1}>
                <div className="main_slide">
                  <img src="img/main_slider/1.jpg" alt="slide"></img>
                </div>
                <div className="main_slide">
                  <img src="img/main_slider/2.jpg" alt="slide"></img>
                </div>
                <div className="main_slide">
                  <img src="img/main_slider/3.jpg" alt="slide"></img>
                </div>
                <div className="main_slide">
                  <img src="img/main_slider/4.jpg" alt="slide"></img>
                </div>
              </Slider>
              <div className="right_small_slider">
                <Slider asNavFor={nav1} ref={slider3} {...settings3}>
                  <div className="main_small_slide">
                    <div>
                      <img src="img/ava.png" alt="avatar" />
                      <span>Klarens Malluta</span>
                    </div>
                  </div>
                  <div className="main_small_slide">
                    <div>
                      <img src="img/ava.png" alt="avatar" />
                      <span>Klarens Malluta</span>
                    </div>
                  </div>
                  <div className="main_small_slide">
                    <div>
                      <img src="img/ava.png" alt="avatar" />
                      <span>Klarens Malluta</span>
                    </div>
                  </div>
                  <div className="main_small_slide">
                    <div>
                      <img src="img/ava.png" alt="avatar" />
                      <span>Klarens Malluta</span>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
