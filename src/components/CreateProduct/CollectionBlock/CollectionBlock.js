import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './CollectionBlock.css';
import Slider from 'react-slick';

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

  return (
    <div className="explore_block_wrapper ">
      <div className="explore_block">
        <Link
          to={{
            pathname: '/product',
            state: { product }
          }}
        >
          <div className="explore_block_img">
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
