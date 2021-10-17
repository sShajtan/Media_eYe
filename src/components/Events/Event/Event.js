import React from 'react';
import Down from '../../Icons/down';
import './Event.css';
import Slider from 'react-slick';
import { useHistory } from 'react-router-dom';
import SampleNextArrow from '../../SampleNextArrow/SampleNextArrow';
import SamplePrevArrow from '../../SamplePrevArrow/SamplePrevArrow';
import EventSingleBlock from '../EventSingleBlock/EventSingleBlock';

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
          dots: true
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
          <div className="event_single_slider">
            <Slider {...settings}>
              <EventSingleBlock isAuction={true} />
              <EventSingleBlock />
              <EventSingleBlock isCharity={true} />
              <EventSingleBlock />
              <EventSingleBlock isAuction={true} isCharity={true} />
              <EventSingleBlock />
              <EventSingleBlock isCharity={true} />
              <EventSingleBlock />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
