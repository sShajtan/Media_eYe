import React, { useState, useRef, useEffect } from 'react';
import './Home.scss';
import { useSelector } from 'react-redux';
import { useHistory, Link, useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import BannerItem from '../../components/Banner/BannerItem';
import SampleNextArrow from '../../components/SampleNextArrow/SampleNextArrow';
import SamplePrevArrow from '../../components/SamplePrevArrow/SamplePrevArrow';
import CollectionBlock from '../../components/ContentMarketplace/CollectionBlock/CollectionBlock';
import Filter from '../../components/ContentMarketplace/Filter/Filter';
import EventsBlock from '../../components/Events/EventsBlock/EventsBlock';
import CharityBtn from '../../components/ContentMarketplace/Filter/CharityBtn/CharityBtn';
import ExploreBlock from '../../components/ContentMarketplace/ExploreBlock/ExploreBlock';
import MenuMarketplace from '../../components/ContentMarketplace/MenuMarketplace/MenuMarketplace';
import { Collapse } from 'react-collapse';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

import 'swiper/swiper-bundle.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import limitDotsSlider from '../../utils/limitDotsSlider';
import CheckDropdown from '../../components/Icons/CheckDropdown';
import TopSellersBlock from '../../components/ContentMarketplace/TopSellersBlock/TopSellersBlock';
import SellersBlock from '../../components/ContentMarketplace/SellersBlock/SellersBlock';
import CountUp from 'react-countup';

const top_slider = [
  {
    title: 'Demo title',
    img: ['../../../img/home1.png'],
    fullImage: ['../../../img/home1.png']
  },
  {
    title: 'Demo title',
    img: ['../../../img/home2.png'],
    fullImage: ['../../../img/home2.png']
  },
  {
    title: 'Demo title',
    img: ['../../../img/home3.png'],
    fullImage: ['../../../img/home3.png']
  },
  {
    title: 'Demo title',
    img: ['../../../img/home1.png'],
    fullImage: ['../../../img/home1.png']
  },
  {
    title: 'Demo title',
    img: ['../../../img/home2.png'],
    fullImage: ['../../../img/home2.png']
  },
  {
    title: 'Demo title',
    img: ['../../../img/home3.png'],
    fullImage: ['../../../img/home3.png']
  }
];

const slider_1 = [
  {
    img: ['../../img/home_slider_top/1.png'],
    fullImage: ['../../img/home_slider_top/f1.jpg']
  },
  {
    img: ['../../img/home_slider_top/2.png'],
    fullImage: ['../../img/home_slider_top/f2.jpg']
  },
  {
    img: ['../../img/home_slider_top/3.png'],
    fullImage: ['../../img/home_slider_top/f3.jpg']
  },
  {
    img: ['../../img/home_slider_top/4.png'],
    fullImage: ['../../img/home_slider_top/f4.jpg']
  },
  {
    img: ['../../img/home_slider_top/5.png'],
    fullImage: ['../../img/home_slider_top/f5.jpg']
  }
];

const slider_top_collection = [
  {
    img: '../../img/top_collection_home/1.png',
    ava: '../../img/top_collection_home/a1.png'
  },
  {
    img: '../../img/top_collection_home/2.png',
    ava: '../../img/top_collection_home/a2.png'
  },
  {
    img: '../../img/top_collection_home/3.png',
    ava: '../../img/top_collection_home/a3.png'
  },
  {
    img: '../../img/top_collection_home/4.png',
    ava: '../../img/top_collection_home/a4.png'
  },
  {
    img: '../../img/top_collection_home/5.png',
    ava: '../../img/top_collection_home/a5.png'
  },
  {
    img: '../../img/top_collection_home/3.png',
    ava: '../../img/top_collection_home/a3.png'
  }
];

const slider_top_bids = [
  {
    img: ['../../img/top_bids_home/1.png'],
    fullImage: ['../../img/top_bids_home/f1.jpg']
  },
  {
    img: ['../../img/top_bids_home/2.png'],
    fullImage: ['../../img/top_bids_home/f2.jpg']
  },
  {
    img: ['../../img/top_bids_home/3.png'],
    fullImage: ['../../img/top_bids_home/f3.jpg']
  },
  {
    img: ['../../img/top_bids_home/4.png'],
    fullImage: ['../../img/top_bids_home/f4.jpg']
  },
  {
    img: ['../../img/top_bids_home/1.png'],
    fullImage: ['../../img/top_bids_home/f1.jpg']
  },
  {
    img: ['../../img/top_bids_home/2.png'],
    fullImage: ['../../img/top_bids_home/f2.jpg']
  },
  {
    img: ['../../img/top_bids_home/3.png'],
    fullImage: ['../../img/top_bids_home/f3.jpg']
  },
  {
    img: ['../../img/top_bids_home/4.png'],
    fullImage: ['../../img/top_bids_home/f4.jpg']
  }
];

const explore = [
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
    isAuction: true
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
    img: ['../../img/home_explore/13.png'],
    fullImage: ['../../img/home_explore/f13.jpg']
  },
  {
    img: ['../../img/home_explore/9.png'],
    fullImage: ['../../img/home_explore/f9.jpg']
  },
  {
    img: [
      '../../img/home_explore/10.png',
      '../../img/home_explore/2.png',
      '../../img/home_explore/3.png',
      '../../img/home_explore/10.png',
      '../../img/home_explore/2.png',
      '../../img/home_explore/3.png'
    ],
    isBunding: true,
    fullImage: [
      '../../img/home_explore/f10.jpg',
      '../../img/home_explore/f2.jpg',
      '../../img/home_explore/f3.jpg',
      '../../img/home_explore/f10.jpg',
      '../../img/home_explore/f2.jpg',
      '../../img/home_explore/f3.jpg'
    ],
    isAuction: true
  },
  {
    img: ['../../img/home_explore/11.png'],
    fullImage: ['../../img/home_explore/f11.jpg']
  },
  {
    img: ['../../img/home_explore/6.png'],
    isSold: true,
    fullImage: ['../../img/home_explore/f6.jpg']
  },
  {
    img: ['../../img/home_explore/7.png'],
    fullImage: ['../../img/home_explore/f7.jpg']
  },
  {
    img: ['../../img/home_explore/9.png'],
    fullImage: ['../../img/home_explore/f9.jpg']
  },
  {
    img: ['../../img/home_explore/6.png'],
    fullImage: ['../../img/home_explore/f6.jpg']
  },
  {
    img: ['../../img/home_explore/16.jpg'],
    fullImage: ['../../img/home_explore/f16.jpg']
  }
];

