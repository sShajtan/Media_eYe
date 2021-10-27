import React from 'react';
import './MarketplaceSlider.css';
import Slider from 'react-slick';
import SampleNextArrow from '../../SampleNextArrow/SampleNextArrow';
import SamplePrevArrow from '../../SamplePrevArrow/SamplePrevArrow';
import ExploreBlock from '../ExploreBlock/ExploreBlock';
import limitDotsSlider from '../../../utils/limitDotsSlider';

const MarketplaceSlider = (props) => {
  const { title, rows, products } = props;
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: rows,
    slidesPerRow: 1,
    arrows: true,
    autoplay: false,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: () => {
      limitDotsSlider();
    },
    onInit: () => {
      limitDotsSlider();
    },
    onReInit: () => {
      limitDotsSlider();
    },
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          rows: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          rows: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          rows: 1,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 574,
        settings: {
          dots: true,
          rows: 1,
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="marketplace_slider">
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
        <h4>{title}</h4>
        <div className="marketplace_slider_main">
          <Slider {...settings}>
            {products.map((product, i) => (
              <ExploreBlock key={i} product={product} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceSlider;
