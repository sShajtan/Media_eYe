import React from 'react';
import { Link } from 'react-router-dom';
import './HubMainBlock.css';

const HubMainBlock = (props) => {
  const { img } = props;
  return (
    <Link
      to={{
        pathname: '/hub/partner',
        state: { img }
      }}
    >
      <div className="hub_main_block">
        <h6>{props.title}</h6>
        <div className="hub_main_block_wrapper"></div>
        <div
          className="hub_main_img"
          style={{
            backgroundImage: 'url(' + props.img + ')'
          }}
        ></div>
        <h6>{props.title}</h6>
      </div>
    </Link>
  );
};

export default HubMainBlock;
