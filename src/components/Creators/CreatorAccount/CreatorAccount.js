import React from 'react';
import MarketplaceBlock from '../../ContentMarketplace/MarketplaceBlock/MarketplaceBlock';
import './CreatorAccount.css';

const CreatorAccount = (props) => {
  return (
    <div className="creator_account">
      <div className="container">
        <div className="creator_account_main">
        <div className="creator_accout_img_wrapper">
            <img src="img/creator_account.png" />
        </div>
          <div className="creator_account_main_header">
            <div className="creator_account_avatar">
              <img src="img/creator_account_avatar.png" />
            </div>
            <h6>Business eYe Level 1</h6>
            <div className="creator_account_info">
              <span>
                <img src="img/heart.svg" alt="heart" />
                &nbsp;123 k
              </span>
              <h4>Username</h4>
              <div className="account_wallet">0x9276...12ae</div>
              <div className="account_balance">
                <img src="img/token_1.png" />
                Balance: 123345 eYe ($1234)
              </div>
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
          <div className="creator_account_menu_wrapper">
            <div className="creator_account_menu">
              <button>
                <span>
                  On sale <i>40</i>
                </span>
              </button>
              <button>
                <span>
                  Owned <i>43</i>
                </span>
              </button>
              <button>
                <span>
                  Created <i>72</i>
                </span>
              </button>
              <button>
                <span>
                  Liked <i>39</i>
                </span>
              </button>
              <button>
                <span>Activity</span>
              </button>
              <button>
                <span>Collections</span>
              </button>
            </div>
          </div>
          <div className="creator_account_main_block">
            <MarketplaceBlock />
            <MarketplaceBlock />
            <MarketplaceBlock />
            <MarketplaceBlock />
            <MarketplaceBlock />
            <MarketplaceBlock />
            <MarketplaceBlock />
            <MarketplaceBlock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorAccount;
