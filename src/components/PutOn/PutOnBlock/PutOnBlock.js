import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './PutOnBlock.css';
import Slider from 'react-slick';

const PutOnBlock = (props) => {
  const { product, addImage } = props;
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
    <div className="explore_block_wrapper">
      <div className="explore_block">
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

        <div className="explore_block_info put_on_block_single">
          <div>
            <h6>Demo Title, Demo Title </h6>
            <span className="put_on_block_single_quantity">
              {product.quantity ? 'Quantity ' + product.quantity : null}{' '}
            </span>
            {product.creator ? null : <a href="/">@user123</a>}
          </div>
          <div className="on_sale_in_checkbox">
            <input
              id={product.id}
              type="checkbox"
              onChange={(e) => addImage(e)}
            />
            <label htmlFor={product.id}>
              <span></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PutOnBlock;
