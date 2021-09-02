import React from "react";
import JoinUs from "../JoinUs/JoinUs";
import "./MainHowWork.css";

const MainHowWork = (props) => {
  const { togglePartnersPopup, toggleMessagePopup } = props;
  return (
    <div className="main_howwork">
      <img
        className="title animate__animated animate__zoomIn wow"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
        src="img/howwork_title.svg"
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
              <svg
                width="105"
                height="82"
                viewBox="0 0 105 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.17708 12.1778L9.17706 12.1778L9.1713 12.1856C3.99882 19.2439 1.5 28.8195 1.5 40.7456C1.5 52.673 3.99929 62.2785 9.16707 69.4016L9.17204 69.4084L9.17708 69.4152C14.5146 76.6003 22.6691 80.093 33.3337 80.093C43.9349 80.093 52.0536 76.5977 57.3892 69.4153L57.3935 69.4094C62.6328 62.2853 65.1674 52.6767 65.1674 40.7456C65.1674 28.883 62.633 19.3402 57.3914 12.2825C52.058 5.03246 43.9392 1.5 33.3337 1.5C22.6691 1.5 14.5146 4.99276 9.17708 12.1778ZM38.5075 29.0792L38.5074 29.0792L38.5121 29.0909C39.4838 31.5353 40.0238 35.3748 40.0238 40.7456C40.0238 46.1792 39.4851 50.0911 38.5097 52.6098C38.0729 53.7057 37.449 54.449 36.6643 54.9349C35.8644 55.4302 34.7837 55.7276 33.3337 55.7276C31.8446 55.7276 30.7359 55.428 29.9185 54.9295C29.1186 54.4417 28.4907 53.699 28.0565 52.6096C27.0812 50.0909 26.5425 46.1791 26.5425 40.7456C26.5425 35.3748 27.0825 31.5353 28.0542 29.0909L28.0542 29.091L28.0588 29.0792C28.4977 27.9475 29.1319 27.1808 29.9326 26.6803C30.7473 26.171 31.8507 25.8655 33.3337 25.8655C34.7775 25.8655 35.8528 26.1687 36.6502 26.6748C37.4359 27.1734 38.066 27.941 38.5075 29.0792ZM66.2229 25.7898V27.2898H67.7229H76.9408V79V80.5H78.4408H102H103.5V79V4.62785V3.12785H102H67.7229H66.2229V4.62785V25.7898Z"
                  stroke="url(#paint0_linear)"
                  strokeWidth="3"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="52.5"
                    y1="3"
                    x2="52.5"
                    y2="79"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#531BE2" />
                    <stop offset="1" stopColor="#38D1FB" />
                  </linearGradient>
                </defs>
              </svg>
              <svg width="226" height="23" viewBox="0 0 226 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="215" y1="11.5" y2="11.5" stroke="#595858" />
                <g filter="url(#filter0_d)">
                  <rect x="212" y="9" width="5" height="5" fill="#0075FF" />
                </g>
                <defs>
                  <filter id="filter0_d" x="203" y="0" width="23" height="23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.77 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                  </filter>
                </defs>
              </svg><h3>CREATE</h3>
              <span>
                Mint and embed digitized content on an NFT token, such as art,
                text, videos, photos, songs or lines of code. NFTs can also
                represent a tokenized form of any digitized content, such as
                artworks, movies, music, branding and more. Discover the unlimited
                potential of NFTs, become a Creator.
              </span>
            </div>
            <div
              className="main_howwork_main_block animate__animated animate__fadeInUp wow"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <svg
                width="125"
                height="82"
                viewBox="0 0 125 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.18675 12.2342L9.18672 12.2342L9.18098 12.2421C4.00214 19.3362 1.5 28.9606 1.5 40.9489C1.5 52.9384 4.00262 62.5928 9.17677 69.7521L9.18172 69.759L9.18675 69.7658C14.531 76.9876 22.6976 80.5 33.3802 80.5C43.9992 80.5 52.1299 76.985 57.4723 69.7658L57.4766 69.76C62.7223 62.5996 65.2603 52.942 65.2603 40.9489C65.2603 29.0245 62.7226 19.4332 57.4746 12.3396C52.1344 5.05236 44.0036 1.5 33.3802 1.5C22.6976 1.5 14.531 5.01237 9.18675 12.2342ZM38.5633 29.2149L38.5633 29.2149L38.5679 29.2266C39.542 31.6863 40.0828 35.5485 40.0828 40.9489C40.0828 46.4122 39.5433 50.347 38.5656 52.8814C38.1273 53.9855 37.5013 54.7339 36.7149 55.2227C35.9137 55.7207 34.8318 56.0195 33.3802 56.0195C31.8894 56.0195 30.7794 55.7185 29.9607 55.2173C29.1592 54.7266 28.5292 53.979 28.0934 52.8814C27.1158 50.347 26.5762 46.4121 26.5762 40.9489C26.5762 35.5485 27.1171 31.6863 28.0911 29.2266L28.0912 29.2266L28.0957 29.2149C28.5362 28.0748 29.1725 27.303 29.9748 26.7995C30.7908 26.2875 31.8955 25.9805 33.3802 25.9805C34.8255 25.9805 35.9021 26.2851 36.7008 26.794C37.4881 27.2956 38.1204 28.0684 38.5633 29.2149ZM68.742 60.1064L68.1449 60.5564V61.3042V78.3863V79.8863H69.6449H122H123.5V78.3863V60.0767V58.5767H122H103.631C108.576 54.8882 112.812 50.6003 116.331 45.713C120.886 39.4122 123.196 32.6313 123.196 25.4011C123.196 18.5224 121.057 12.7792 116.703 8.30412C112.323 3.66102 105.53 1.5 96.6832 1.5C91.6204 1.5 86.9437 2.49573 82.6764 4.50725C78.3456 6.54867 74.8264 9.75372 72.1209 14.0686L72.1162 14.0762L72.1115 14.0838C69.4415 18.4572 68.0501 23.9476 67.8418 30.4676L67.7924 32.0155H69.3411H91.1135H92.7233L92.6098 30.4097C92.4135 27.6341 92.707 25.8804 93.2353 24.9015C93.846 23.8274 94.4831 23.5256 95.1642 23.5256C95.8601 23.5256 96.3235 23.763 96.7051 24.2641L96.7262 24.2918L96.7486 24.3186C97.1871 24.842 97.5124 25.7115 97.5124 27.14C97.5124 31.4277 95.1732 36.2903 90.0241 41.7589C84.8349 47.2014 77.7492 53.3168 68.742 60.1064Z"
                  stroke="url(#paint0_linear)"
                  strokeWidth="3"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="62.5"
                    y1="3"
                    x2="62.5"
                    y2="79"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#531BE2" />
                    <stop offset="1" stopColor="#38D1FB" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="226"
                height="23"
                viewBox="0 0 226 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="215" y1="11.5" y2="11.5" stroke="#595858" />
                <g filter="url(#filter0_d)">
                  <rect x="212" y="9" width="5" height="5" fill="#0075FF" />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="203"
                    y="0"
                    width="23"
                    height="23"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floadopacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.77 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <h3>PROMOTE</h3>
              <span>
                Use the unlimited potential of NFTs to drive your next ad
                campaign, create brand awareness, distribute content to your
                clients or mass audiences, create unique experiences for consumers
                and much more.
              </span>
            </div>
            <div
              className="main_howwork_main_block animate__animated animate__fadeInUp wow"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <svg
                width="127"
                height="82"
                viewBox="0 0 127 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.19798 12.0777L9.19795 12.0777L9.19212 12.0855C4.00548 19.0823 1.5 28.5749 1.5 40.3952C1.5 52.2167 4.00595 61.7389 9.18785 68.7999L9.19287 68.8068L9.19798 68.8136C14.5487 75.9342 22.7187 79.3912 33.3992 79.3912C44.0162 79.3912 52.1503 75.9316 57.4992 68.8136L57.5035 68.8078C62.7571 61.7458 65.2985 52.2205 65.2985 40.3952C65.2985 28.6376 62.7572 19.1775 57.5013 12.1814C52.1547 4.99629 44.0204 1.5 33.3992 1.5C22.7187 1.5 14.5487 4.95706 9.19798 12.0777ZM38.5893 28.8476L38.5893 28.8476L38.594 28.8594C39.5659 31.2763 40.107 35.0756 40.107 40.3952C40.107 45.7767 39.5672 49.6478 38.5917 52.1384C38.1559 53.2194 37.5327 53.9548 36.7453 54.4368C35.9418 54.9287 34.8557 55.2241 33.3992 55.2241C31.9037 55.2241 30.7895 54.9265 29.9684 54.4316C29.1658 53.9477 28.5387 53.213 28.1055 52.1386C27.1299 49.648 26.5901 45.7769 26.5901 40.3952C26.5901 35.0756 27.1312 31.2763 28.1031 28.8594L28.1031 28.8594L28.1078 28.8476C28.5457 27.7312 29.1791 26.9727 29.9825 26.4763C30.8008 25.9706 31.9097 25.6671 33.3992 25.6671C34.8495 25.6671 35.9303 25.9683 36.7312 26.4709C37.5194 26.9654 38.1488 27.7247 38.5893 28.8476ZM69.9098 27.657L69.8708 29.195H71.4093H93.2968H94.7968V27.695C94.7968 25.7129 95.1028 24.4757 95.5204 23.7796C95.8647 23.2057 96.3045 22.9456 97.046 22.9456C97.6971 22.9456 98.1492 23.1629 98.5308 23.6184L98.5536 23.6456L98.5776 23.6717C98.9589 24.0855 99.2953 24.8873 99.2953 26.3846C99.2953 28.038 98.8198 28.9566 98.1428 29.4914C97.4087 30.0713 96.1224 30.4548 93.9924 30.3301L93.9486 30.3276H93.9048H90.2569H88.7569V31.8276V49.87V51.37H90.2569H94.0061C96.8977 51.37 98.5366 51.878 99.3313 52.5368L99.3658 52.5653L99.4019 52.5918C100.227 53.1963 100.714 54.113 100.714 55.6154C100.714 56.7927 100.402 57.6274 99.8795 58.2439C99.3632 58.7909 98.7565 59.0544 97.958 59.0544C96.1704 59.0544 95.2403 58.5567 94.7402 57.8951C94.1867 56.9952 93.8584 55.5252 93.9838 53.2799L94.0723 51.6963H92.4861H70.5987H69.0757L69.0989 53.2191C69.2381 62.3595 71.8948 69.3653 77.3395 73.9029C82.6894 78.3616 89.9613 80.5 98.9713 80.5C104.277 80.5 108.936 79.5629 112.899 77.629C116.916 75.7013 120.048 72.9617 122.238 69.4043C124.426 65.8493 125.5 61.7743 125.5 57.2281C125.5 52.8735 124.419 49.0987 122.176 45.993C120.44 43.5901 118.06 41.6592 115.092 40.172C117.053 39.0673 118.848 37.5415 120.481 35.6218L120.487 35.6146L120.493 35.6074C123.013 32.5697 124.183 28.4942 124.183 23.5623C124.183 19.4039 123.134 15.631 121.017 12.2863C118.952 8.91651 115.879 6.28625 111.881 4.36899C107.848 2.43488 103.055 1.5 97.5527 1.5C89.0591 1.5 82.2619 3.68514 77.3765 8.25461L77.3683 8.26237C72.5416 12.8454 70.1194 19.3874 69.9098 27.657Z"
                  stroke="url(#paint0_linear)"
                  strokeWidth="3"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="63.5"
                    y1="3"
                    x2="63.5"
                    y2="79"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#531BE2" />
                    <stop offset="1" stopColor="#38D1FB" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="226"
                height="23"
                viewBox="0 0 226 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="215" y1="11.5" y2="11.5" stroke="#595858" />
                <g filter="url(#filter0_d)">
                  <rect x="212" y="9" width="5" height="5" fill="#0075FF" />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="203"
                    y="0"
                    width="23"
                    height="23"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floadopacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.77 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
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
      <JoinUs togglePartnersPopup={togglePartnersPopup} toggleMessagePopup={toggleMessagePopup} />
    </div>
  );
};

export default MainHowWork;
