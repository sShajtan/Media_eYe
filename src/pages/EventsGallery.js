import React from 'react';
import EventsGalleryMain from '../components/Events/EventsGallery/EventsGallery';

const EventsGallery = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <EventsGalleryMain />
      </div>
    </React.Fragment>
  );
};

export default EventsGallery;
