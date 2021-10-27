import React, { useRef, useState } from 'react';
import './ExploreBlock.css';
import Timer from 'react-compound-timer';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const ExploreBlock = (props) => {
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

  let link = '/product';
  if (product) {
    if (product.isBunding) {
      link = '/product-bunding';
    }
    if (product.isAuction) {
      link = '/product-auction';
    }
    if (product.isBunding & product.isAuction) {
      link = '/product-bunding-auction';
    }
  }
  return (
    <div className="explore_block_wrapper ">
      <div className="explore_block">
        <Link
          to={{
            pathname: link,
            state: { product }
          }}
        >
          <div
            className={
              product
                ? product.isBunding !== undefined
                  ? 'explore_block_img bunding_block'
                  : 'explore_block_img'
                : null
            }
          >
            <Slider {...settings} ref={sliderRef}>
              {product ? (
                product.img.map((image, i) => (
                  <React.Fragment key={i}>
                    <div className="explore_block_img_wrapper">
                      <div>
                        <img src={image} alt="nft_card" />
                      </div>
                    </div>
                  </React.Fragment>
                ))
              ) : (
                <React.Fragment>
                  <div className="explore_block_img_wrapper">
                    <div>
                      <img src="../../img/marketplace_img.png" alt="product" />
                    </div>
                  </div>
                </React.Fragment>
              )}
            </Slider>

            {product ? (
              product.isAuction ? (
                <div className="explore_block_timer">
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
              ) : null
            ) : null}

            {product ? (
              product.isBunding ? (
                <div
                  className="explorer_block_buttons"
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
          <h6>
            Demo Title, Demo Title{' '}
            {mintedBlock ? (
              <span className="minted_block_span"> {mintedBlock} </span>
            ) : null}
            {charities ? (
              <span className="charities_percent_block">
                <img src="../../img/heart_hand.png" alt="charities" />
                {charities}%
              </span>
            ) : null}
          </h6>
          <a href="/">@user123</a>
          <div className="explore_block_footer">
            <span>
              {product ? (
                product.isBunding ? (
                  'Bundle of ' + product.img.length
                ) : (
                  <React.Fragment>
                    <div
                      className="like_wrapper"
                      onClick={() => setLike(!like)}
                    >
                      <div
                        className={like ? 'scattering active' : 'scattering'}
                      ></div>
                    </div>
                    1,2 k
                  </React.Fragment>
                )
              ) : (
                <React.Fragment>
                  <div className="like_wrapper" onClick={() => setLike(true)}>
                    <div
                      className={like ? 'scattering active' : 'scattering'}
                    ></div>
                  </div>
                  1,2 k
                </React.Fragment>
              )}
            </span>
            {product ? (
              product.isSold ? (
                <span className="sold">SOLD</span>
              ) : (
                <span className="count">
                  {product.isAuction ? 'Last bid: ' : null}0.053 ETH
                </span>
              )
            ) : (
              <span className="count">0.053 ETH</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreBlock;
