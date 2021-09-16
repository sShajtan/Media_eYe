import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './ProfileSubscription.css';
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
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
  const { className, style, onClick } = props;
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

const ProfileSubscription = (props) => {
  const theme = useSelector((state) => state.app.darkTheme);

var settings1 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
     responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: true,
           dots: true
        }
      }
    ]
  };

  return (
    <div className="profile_sub_page">
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
        <h2>Subscription</h2>
        <div className="profile_sub_page_main">
            <Slider {...settings1}>
              <div>
                <div className="profile_sub_slide profile_sub_slide_1">
                  <h4>My eYe</h4>
                  <p>Free to mint individual NFTs (excluding gas fees), 1 x 721 NFT only (minting function limited), 1155 NFT minting function unlimited, Campaign Launcher (Locked), upload up to 200 MB (free of charge)</p>
                  <p>A user can mint 1 x 721 NFTs only, for free. Up to 10 NFT every 30-day cycle</p>
                  <button className="sub_button"><span>Subscribe</span></button>
              </div>
              </div>
              <div>
                <div className="profile_sub_slide profile_sub_slide_2">
                  <h4>Business eYe</h4>
                  <span>Level 1</span>
                  <p>Flat fee of $30 dollars to mint up to 10 x 721 NFTs  (minting function limited), 1155 NFT minting function unlimited, Per 30-day cycle, unlimited Launcher Access, upload up to 200 MB (free of charge).</p>
                  <p>Users can launch NFT campaigns and whitelist up to 10 addresses to be able to mint them</p>
                  <button className="sub_button"><span>Subscribe</span></button>
              </div>
              </div>
              <div>
                <div className="profile_sub_slide profile_sub_slide_3">
                  <h4>Business eYe</h4>
                  <span>Level 2</span>
                  <p>Flat fee of $50 to mint an unlimited amount of NFTs per 30-day cycle. Unlimited Launcher Access, upload up to 200 MB (free of charge)</p>
                  <p>Users can launch NFT campaigns and whitelist an unlimited amount of addresses to be able to receive them</p>
                  <button className="sub_button"><span>Subscribe</span></button>
              </div>
              </div>
            </Slider>
        </div>
    </div>
  );
};

export default ProfileSubscription;
