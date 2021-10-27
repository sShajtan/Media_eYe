import React from 'react';
import ExploreBlock from '../../ContentMarketplace/ExploreBlock/ExploreBlock';
import CreatorMenu from '../CreatorMenu/CreatorMenu';
import './CreatorAccount.css';

const products = [
  {
    img: ['../../img/home_explore/1.png'],
    fullImage: ['../../img/home_explore/f1.jpg']
  },
  {
    img: ['../../img/home_explore/2.png'],
    fullImage: ['../../img/home_explore/f2.jpg']
  },
  {
    img: ['../../img/home_explore/3.png'],
    fullImage: ['../../img/home_explore/f3.jpg']
  },
  {
    img: ['../../img/home_explore/4.png'],
    fullImage: ['../../img/home_explore/f4.jpg']
  },
  {
    img: ['../../img/home_explore/5.png'],
    fullImage: ['../../img/home_explore/f5.jpg']
  },
  {
    img: ['../../img/home_explore/6.png'],
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
    fullImage: ['../../img/home_explore/f8.jpg']
  },
  {
    img: ['../../img/home_explore/9.png'],
    fullImage: ['../../img/home_explore/f9.jpg']
  },
  {
    img: [
      '../../img/home_explore/10.png',
      '../../img/home_explore/2.png',
      '../../img/home_explore/3.png'
    ],
    isBunding: true,
    fullImage: [
      '../../img/home_explore/f10.jpg',
      '../../img/home_explore/f2.jpg',
      '../../img/home_explore/f3.jpg'
    ]
  },
  {
    img: ['../../img/home_explore/11.png'],
    fullImage: ['../../img/home_explore/f11.jpg']
  },
  {
    img: ['../../img/home_explore/6.png'],
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

const CreatorAccount = (props) => {
  return (
    <div className="creator_account">
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
        <div className="creator_account_main">
          <div className="img_line">
            <img src="../img/creator_account.png" alt="line" />
          </div>
          <div className="creator_account_main_header">
            <div className="creator_account_avatar">
              <img src="../../img/creator_account_avatar.png" alt="avatar" />
            </div>
            <h6 className="creator_account_title">Business eYe Level 1</h6>
            <div className="creator_account_info">
              <div>
                <span>
                  <img src="../../img/heart.svg" alt="heart" />
                  &nbsp;123 k
                </span>
                <span>
                  <img src="../../img/men.svg" alt="heart" />
                  &nbsp;55 k
                </span>
              </div>
              <h4>Username</h4>
              <div className="account_wallet">0x9276...12ae</div>
              <div className="account_info">
                I don’t accept bids unless on auction Everything not sold from
                first collection will be burned by September 10th, Second
                collection coming soon
              </div>
              <div className="account_links">
                <div>
                  <span>
                    <i>555</i>followers
                  </span>
                  <button className="account_follow">
                    <span>Follow</span>
                  </button>
                </div>
                <div>
                  <span>
                    <i>55</i>following
                  </span>
                  <button className="account_share">
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <CreatorMenu />
          <div className="creator_account_main_block">
            {products.map((product, i) => (
              <ExploreBlock product={product} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorAccount;
