import React, { useState } from 'react';

import './Home.scss';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import MarketplaceSlider from '../../components/ContentMarketplace/MarketplaceSlider/MarketplaceSlider';
import MarketplaceMain from '../../components/ContentMarketplace/MarketplaceMain/MarketplaceMain';
import BannerItem from '../../components/Banner/BannerItem';
import SampleNextArrow from '../../components/SampleNextArrow/SampleNextArrow';
import SamplePrevArrow from '../../components/SamplePrevArrow/SamplePrevArrow';
import CollectionBlock from '../../components/Account/CollectionBlock/CollectionBlock';
import CreatorsBlockInfo from '../../components/Creators/CreatorsBlockInfo/CreatorsBlockInfo';
import EventCard from '../../components/EventCard/EventCard';
import { Collapse } from 'react-collapse';
import All from '../../components/Icons/Categories/All';
import Entertaiment from '../../components/Icons/Categories/Entertaiment';
import Media from '../../components/Icons/Categories/Media';
import Art from '../../components/Icons/Categories/Art';
import Crypto from '../../components/Icons/Categories/Crypto';
import Business from '../../components/Icons/Categories/Business';
import Sport from '../../components/Icons/Categories/Sport';
import Filter from '../../components/ContentMarketplace/Filter/Filter';
const Home = (props) => {

  const darkTheme = useSelector((state) => state.app.darkTheme);
  const [showMobileCategories, setShowMobileCategories] = useState(false);

  const toggleMobileCategories = () => {
    setShowMobileCategories(!showMobileCategories);
  };

  const { closeNftCollapse } = props;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
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
          slidesToShow: 1
        }
      }
    ]
  };
  const settingsSellers= {
    dots: false,
    infinite: true,
    slidesToShow:  1,
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
          slidesToShow: 1
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
      }
    ]
  };

  const settingsBanners = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
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
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="home-page marketplace">
       <div className='container'>
         <div className='home-page-head'>
           <div className='home-page-create'
            style={{backgroundImage: "url('../img/home-top.png')"}}
           >
             <img src='../img/home-head.png'
                  className="home-page-create__img"
                  alt='' />
             <div className='home-page-create__title'>
               Create your <br/> own NFT
             </div>
             <button className="load_more">Create NFT</button>
           </div>
           <div className='home-head-banners'>
             <Slider {...settings}>
               <BannerItem
                 title="Demo title1"
                 image="home-head-banner.png"
               />
               <BannerItem
                 title="Demo title1"
                 image="home1.png"
               />
               <BannerItem
                 title="Demo title1"
                 image="home1.png"
               />
             </Slider>

           </div>

         </div>
         <div className="home-banners">
           <Slider {...settingsBanners}>
             <BannerItem
               title="Demo title1"
               image="home1.png"
             />
             <BannerItem
               title="Demo title1"
               image="home1.png"
             />
             <BannerItem
               title="Demo title1"
               image="home1.png"
             />
             <BannerItem
               title="Demo title1"
               image="home1.png"
             />
             <BannerItem
               title="Demo title1"
               image="home1.png"
             />

             <BannerItem
               title="Demo title1"
               image="home1.png"
             />
             <BannerItem
               title="Demo title1"
               image="home1.png"
             />
             <BannerItem
               title="Demo title1"
               image="home1.png"
             />
             <BannerItem
               title="Demo title1"
               image="home1.png"
             />
             <BannerItem
               title="Demo title1"
               image="home1.png"
             />
           </Slider>

         </div>
         <h4
           className={`${darkTheme ? "subtitle subtitle_collection" : "subtitle subtitle_collection subtitle_white"}`}
         >
           Top collections in
           <span className="gradient-txt">
                7 days
           </span>
           <img src='../img/arrow.svg' alt='' />
         </h4>
         <div className='collection-slider collection'>
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
           className={`${darkTheme ? "subtitle" : "subtitle subtitle_white"}`}
         >
           Top bids
           <img src='../img/hot.svg' alt='' />
         </h4>
         <div className='collection-slider marketplace-slider'>
           <MarketplaceSlider  />
         </div>
         <h4
           className={`${darkTheme ? "subtitle" : "subtitle subtitle_white"}`}
         >
           Top sellers
         </h4>
         <div className='collection-slider sellers-slider mobile-hidden'>
           <Slider {...settingsSellers}>
             <div className='sellers-item'>
               <div className='sellers-item-wrapper'>
                 <div className="sellers-column">
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                 </div>
                 <div className="sellers-column">
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                 </div>
                 <div className="sellers-column">
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                 </div>
                 <div className="sellers-column">
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                 </div>
               </div>

             </div>
             <div className='sellers-item'>
               <div className='sellers-item-wrapper'>
                 <div className="sellers-column">
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                 </div>
                 <div className="sellers-column">
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                 </div>
                 <div className="sellers-column">
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                 </div>
                 <div className="sellers-column">
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                 </div>
               </div>

             </div>

           </Slider>
         </div>
         <div className='collection-slider sellers-slider mobile'>
           <Slider {...settingsSellers}>

                 <div className="sellers-column">
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                 </div>
                 <div className="sellers-column">
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                   <CreatorsBlockInfo link="#"/>
                 </div>
               <div className="sellers-column">
                 <CreatorsBlockInfo link="#"/>
                 <CreatorsBlockInfo link="#"/>
                 <CreatorsBlockInfo link="#"/>
                 <CreatorsBlockInfo link="#"/>
               </div>
               <div className="sellers-column">
                 <CreatorsBlockInfo link="#"/>
                 <CreatorsBlockInfo link="#"/>
                 <CreatorsBlockInfo link="#"/>
                 <CreatorsBlockInfo link="#"/>
               </div>

           </Slider>
         </div>
         <h4
           className={`${darkTheme ? "subtitle" : "subtitle subtitle_white"}`}
         >
           Popular events
         </h4>
         <div className='events'>
           <div className='collection-slider'>
             <Slider {...settingsEvent}>
               <EventCard/>
               <EventCard/>
               <EventCard/>
               <EventCard/>
             </Slider>
           </div>

         </div>
         <h4
           className={`${darkTheme ? "subtitle" : "subtitle subtitle_white"}`}
         >
           Explore
         </h4>
         <div className='collection-slider'>
           <div className="content_marketplace_header_main_wrapper">
             <div className="content_marketplace_header_menu_mobile">
               <button
                 className={
                   showMobileCategories
                     ? 'categories_mobile_button open'
                     : 'categories_mobile_button'
                 }
                 onClick={toggleMobileCategories}
               >
                 Categories
               </button>
               <Collapse isOpened={showMobileCategories}>
                 <div
                   className="filter_fields categories_filter"
                   onClick={(event) => event.stopPropagation()}
                 >
                   <button>
                     <All />
                     All
                   </button>
                   <button>
                     <Entertaiment />
                     Gaming
                   </button>
                   <button>
                     <Media />
                     Media
                   </button>
                   <button>
                     <Art />
                     Art
                   </button>
                   <button>
                     <Crypto />
                     Crypto
                   </button>
                   <button>
                     <Business />
                     Business
                   </button>
                   <button>
                     <Sport />
                     Sports
                   </button>
                 </div>
               </Collapse>
             </div>
             <div className="content_marketplace_header_menu">
               <button className="active">All</button>
               <button>Gaming</button>
               <button>Media</button>
               <button>Art</button>
               <button>Crypto</button>
               <button>Business</button>
               <button>Sports</button>
             </div>
             <Filter />
           </div>
           <MarketplaceMain />
         </div>

       </div>

      </div>
    </React.Fragment>
  )
}

export default Home;