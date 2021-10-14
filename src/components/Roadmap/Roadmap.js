import React from 'react';
import { useSelector } from 'react-redux';
import './Roadmap.css';

const Roadmap = (props) => {
  const darkTheme = useSelector((state) => state.app.darkTheme);

  return (
    <div className="roadmap">
      <div className="roadmap_left_bg"></div>
      <div className="roadmap_right_bg"></div>
      <div className="container">
        <img
          className="title animate__animated animate__zoomIn wow"
          data-wow-duration="1s"
          data-wow-delay="0.5s"
          src={
            darkTheme ? 'img/roadmap_title_dark.svg' : 'img/roadmap_title.svg'
          }
          alt="title"
        />
        <div className="roadmap_main">
          <div className="roadmap_main_block_wrapper active">
            <span>The MeDIA eYe NFT concept is created.</span>
            <div className="roadmap_main_block">
              <h4>Q1/21</h4>
              <div
                className="line animate__animated animate__flipInX wow"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              ></div>
            </div>
            <span></span>
          </div>
          <div className="roadmap_main_block_wrapper active">
            <span></span>
            <div className="roadmap_main_block ">
              <h4>Q2/21</h4>
              <div
                className="line animate__animated animate__flipInX wow"
                data-wow-duration="1s"
                data-wow-delay="0.8s"
              ></div>
            </div>
            <span>Development of MeDIA eYe platform and testing.</span>
          </div>
          <div className="roadmap_main_block_wrapper active">
            <span>
              Private Sale/Presale and IDO fundraising. Platform launch (Beta).
            </span>
            <div className="roadmap_main_block">
              <h4>Q3/21</h4>
              <div
                className="line animate__animated animate__flipInX wow"
                data-wow-duration="1"
                data-wow-delay="1.1s"
              ></div>
            </div>
            <span></span>
          </div>
          <div className="roadmap_main_block_wrapper">
            <span></span>
            <div className="roadmap_main_block">
              <h4>Q4/21</h4>
            </div>
            <span>
              MeDIA eYe staking pool and rewards pool launch. Platform goes into
              full operation.
            </span>
          </div>
        </div>
        <div className="roadmap_mobile">
          <img
            src={
              darkTheme
                ? 'img/roadmap_mobile_dark.svg'
                : 'img/roadmap_mobile.svg'
            }
            alt="roadmap"
          />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
