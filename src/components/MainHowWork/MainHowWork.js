import React from 'react';
import { useSelector } from 'react-redux';
import JoinUs from '../JoinUs/JoinUs';
import './MainHowWork.css';

const MainHowWork = (props) => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  const { togglePartnersPopup, toggleMessagePopup } = props;
  return (
    <div className="main_howwork">
      <img
        className="title animate__animated animate__zoomIn wow"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
        src={darkTheme ? 'img/howwork_title_dark.svg' : 'img/howwork_title.svg'}
        alt="title"
      />
      <div className="main_howwork_wrapper">
        <div className="container">
          <div className="main_howwork_main">
            <div
              className="main_howwork_main_block animate__animated animate__fadeInUp wow"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <img src="img/01.png" className="number" alt="01" />
              <img src="img/line_sm.png" className="line_sm" />
              <h3>CREATE</h3>
              <span>
                Mint and embed digitized content on an NFT token, such as art,
                text, videos, photos, songs or lines of code. NFTs can also
                represent a tokenized form of any digitized content, such as
                artworks, movies, music, branding and more. Discover the
                unlimited potential of NFTs, become a Creator.
              </span>
            </div>
            <div
              className="main_howwork_main_block animate__animated animate__fadeInUp wow"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <img src="img/02.png" className="number" alt="01" />
              <img src="img/line_sm.png" className="line_sm" />
              <h3>PROMOTE</h3>
              <span>
                Use the unlimited potential of NFTs to drive your next ad
                campaign, create brand awareness, distribute content to your
                clients or mass audiences, create unique experiences for
                consumers and much more.
              </span>
            </div>
            <div
              className="main_howwork_main_block animate__animated animate__fadeInUp wow"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <img src="img/03.png" className="number" alt="01" />
              <img src="img/line_sm.png" className="line_sm" />
              <h3>COLLECT</h3>
              <span>
                As NFTs grow rapidly as a new medium for collectors to store
                digitized collectables while ensuring immutable provenance.
                Investors and collectors alike are realizing the value that NFTs
                can capture and offer by providing a secure store of value.
              </span>
            </div>
          </div>
        </div>
      </div>
      <JoinUs
        togglePartnersPopup={togglePartnersPopup}
        toggleMessagePopup={toggleMessagePopup}
      />
    </div>
  );
};

export default MainHowWork;
