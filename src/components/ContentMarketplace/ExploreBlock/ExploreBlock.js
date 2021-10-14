import React, { useRef } from 'react';
import './ExploreBlock.css';
import Timer from 'react-compound-timer';
import Slider from 'react-slick';

const ExploreBlock = (props) => {
  const { isSold, isAuction, isBunding } = props;
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 1,
    arrows: false,
    fade: true,
    autoplay: false,
    pauseOnHover: true
  };

  // const next = {
  //   this.slider.slickNext();
  // }
  // const previous = {
  //   this.slider.slickPrev();
  // }

  return (
    <div className="marketplace_block_wrapper explore_block_wrapper">
      <div className="marketplace_block">
        <div
          className={
            isBunding
              ? 'marketplace_block_img bunding_block'
              : 'marketplace_block_img'
          }
        >
          <Slider {...settings} ref={sliderRef}>
            <div className="marketplace_block_img_wrapper">
              <img
                src="../../img/marketplace_img.png"
                alt="marketplace block"
              />
            </div>
            <div className="marketplace_block_img_wrapper">
              <img
                src="../../img/marketplace_img.png"
                alt="marketplace block"
              />
            </div>
          </Slider>

          {isAuction ? (
            <div className="selected_block_timer">
              <span>
                <Timer initialTime={550000000} direction="backward">
                  {() => (
                    <React.Fragment>
                      <Timer.Hours />:
                      <Timer.Minutes />:
                      <Timer.Seconds />
                    </React.Fragment>
                  )}
                </Timer>
              </span>
              left <img src="../../img/fire.png" alt="fire" />
            </div>
          ) : null}
        </div>
        <div className="marketplace_block_info">
          <h6>
            Demo Title, Demo Title{' '}
            {isBunding ? (
              <div className="explorer_block_buttons">
                <span onClick={() => sliderRef?.current?.slickNext()}>
                  <img src="../../img/left_arrow.png" alt="left" />
                </span>
                <span onClick={() => sliderRef?.current?.slickPrev()}>
                  <img src="../../img/right_arrow.png" alt="right" />
                </span>
              </div>
            ) : null}
          </h6>
          <a href="/">@user123</a>
          <div className="marketplace_block_footer">
            <span>
              {isBunding ? (
                'Bundle of 5'
              ) : (
                <React.Fragment>
                  <img src="../../img/heart.svg" alt="heart" /> 1,2 k
                </React.Fragment>
              )}
            </span>
            {isSold ? (
              <span className="sold">SOLD</span>
            ) : (
              <span className="count">
                {isAuction ? 'Last bet: ' : null}0.053 ETH
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreBlock;
