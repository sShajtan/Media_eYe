import React from 'react';
import EventsBlock from '../../Events/EventsBlock/EventsBlock';
import CreatorMenu from '../CreatorMenu/CreatorMenu';
import './CreatorEvents.css';

const CreatorEvents = (props) => {
  return (
    <div className="creator_account">
      <div className="container">
        <div className="creator_account_main">
          <div className="img_line">
            <img src="../../img/creator_account.png" alt="line" />
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
          <div className="creator_account_main_block creator_account_event">
            <EventsBlock />
            <EventsBlock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorEvents;
