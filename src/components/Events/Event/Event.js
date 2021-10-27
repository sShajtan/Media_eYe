import React from 'react';
import Down from '../../Icons/down';
import './Event.css';
import Slider from 'react-slick';
import { useHistory } from 'react-router-dom';
import SampleNextArrow from '../../SampleNextArrow/SampleNextArrow';
import SamplePrevArrow from '../../SamplePrevArrow/SamplePrevArrow';
import ExploreBlock from '../../ContentMarketplace/ExploreBlock/ExploreBlock';
import limitDotsSlider from '../../../utils/limitDotsSlider';

const products = [
  {
    img: ['../../img/home_explore/1.png'],
    isAuction: true,
    fullImage: ['../../img/home_explore/f1.jpg']
  },
  {
    img: ['../../img/home_explore/2.png'],
    isSold: true,
    fullImage: ['../../img/home_explore/f2.jpg']
  },
  {
    img: ['../../img/home_explore/3.png'],
    isAuction: true,
    fullImage: ['../../img/home_explore/f3.jpg']
  },
  {
    img: ['../../img/home_explore/4.png'],
    fullImage: ['../../img/home_explore/f4.jpg']
  },
  {
    img: ['../../img/home_explore/5.png'],
    fullImage: ['../../img/home_explore/f5.jpg'],
    isAuction: true,
    isCharity: true
  },
  {
    img: ['../../img/home_explore/6.png'],
    isSold: true,
    fullImage: ['../../img/home_explore/f6.jpg']
  },
  {
    img: ['../../img/home_explore/7.png', '../../img/home_explore/3.png'],
    isBunding: true,
    fullImage: [
      '../../img/home_explore/f7.jpg',
      '../../img/home_explore/f3.jpg'
    ]
  },
  {
    img: ['../../img/home_explore/8.png'],
    fullImage: ['../../img/home_explore/f8.jpg'],
    isCharity: true
  }
];

const Event = (props) => {
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
          slidesToShow: 1,
          dots: true,
          arrows: false,
          rows: 1
        }
      },
      {
        breakpoint: 574,
        settings: {
          dots: true,
          slidesToShow: 1,
          rows: 1,
          arrows: false
        }
      }
    ]
  };
  return (
    <div className="event_single">
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
        <div className="event_single_main">
          <button
            className="event_back"
            onClick={() => history.push('/events-gallery')}
          >
            <Down /> Events
          </button>
          <div className="event_single_header">
            <div className="event_single_header_left">
              <div className="event_single_header_img_wrapper">
                <img src="../../img/home1.png" alt="event" />
              </div>
            </div>
            <div className="event_single_header_right">
              <div className="event_single_header_text">
                <h5>NFT Crypto Comicon</h5>
                <br />
                <p>Description:</p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{' '}
                </p>
              </div>
              <div className="event_single_header_footer">
                <span>
                  <img src="../../img/calendar.png" alt="calendar" /> 17.04.2021
                </span>
                <span>
                  <img src="../../img/men.png" alt="men" /> 555
                </span>
              </div>
              <button className="join_btn">Join</button>
            </div>
          </div>
        </div>
      </div>
      <div className="event_single_slider_wrapper">
        <div className="container">
          <div className="event_single_slider">
            <Slider {...settings}>
              {products.map((product, i) => (
                <ExploreBlock product={product} key={i} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
