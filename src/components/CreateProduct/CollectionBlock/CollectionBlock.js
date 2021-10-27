import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './CollectionBlock.css';
import Slider from 'react-slick';
import Timer from 'react-compound-timer/build';

const MarketplaceBlock = (props) => {
  const { id, activeToken, product } = props;
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
                  <React.Fragment>
                    <div className="explore_block_img_wrapper" key={i}>
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

        <div className="explore_block_info explore_block_info_creat_collection">
          <div>
            <h6>Demo Title, Demo Title </h6>
            {activeToken === '1155' ? (
              <div>
                <label>
                  Supply
                  <input type="number" placeholder="10" />
                </label>
              </div>
            ) : null}
          </div>
          <div className="on_sale_in_checkbox">
            <input id={id} type="checkbox" />
            <label htmlFor={id}>
              <span></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceBlock;
