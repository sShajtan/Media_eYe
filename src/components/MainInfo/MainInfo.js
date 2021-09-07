import React from 'react';
import './MainInfo.css';
import { Link } from 'react-scroll';

const MainInfo = (props) => {
  const { darkTheme } = props;

  return (
    <div className="main_info" id="about">
      <div className="container">
        <img
          className="title animate__animated animate__fadeInRight wow"
          data-wow-duration="1.5s"
          data-wow-delay="0.5s"
          src={darkTheme ? 'img/nft_title_dark.svg' : 'img/nft_title.svg'}
        />
        <div className="main_info_main">
          <div className="main_info_left">
            <img
              className="animate__animated animate__zoomIn wow"
              data-wow-duration="1.5s"
              data-wow-delay="0.5s"
              src="img/nft_img.png"
              alt="nft_image"
            />
            <img
              className="title"
              src="img/nft_title.svg"
              alt="What is an NFT"
            />
          </div>
          <div className="main_info_right">
            <p>
              Non Fungible Tokens (NFTs) have many use cases, an NFT is a unit
              of data stored on a digital ledger, called a blockchain, that
              certifies a digital asset to be unique and therefore not
              interchangeable.
            </p>
            <br />
            <div>
              <ul>
                <span>NFTs can be used to:</span>

                <li>
                  <span>remove intermediaries</span>
                </li>
                <li>
                  <span>store record of ownership</span>
                </li>
                <li>
                  <span>provide immutable provenance</span>
                </li>
                <li>
                  <span>connect artists with audiences</span>
                </li>
                <li>
                  <span>promote brands</span>
                </li>
                <li>
                  <span>create new markets</span>
                </li>
                <li>
                  <span>drive growth of the Metaverse</span>
                </li>
              </ul>

              <img
                className="animate__animated animate__fadeInUp wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
                src="img/nft_img_2.png"
                alt="nft_image"
              />
            </div>

            <Link
              to="faq"
              spy={true}
              smooth={true}
              duration={500}
              className="check_faq_button"
            >
              <span>Check out our FAQ</span>
            </Link>
          </div>
        </div>
        <img src="img/Line.svg" className="block_line" alt="line" />
      </div>
    </div>
  );
};

export default MainInfo;
