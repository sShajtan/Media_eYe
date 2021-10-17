import React, { useState } from 'react';
import './Home.scss';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import MarketplaceSlider from '../../components/ContentMarketplace/MarketplaceSlider/MarketplaceSlider';
import BannerItem from '../../components/Banner/BannerItem';
import SampleNextArrow from '../../components/SampleNextArrow/SampleNextArrow';
import SamplePrevArrow from '../../components/SamplePrevArrow/SamplePrevArrow';
import CollectionBlock from '../../components/Account/CollectionBlock/CollectionBlock';
import CreatorsBlockInfo from '../../components/Creators/CreatorsBlockInfo/CreatorsBlockInfo';
import Filter from '../../components/ContentMarketplace/Filter/Filter';
import EventsBlock from '../../components/Events/EventsBlock/EventsBlock';
import CharityBtn from '../../components/ContentMarketplace/Filter/CharityBtn/CharityBtn';
import ExploreBlock from '../../components/ContentMarketplace/ExploreBlock/ExploreBlock';
import MenuMarketplace from '../../components/ContentMarketplace/MenuMarketplace/MenuMarketplace';
import { Collapse } from 'react-collapse';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const Home = (props) => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeDays, setActiveDays] = useState(7);
  const { closeNftCollapse } = props;

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
    responsive: [
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
          dots: true
        }
      },
      {
        breakpoint: 574,
        settings: {
          dots: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 374,
        settings: {
          dots: true,
          slidesToShow: 1
        }
      }
    ]
  };
  const settingsSellers = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 3,
    arrows: true,
    autoplay: false,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
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
          dots: true
        }
      },
      {
        breakpoint: 574,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          dots: true
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
          arrows: true,
          dots: true
        }
      }
    ]
  };

  // const settingsBanners = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   easing: 'linear',
  //   speed: 1000,
  //   lazyLoad: true,
  //   swipeToSlide: true,
  //   pauseOnHover: false,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 1199,
  //       settings: {
  //         slidesToShow: 4
  //       }
  //     },
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 4,
  //         arrows: false
  //       }
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 3,
  //         arrows: false
  //       }
  //     },
  //     {
  //       breakpoint: 574,
  //       settings: {
  //         dots: true,
  //         slidesToShow: 3,
  //         arrows: false
  //       }
  //     }
  //   ]
  // };

  const swiperSettings = {
    slidesPerView: 3,
    loop: true,
    freeMode: true,
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

  return (
    <React.Fragment>
      <link
        rel="stylesheet"
        href="node_modules/@glidejs/glide/dist/css/glide.core.min.css"
      />

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
              <button className="load_more">Create NFT</button>
            </div>
            <div className="home-head-banners">
              <Slider {...settings}>
                <div className="home-head-banners_slide_wrapper">
                  <div className="home-head-banners_slide">
                    <img src="../../../img/home1.png" alt="title" />
                    <h5>Demo title1</h5>
                  </div>
                </div>
                <div className="home-head-banners_slide_wrapper">
                  <div className="home-head-banners_slide">
                    <img src="../../../img/home1.jpg" alt="title" />
                    <h5>Demo title1</h5>
                  </div>
                </div>
                <div className="home-head-banners_slide_wrapper">
                  <div className="home-head-banners_slide">
                    <img src="../../../img/home1.png" alt="title" />
                    <h5>Demo title1</h5>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="home-banners">
            <Swiper {...swiperSettings}>
              {Array.from({ length: 10 }).map((_, i) => (
                <SwiperSlide key={i}>
                  <BannerItem title="Demo title1" image="home1.png" />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* <div style={{ marginTop: 30 }}></div>
            <Glide
              ref={gliderRef}
              type={'carousel'}
              perView={5}
              animationTimingFunc={'linear'}
              animationDuration={800}
              customSlideAnimation={{
                timeout: 500,
                classNames: 'fade'
              }}
              breakpoints={{
                992: {
                  perView: 4
                },
                768: {
                  perView: 3
                }
              }}
            >
              <BannerItem title="Demo title1" image="home1.png" />
              <BannerItem title="Demo title1" image="home1.png" />
              <BannerItem title="Demo title1" image="home1.png" />
              <BannerItem title="Demo title1" image="home1.png" />
              <BannerItem title="Demo title1" image="home1.png" />
              <BannerItem title="Demo title1" image="home1.png" />
              <BannerItem title="Demo title1" image="home1.png" />
              <BannerItem title="Demo title1" image="home1.png" />
            </Glide> */}
            {/* <Slider {...settingsBanners}></Slider> */}
          </div>

          <h4
            className={`${
              darkTheme
                ? 'subtitle subtitle_collection'
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
                  className={activeDays === 1 ? 'active' : null}
                  onClick={() => {
                    setActiveDays(1);
                    setShowDropdown(false);
                  }}
                >
                  1 day
                </span>
                <span
                  className={activeDays === 7 ? 'active' : null}
                  onClick={() => {
                    setActiveDays(7);
                    setShowDropdown(false);
                  }}
                >
                  7 days
                </span>
                <span
                  className={activeDays === 20 ? 'active' : null}
                  onClick={() => {
                    setActiveDays(30);
                    setShowDropdown(false);
                  }}
                >
                  30 days
                </span>
              </div>
            </Collapse>
          </h4>
          <div className="collection-slider collection home_top_collection">
            <Slider {...settingsCollention}>
              <CollectionBlock />
              <CollectionBlock />
              <CollectionBlock />
              <CollectionBlock />
              <CollectionBlock />
              <CollectionBlock />
              <CollectionBlock />
              <CollectionBlock />
            </Slider>
          </div>

          <h4
            className={`${darkTheme ? 'subtitle' : 'subtitle subtitle_white'}`}
          >
            Top bids
            <img src="../img/hot.svg" alt="hot" />
          </h4>
          <div className="collection-slider marketplace-slider">
            <MarketplaceSlider />
          </div>
          <h4
            className={`${darkTheme ? 'subtitle' : 'subtitle subtitle_white'}`}
          >
            Top sellers
          </h4>
          <div className="collection-slider sellers-slider">
            <Slider {...settingsSellers}>
              <CreatorsBlockInfo link="#" />
              <CreatorsBlockInfo link="#" />
              <CreatorsBlockInfo link="#" />
              <CreatorsBlockInfo link="#" />
              <CreatorsBlockInfo link="#" />
              <CreatorsBlockInfo link="#" />
              <CreatorsBlockInfo link="#" />
              <CreatorsBlockInfo link="#" />
              <CreatorsBlockInfo link="#" />
              <CreatorsBlockInfo link="#" />
              <CreatorsBlockInfo link="#" />
              <CreatorsBlockInfo link="#" />
              <CreatorsBlockInfo link="#" />
              <CreatorsBlockInfo link="#" />
              <CreatorsBlockInfo link="#" />
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
              <ExploreBlock isSold={true} />
              <ExploreBlock isAuction={true} />
              <ExploreBlock isBunding={true} />
              <ExploreBlock />
              <ExploreBlock />
              <ExploreBlock />
              <ExploreBlock />
              <ExploreBlock />
            </div>
            <button className="load_more">Load more</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
