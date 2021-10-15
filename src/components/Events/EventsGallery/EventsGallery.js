import React from 'react';
import EventsBlock from '../EventsBlock/EventsBlock';
import './EventsGallery.css';

const EventsGallery = () => {
  return (
    <div className="events_gallery">
      <div className="container">
        <div className="events_gallery_header">
          <img src="../../img/events-gallery.png" alt="gallery" />
          <img src="../../img/events-gallery-mobile.png" alt="gallery" />
          <button className="events_gallery_registration">Registration</button>
        </div>
        <h4>Events</h4>
        <div className="events_gallery_main">
          <EventsBlock />
          <EventsBlock />
          <EventsBlock />
          <EventsBlock />
          <EventsBlock />
          <EventsBlock />
          <EventsBlock />
          <EventsBlock />
        </div>
        <button className="load_more"> Load more</button>
      </div>
    </div>
  );
};

export default EventsGallery;
