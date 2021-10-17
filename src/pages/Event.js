import React from 'react';
import EventMain from '../components/Events/Event/Event';

const Event = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <EventMain />
      </div>
    </React.Fragment>
  );
};

export default Event;
