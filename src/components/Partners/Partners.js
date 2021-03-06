import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import './Partners.css';

function SampleNextArrow(props) {
  const { onClick } = props;
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
  const { onClick } = props;
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

const Partners = (props) => {
  const { toggleBusinessPopup } = props;
  const theme = useSelector((state) => state.app.darkTheme);
  const [width, setWidth] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 3,
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
          rows: 4,
          slidesToShow: 2
        }
      }
    ]
  };

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  });

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div className="partners">
      <div className="partners_wrapper">
        <div className="container">
          <img
            className="title animate__animated animate__fadeIn wow"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
            src="img/partners_title.png"
            alt="Partners"
          />
          <div
            className="team_main animate__animated animate__fadeInUp wow"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            <Slider {...settings}>
              <div className="partners_slide_wrapper">
                <div className="partners_slide">
                  <a
                    href="https://quai-invest.net/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="img/partners/1.png" alt="QUAI Invest" />
                  </a>
                </div>
              </div>
              <div className="partners_slide_wrapper">
                <div className="partners_slide">
                  <a
                    href="https://filecoin.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={
                        theme ? 'img/partners/2-dark.png' : 'img/partners/2.png'
                      }
                      alt="Filecoin"
                    />
                  </a>
                </div>
              </div>
              {width > 768 ? (
                <div className="partners_slide_wrapper empty"></div>
              ) : null}
              <div className="partners_slide_wrapper">
                <div className="partners_slide">
                  <a
                    href="https://twitter.com/squirrel_wallet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={theme ? 'img/partners/9.png' : 'img/partners/9.png'}
                      alt="Mogul Productions"
                    />
                  </a>
                </div>
              </div>
              <div className="partners_slide_wrapper">
                <div className="partners_slide">
                  <a
                    href="https://ramp.network/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={
                        theme ? 'img/partners/6-dark.png' : 'img/partners/6.png'
                      }
                      alt="Ramp"
                    />
                  </a>
                </div>
              </div>
              <div className="partners_slide_wrapper">
                <div className="partners_slide">
                  <a
                    href="https://www.rampdefi.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={
                        theme ? 'img/partners/7-dark.png' : 'img/partners/7.png'
                      }
                      alt="moralis"
                    />
                  </a>
                </div>
              </div>
              <div className="partners_slide_wrapper">
                <div className="partners_slide">
                  <a
                    href="https://www.bigleap.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={
                        theme ? 'img/partners/4-dark.png' : 'img/partners/4.png'
                      }
                      alt="Big Leap"
                    />
                  </a>
                </div>
              </div>

              <div className="partners_slide_wrapper">
                <div className="partners_slide">
                  <a
                    href="https://apeswap.finance/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={theme ? 'img/partners/8.png' : 'img/partners/8.png'}
                      alt="ApeSwap"
                    />
                  </a>
                </div>
              </div>
              {width > 768 ? (
                <div className="partners_slide_wrapper empty"></div>
              ) : null}
            </Slider>
          </div>
          <button className="become_partner" onClick={toggleBusinessPopup}>
            Become a partner
          </button>
        </div>
      </div>
      <div className="container">
        <img src="img/Line.svg" className="block_line" alt="line" />
      </div>
    </div>
  );
};

export default Partners;
