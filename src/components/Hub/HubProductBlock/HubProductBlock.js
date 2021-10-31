import React, { useRef, useState } from 'react';
import './HubProductBlock.css';
import Timer from 'react-compound-timer';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import CheckHub from '../../Icons/CheckHub';

const HubProductBlock = (props) => {
  const { product, mintedBlock, charities } = props;
  const sliderRef = useRef();
  const [like, setLike] = useState(false);

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
    pauseOnHover: true,
    className: 'explorer_slide'
  };

  return (
    <div className="hub_block_wrapper">
      <div className="hub_block">
        <div className="hub_block_header">
          <div className="hub_block_header_avatar">
            <div className="avatar_1">
              <img src="../../../img/avatar_1.png" alt="avatar" />
            </div>
            <div className="avatar_2">
              <img src="../../../img/avatar_2.png" alt="avatar" />
            </div>
            <CheckHub />
          </div>
          <span>&#8226; &#8226; &#8226;</span>
        </div>
        <Link to="hub/partner/product">
          <div
            className={
              product
                ? product.isBunding !== undefined
                  ? 'hub_block_img bunding_block'
                  : 'hub_block_img'
                : null
            }
          >
            <Slider {...settings} ref={sliderRef}>
              {product ? (
                product.img.map((image, i) => (
                  <React.Fragment key={i}>
                    <div className="hub_block_img_wrapper">
                      <div>
                        <img src={image} alt="nft_card" />
                      </div>
                    </div>
                  </React.Fragment>
                ))
              ) : (
                <React.Fragment>
                  <div className="hub_block_img_wrapper">
                    <div>
                      <img src="../../img/marketplace_img.png" alt="product" />
                    </div>
                  </div>
                </React.Fragment>
              )}
            </Slider>

            {product ? (
              product.isAuction ? (
                <div className="hub_block_timer">
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
                  left <img src="../../img/fire_hub.png" alt="fire" />
                </div>
              ) : null
            ) : null}

            {product ? (
              product.isBunding ? (
                <div
                  className="hub_block_buttons"
                  onClick={(event) => event.preventDefault()}
                >
                  <span onClick={() => sliderRef?.current?.slickNext()}>
                    <img src="../../img/left_arrow.png" alt="left" />
                  </span>
                  <span onClick={() => sliderRef?.current?.slickPrev()}>
                    <img src="../../img/right_arrow.png" alt="right" />
                  </span>
                </div>
              ) : null
            ) : null}
          </div>
        </Link>

        <div className="explore_block_info">
          <h6>#LetsWalk - Robo #033</h6>
          {product ? (
            product.isAuction ? (
              <div className="explore_block_info_from">Highest bid 1/1</div>
            ) : props.marketplace ? (
              <div className="explore_block_info_from">
                <span style={{ marginLeft: 0 }}> 4.5 ETH </span> 1/1
              </div>
            ) : (
              <div className="explore_block_info_from">
                From <span> 4.5 ETH </span> 1/10
              </div>
            )
          ) : null}

          <div className="hub_block_footer">
            {props.marketplace ? (
              <span className="count">Place a bid</span>
            ) : (
              <span className="count">Bid 0.053 ETH</span>
            )}
            <span>
              <div className="like_wrapper" onClick={() => setLike(true)}>
                <div
                  className={like ? 'scattering active' : 'scattering'}
                ></div>
              </div>
              1,2 k
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubProductBlock;