const productPerPage = 8;
let arrayForHoldingProducts = [];

const Home = (props) => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownSellers, setShowDropdownSellers] = useState(false);
  const [showDropdownSellersDays, setShowDropdownSellersDays] = useState(false);
  const [showDropdownSellersTop, setShowDropdownSellersTop] = useState(false);
  const [activeDays, setActiveDays] = useState(7);
  const [activeSellers, setActiveSellers] = useState('Sellers');
  const [activeSellersTop, setActiveSellersTop] = useState('ETH');
  const [activeSellersDays, setActiveSellersDays] = useState(7);
  const [productToShow, setproductToShow] = useState([]);
  const [next, setNext] = useState(8);
  const { closeNftCollapse } = props;
  const history = useHistory();
  SwiperCore.use([Autoplay, Pagination]);

  const loopWithSlice = (start, end) => {
    const slicedProducts = explore.slice(start, end);
    arrayForHoldingProducts = [...arrayForHoldingProducts, ...slicedProducts];
    setproductToShow(arrayForHoldingProducts);
  };

  useEffect(() => {
    loopWithSlice(0, productPerPage);
  }, []);

  const handleShowMoreProducts = () => {
    loopWithSlice(next, next + productPerPage);
    setNext(next + productPerPage);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 1,
    arrows: false,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    fade: true,
    speed: 900,
    autoplay: true,
    pauseOnHover: true
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
  const settingsCollentionBids = {
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
  const settingsSellers = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    rows: 3,
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
          slidesToShow: 4
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
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
          slidesToShow: 2,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
          centerMode: true
        }
      },
      {
        breakpoint: 374,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
          centerMode: false
        }
      }
    ]
  };

  const settingsTopSellers = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    rows: 2,
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
          slidesToShow: 4
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
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
          slidesToShow: 1,
          dots: true,
          arrows: false,
          centerMode: true
        }
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
          centerMode: true
        }
      }
    ]
  };
  const settingsEvent = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 1,
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
        breakpoint: 991,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  };

  const swiperSettings = {
    slidesPerView: 3,
    loop: true,
    freeMode: true,
    navigation: true,
    pagination: {
      el: '.my-custom-pagination-div',
      clickable: true,
      renderBullet: (index, className) =>
        '<span class="' + className + '"></span>'
    },
    autoplay: {
      delay: 1000
    },
    spaceBetween: 10,
    speed: 1800,
    breakpoints: {
      769: {
        slidesPerView: 4
      },
      991: {
        slidesPerView: 5
      },
      1290: {
        slidesPerView: 5,
        spaceBetween: 15
      }
    }
  };

  const swiperRef = useRef(null);

  const sliderref = useRef(null);

  return (
    <React.Fragment>
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
      <div onClick={closeNftCollapse} className="home-page marketplace">
        <div className="container">
          <div className="home-page-head">
            <div
              className="home-page-create"
              style={{ backgroundImage: "url('../img/home-top.png')" }}
            >
              <img
                src="../img/home-head.png"
                className="home-page-create__img"
                alt=""
              />
              <div className="home-page-create__title">
                Create your <br /> NFT
              </div>
              <button
                className="load_more"
                onClick={() => history.push('/create')}
              >
                Create NFT
              </button>
            </div>
            <div className="home-head-banners">
              <Slider {...settings}>
                {top_slider.map((product, i) => (
                  <SwiperSlide key={i}>
                    <Link
                      key={'link' + i}
                      to={{
                        pathname: '/product',
                        state: { product }
                      }}
                    >
                      <div
                        key={'wrapper' + i}
                        className="home-head-banners_slide_wrapper"
                      >
                        <div
                          key={'slide' + i}
                          className="home-head-banners_slide"
                        >
                          <img key={'img' + i} src={product.img} alt="title" />
                          <h5 key={'title' + i}>{product.title}</h5>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Slider>
            </div>
          </div>
          <div className="home-banners">
            <Swiper
              {...swiperSettings}
              onInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {slider_1.map((product, i) => (
                <SwiperSlide key={i}>
                  <BannerItem
                    key={'banner' + i}
                    title={'Demo title'}
                    image={product.img}
                    product={product}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <SampleNextArrow
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.slideNext();
                }
              }}
            />
            <SamplePrevArrow
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.slidePrev();
                }
              }}
            /> */}
          </div>
          <div className="my-custom-pagination-div" />
          <div className="home_sellers_title">
            <h4
              className={`${
                darkTheme
                  ? 'subtitle subtitle_sellers'
                  : 'subtitle subtitle_sellers subtitle_white'
              }`}
            >
              Top 10 users rewards
              <div>
                <div
                  className="gradient-btn"
                  onClick={() =>
                    setShowDropdownSellersTop(!showDropdownSellersTop)
                  }
                >
                  <span className="gradient-txt">{activeSellersTop}</span>
                  <img
                    src="../img/arrow.svg"
                    alt="down"
                    className={
                      showDropdownSellersTop
                        ? 'active gradient-txt'
                        : 'gradient-txt'
                    }
                  />
                </div>
                <Collapse isOpened={showDropdownSellersTop}>
                  <div className="selected_block_price_dropdown_main home_dropdown">
                    <span
                      className={
                        activeSellersTop === 'ETH'
                          ? 'active gradient-txt'
                          : null
                      }
                      onClick={() => {
                        setActiveSellersTop('ETH');
                        setShowDropdownSellersTop(false);
                      }}
                    >
                      <div
                        className={
                          activeSellersTop === 'ETH'
                            ? 'active gradient-txt'
                            : null
                        }
                      >
                        {' '}
                        <CheckDropdown /> ETH
                      </div>
                    </span>
                    <span
                      className={
                        activeSellersTop === 'BSC'
                          ? 'active gradient-txt'
                          : null
                      }
                      onClick={() => {
                        setActiveSellersTop('BSC');
                        setShowDropdownSellersTop(false);
                      }}
                    >
                      <div
                        className={
                          activeSellersTop === 'BSC'
                            ? 'active gradient-txt'
                            : null
                        }
                      >
                        <CheckDropdown /> BSC
                      </div>
                    </span>
                  </div>
                </Collapse>
              </div>
              30 days
            </h4>

            <div className="rewards_block">
              <h5>REWARDS POOLS TOTAL:</h5>
              <div className="rewards_eth">
                <CountUp
                  start={0}
                  end={0.000024}
                  duration={2.75}
                  decimals={6}
                  decimal=","
                  delay={3}
                >
                  <span></span>
                </CountUp>
                <img src="../../img/eth_home.png" alt="ETH" />
              </div>
              <div className="rewards_bsc">
                <CountUp
                  start={0}
                  end={0.000024}
                  duration={2.75}
                  decimals={6}
                  decimal=","
                  delay={3}
                >
                  <span></span>
                </CountUp>
                <img src="../../img/bsc_home.png" alt="bsc" />
              </div>
            </div>
          </div>

          <div className="collection-slider sellers-slider">
            <Slider {...settingsTopSellers}>
              <TopSellersBlock />
              <TopSellersBlock />
              <TopSellersBlock />
              <TopSellersBlock />
              <TopSellersBlock />
              <TopSellersBlock />
              <TopSellersBlock />
              <TopSellersBlock />
              <TopSellersBlock />
              <TopSellersBlock />
            </Slider>
          </div>
          <h4
            className={`${
              darkTheme
                ? 'subtitle subtitle_collection '
                : 'subtitle subtitle_collection subtitle_white'
            }`}
          >
            Top collections in
            <div
              className="gradient-btn"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="gradient-txt">{activeDays} days </span>
              <img
                src="../img/arrow.svg"
                alt="down"
                className={showDropdown ? 'active' : null}
              />
            </div>
            <Collapse isOpened={showDropdown}>
              <div className="selected_block_price_dropdown_main home_dropdown">
                <span
                  className={activeDays === 1 ? 'active gradient-txt' : null}
                  onClick={() => {
                    setActiveDays(1);
                    setShowDropdown(false);
                  }}
                >
                  <div
                    className={activeDays === 1 ? 'active gradient-txt' : null}
                  >
                    {' '}
                    <CheckDropdown /> 1 day
                  </div>
                </span>
                <span
                  className={activeDays === 7 ? 'active gradient-txt' : null}
                  onClick={() => {
                    setActiveDays(7);
                    setShowDropdown(false);
                  }}
                >
                  <div
                    className={activeDays === 7 ? 'active gradient-txt' : null}
                  >
                    <CheckDropdown /> 7 days
                  </div>
                </span>
                <span
                  className={activeDays === 30 ? 'active gradient-txt' : null}
                  onClick={() => {
                    setActiveDays(30);
                    setShowDropdown(false);
                  }}
                >
                  <div
                    className={activeDays === 30 ? 'active gradient-txt' : null}
                  >
                    <CheckDropdown /> 30 days
                  </div>
                </span>
              </div>
            </Collapse>
          </h4>
          <div
            className="collection-slider collection home_top_collection"
            ref={sliderref}
          >
            <Slider {...settingsCollention}>
              {slider_top_collection.map((collection, i) => (
                <CollectionBlock key={i} collection={collection} />
              ))}
            </Slider>
          </div>

          <h4
            className={`${darkTheme ? 'subtitle' : 'subtitle subtitle_white'}`}
          >
            Top bids
            <img src="../img/hot.svg" alt="hot" />
          </h4>
          <div className="collection-slider marketplace-slider">
            <Slider {...settingsCollentionBids}>
              {slider_top_bids.map((product, i) => (
                <ExploreBlock product={product} key={i} />
              ))}
            </Slider>
          </div>
          <h4
            className={`${
              darkTheme
                ? 'subtitle subtitle_sellers'
                : 'subtitle subtitle_sellers subtitle_white'
            }`}
          >
            Top
            <div>
              <div
                className="gradient-btn"
                onClick={() => setShowDropdownSellers(!showDropdownSellers)}
              >
                <span className="gradient-txt">
                  {activeSellers.toLowerCase()}
                </span>
                <img
                  src="../img/arrow.svg"
                  alt="down"
                  className={showDropdownSellers ? 'active gradient-txt' : null}
                />
              </div>
              <Collapse isOpened={showDropdownSellers}>
                <div className="selected_block_price_dropdown_main home_dropdown">
                  <span
                    className={
                      activeSellers === 'Buyers' ? 'active gradient-txt' : null
                    }
                    onClick={() => {
                      setActiveSellers('Buyers');
                      setShowDropdownSellers(false);
                    }}
                  >
                    <div
                      className={
                        activeSellers === 'Buyers'
                          ? 'active gradient-txt'
                          : null
                      }
                    >
                      <CheckDropdown /> Buyers
                    </div>
                  </span>
                  <span
                    className={
                      activeSellers === 'Sellers' ? 'active gradient-txt' : null
                    }
                    onClick={() => {
                      setActiveSellers('Sellers');
                      setShowDropdownSellers(false);
                    }}
                  >
                    <div
                      className={
                        activeSellers === 'Sellers'
                          ? 'active gradient-txt'
                          : null
                      }
                    >
                      <CheckDropdown /> Sellers
                    </div>
                  </span>
                </div>
              </Collapse>
            </div>
            in{' '}
            <div>
              <div
                className="gradient-btn"
                onClick={() =>
                  setShowDropdownSellersDays(!showDropdownSellersDays)
                }
              >
                <span className="gradient-txt">{activeSellersDays} days </span>
                <img
                  src="../img/arrow.svg"
                  alt="down"
                  className={
                    showDropdownSellersDays
                      ? 'active gradient-txt'
                      : 'gradient-txt'
                  }
                />
              </div>
              <Collapse isOpened={showDropdownSellersDays}>
                <div className="selected_block_price_dropdown_main home_dropdown">
                  <span
                    className={activeDays === 1 ? 'active gradient-txt' : null}
                    onClick={() => {
                      setActiveSellersDays(1);
                      setShowDropdownSellersDays(false);
                    }}
                  >
                    <div
                      className={
                        activeDays === 1 ? 'active gradient-txt' : null
                      }
                    >
                      {' '}
                      <CheckDropdown /> 1 day
                    </div>
                  </span>
                  <span
                    className={
                      activeSellersDays === 7 ? 'active gradient-txt' : null
                    }
                    onClick={() => {
                      setActiveSellersDays(7);
                      setShowDropdownSellersDays(false);
                    }}
                  >
                    <div
                      className={
                        activeSellersDays === 7 ? 'active gradient-txt' : null
                      }
                    >
                      <CheckDropdown /> 7 days
                    </div>
                  </span>
                  <span
                    className={activeDays === 30 ? 'active gradient-txt' : null}
                    onClick={() => {
                      setActiveSellersDays(30);
                      setShowDropdownSellersDays(false);
                    }}
                  >
                    <div
                      className={
                        activeDays === 30 ? 'active gradient-txt' : null
                      }
                    >
                      {' '}
                      <CheckDropdown /> 30 days
                    </div>
                  </span>
                </div>
              </Collapse>
            </div>
          </h4>
          <div className="collection-slider sellers-slider">
            <Slider {...settingsSellers}>
              <SellersBlock />
              <SellersBlock />
              <SellersBlock />
              <SellersBlock />
              <SellersBlock />
              <SellersBlock />
              <SellersBlock />
              <SellersBlock />
              <SellersBlock />
              <SellersBlock />
              <SellersBlock />
              <SellersBlock />
              <SellersBlock />
              <SellersBlock />
              <SellersBlock />
              <SellersBlock />
              <SellersBlock />
              <SellersBlock />
            </Slider>
          </div>

          <div className="events">
            <h4
              className={`${
                darkTheme ? 'subtitle' : 'subtitle subtitle_white'
              }`}
            >
              Popular events
            </h4>
            <div className="collection-slider">
              <Slider {...settingsEvent}>
                <EventsBlock />
                <EventsBlock />
                <EventsBlock />
                <EventsBlock />
              </Slider>
            </div>
          </div>
          <h4
            className={`${darkTheme ? 'subtitle' : 'subtitle subtitle_white'}`}
          >
            Explore
          </h4>
          <div>
            <div className="content_marketplace_header_main_wrapper">
              <MenuMarketplace />
              <CharityBtn />
              <Filter />
            </div>
            <div className="explore_main">
              {productToShow.map((product, i) => (
                <ExploreBlock product={product} key={i} />
              ))}
            </div>
            <button className="load_more" onClick={handleShowMoreProducts}>
              Load more
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
