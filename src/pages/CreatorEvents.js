import React from 'react';
import CreatorEventsMain from '../components/Creators/CreatorEvents/CreatorEvents';

const CreatorEvents = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <CreatorEventsMain />
      </div>
    </React.Fragment>
  );
};

export default CreatorEvents;
