import React from 'react';
import FilterAccount from '../../ContentMarketplace/Filter/FilterAccount';
import './CharitiesPlace.css';
import Slider from 'react-slick';
import CharitiesSingleBlock from '../CharitiesSingleBlock/CharitiesSingleBlock';
import { useHistory } from 'react-router-dom';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      data-role="none"
      className="slick-arrow slick-next"
      onClick={onClick}
    >
      <span>&#8594;</span>
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
      <span>&#8592;</span>
    </button>
  );
}

const CharitiesPlace = () => {
  let history = useHistory();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 1,
    arrows: true,
    autoplay: false,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
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
                <CharitiesSingleBlock />
                <CharitiesSingleBlock isAuction="true" />
                <CharitiesSingleBlock />
                <CharitiesSingleBlock isAuction="true" />
                <CharitiesSingleBlock />
                <CharitiesSingleBlock isAuction="true" />
                <CharitiesSingleBlock />
                <CharitiesSingleBlock />
              </Slider>
            </div>
          </div>
          <div className="charities_place_creators">
            <div className="charities_place_creators_header">
              <h4>NFTs by Creators</h4>
            </div>
            <div className="charities_place_creators_main">
              <CharitiesSingleBlock />
              <CharitiesSingleBlock isAuction="true" />
              <CharitiesSingleBlock />
              <CharitiesSingleBlock isAuction="true" />
              <CharitiesSingleBlock />
              <CharitiesSingleBlock isAuction="true" />
              <CharitiesSingleBlock />
              <CharitiesSingleBlock />
            </div>
          </div>
        </div>
        <button className="load_more"> Load more</button>
      </div>
    </div>
  );
};

export default CharitiesPlace;
