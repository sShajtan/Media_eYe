import React from 'react';
import './EventsBlock.css';
import { useHistory } from 'react-router-dom';

const EventsBlock = () => {
  let history = useHistory();

  return (
    <div className="events_block">
      <div className="events_block_left">
        <div
          className="events_block_img_wrapper"
          onClick={() => history.push('/event')}
        >
          <img src="../../img/event.png" alt="event" />
        </div>
      </div>
      <div className="events_block_right">
        <div className="collection_block_ava">
          <img src="../../img/creator_account_avatar.png" alt="avatar" />
        </div>
        <a className="user" href="/">
          @nickname
        </a>

        <h6 onClick={() => history.push('/event')}>NFT Crypto Comicon</h6>
        <p>Description:</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed...</p>
        <div className="events_block_footer">
          <span>
            <img src="../../img/calendar.png" alt="calendar" /> 17.04.2021
          </span>
          <span>
            <img src="../../img/men.png" alt="men" /> 555
          </span>
          <button className="join_btn">Join</button>
        </div>
      </div>
    </div>
  );
};

export default EventsBlock;
