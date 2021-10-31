import React from 'react';
import limitDotsSlider from '../../../utils/limitDotsSlider';
import SampleNextArrow from '../../SampleNextArrow/SampleNextArrow';
import SamplePrevArrow from '../../SamplePrevArrow/SamplePrevArrow';
import Slider from 'react-slick';
import './HubMainPartner.css';
import { useLocation } from 'react-router-dom';
import HubProductBlock from '../HubProductBlock/HubProductBlock';
import HubCollectionBlock from '../HubCollectionBlock/HubCollectionBlock';

const slider_top_bids = [
  {
    img: ['../../img/hub_product_wrapper.png'],
    fullImage: ['../../img/top_bids_home/f1.jpg']
  },
  {
    img: ['../../img/hub_product_wrapper.png'],
    fullImage: ['../../img/top_bids_home/f2.jpg']
  },
  {
    img: ['../../img/hub_product_wrapper.png'],
    fullImage: ['../../img/top_bids_home/f3.jpg']
  },
  {
    img: ['../../img/hub_product_wrapper.png'],
    fullImage: ['../../img/top_bids_home/f4.jpg']
  },
  {
    img: ['../../img/hub_product_wrapper.png'],
    fullImage: ['../../img/top_bids_home/f1.jpg']
  },
  {
    img: ['../../img/hub_product_wrapper.png'],
    fullImage: ['../../img/top_bids_home/f2.jpg']
  },
  {
    img: ['../../img/hub_product_wrapper.png'],
    fullImage: ['../../img/top_bids_home/f3.jpg']
  },
  {
    img: ['../../img/hub_product_wrapper.png'],
    fullImage: ['../../img/top_bids_home/f4.jpg']
  }
];

const slider_auctions = [
  {
    img: ['../../img/hub_product_wrapper.png'],
    fullImage: ['../../img/top_bids_home/f1.jpg'],
    isAuction: true
  },
  {
    img: ['../../img/hub_product_wrapper.png'],
    fullImage: ['../../img/top_bids_home/f2.jpg'],
    isAuction: true
  },
  {
    img: ['../../img/hub_product_wrapper.png'],
    fullImage: ['../../img/top_bids_home/f3.jpg'],
    isAuction: true
  },
  {
    img: ['../../img/hub_product_wrapper.png'],
    fullImage: ['../../img/top_bids_home/f4.jpg'],
    isAuction: true
  },
  {
    img: ['../../img/hub_product_wrapper.png'],
    fullImage: ['../../img/top_bids_home/f1.jpg'],
    isAuction: true
  },
  {
    img: ['../../img/hub_product_wrapper.png'],
    fullImage: ['../../img/top_bids_home/f2.jpg'],
    isAuction: true
  },
  {
    img: ['../../img/hub_product_wrapper.png'],
    fullImage: ['../../img/top_bids_home/f3.jpg'],
    isAuction: true
  },
  {
    img: ['../../img/hub_product_wrapper.png'],
    fullImage: ['../../img/top_bids_home/f4.jpg']
  }
];
const slider_top_collection = [
  {
    img: '../../img/hub_collection.png',
    ava: '../../../img/avatar_2.png'
  },
  {
    img: '../../img/hub_collection.png',
    ava: '../../../img/avatar_2.png'
  },
  {
    img: '../../img/hub_collection.png',
    ava: '../../../img/avatar_2.png'
  },
  {
    img: '../../img/hub_collection.png',
    ava: '../../../img/avatar_2.png'
  },
  {
    img: '../../img/hub_collection.png',
    ava: '../../../img/avatar_2.png'
  },
  {
    img: '../../img/hub_collection.png',
    ava: '../../../img/avatar_2.png'
  }
];

const HubMainPartner = (props) => {
  const location = useLocation();
  const settingsBids = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 1,
    arrows: true,
    autoplay: false,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: 'slider_explore_block',
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
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 574,
        settings: {
          dots: true,
          slidesToShow: 1,
          arrows: false
        }
      },
      {
        breakpoint: 374,
        settings: {
          dots: true,
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };
  const settingsCollention = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 1,
    arrows: true,
    autoplay: false,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: 'slider_collection',
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
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 574,
        settings: {
          dots: true,
          arrows: false,
          rows: 2,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 374,
        settings: {
          dots: true,
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="hub_main_partner">
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
        <div className="hub_main_partner_header">
          <div className="hub_main_partner_header_logo">
            <img
              src={
                location.state
                  ? location.state.img
                    ? location.state.img
                    : '../../../img/hub_main/rarible.png'
                  : '../../../img/hub_main/rarible.png'
              }
            />
          </div>
        </div>
        <div className="hub_partner_hot_bids">
          <h4>
            Hot bids <img src="../../img/fire_hub.png" />
          </h4>
          <Slider {...settingsBids}>
            {slider_top_bids.map((product, i) => (
              <HubProductBlock product={product} key={i} />
            ))}
          </Slider>
        </div>
        <div className="hub_partner_auctions">
          <h4>Live auctions</h4>
          <Slider {...settingsBids}>
            {slider_auctions.map((product, i) => (
              <HubProductBlock product={product} key={i} />
            ))}
          </Slider>
        </div>
        <div className="hub_partner_collections">
          <h4>
            Hot collections <img src="../../img/boom.png" alt="explosion" />
          </h4>
          <Slider {...settingsCollention}>
            {slider_top_collection.map((collection, i) => (
              <HubCollectionBlock key={i} collection={collection} />
            ))}
          </Slider>
        </div>
        <div className="hub_partner_marketplace">
          <h4>NFT Marketplace</h4>
          <div className=" hub_partner_marketplace_main">
            {slider_top_bids.map((product, i) => (
              <HubProductBlock product={product} key={i} marketplace={true} />
            ))}
          </div>
          <button className="load_more_hub">
            <span>Load more</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HubMainPartner;
