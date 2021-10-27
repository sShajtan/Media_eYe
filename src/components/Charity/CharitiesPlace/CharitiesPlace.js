import React from 'react';
import FilterAccount from '../../ContentMarketplace/Filter/FilterAccount';
import './CharitiesPlace.css';
import Slider from 'react-slick';
import { useHistory } from 'react-router-dom';
import SamplePrevArrow from '../../SamplePrevArrow/SamplePrevArrow';
import SampleNextArrow from '../../SampleNextArrow/SampleNextArrow';
import ExploreBlock from '../../ContentMarketplace/ExploreBlock/ExploreBlock';
import limitDotsSlider from '../../../utils/limitDotsSlider';

const CharitiesPlace = () => {
  let history = useHistory();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 1,
    arrows: false,
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
          rows: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          rows: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          rows: 4
        }
      },
      {
        breakpoint: 574,
        settings: {
          dots: true,
          slidesToShow: 1,
          rows: 1
        }
      }
    ]
  };
  return (
    <div className="charities_place">
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
        <div className="charities_place_header">
          <div>
            <img src="../../img/charities_place_header.png" alt="banner" />
            <img
              src="../../img/charities_place_header_mobile.png"
              alt="banner"
            />
          </div>
          <div onClick={() => history.push('/charities')}>
            <img
              src="../../img/charities_place_header_right.png"
              alt="banner"
            />
          </div>
        </div>
        <div className="charities_place_main">
          <div className="charities_place_nfts">
            <div className="charities_place_nfts_header">
              <h4>NFTs by Charities</h4>
              <FilterAccount />
            </div>
            <div className="charities_place_nfts_main">
              <Slider {...settings}>
                <ExploreBlock charities={50} />
                <ExploreBlock charities={50} />
                <ExploreBlock charities={50} />
                <ExploreBlock charities={40} />
                <ExploreBlock charities={50} />
                <ExploreBlock charities={40} />
                <ExploreBlock charities={50} />
                <ExploreBlock charities={50} />
              </Slider>
            </div>
          </div>
          <div className="charities_place_creators">
            <div className="charities_place_creators_header">
              <h4>NFTs by Creators</h4>
            </div>
            <div className="charities_place_creators_main">
              <ExploreBlock charities={50} />
              <ExploreBlock charities={50} />
              <ExploreBlock charities={50} />
              <ExploreBlock charities={50} />
              <ExploreBlock charities={50} />
              <ExploreBlock charities={50} />
              <ExploreBlock charities={50} />
              <ExploreBlock charities={50} />
            </div>
          </div>
        </div>
        <button className="load_more"> Load more</button>
      </div>
    </div>
  );
};

export default CharitiesPlace;
