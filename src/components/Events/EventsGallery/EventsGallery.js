import React, { useState } from 'react';
import EventsBlock from '../EventsBlock/EventsBlock';
import './EventsGallery.css';
import Popup from '../EventPopup/Popup';

const EventsGallery = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="events_gallery">
      <Popup showPopup={showPopup} togglePopup={togglePopup} />
      <div className="container">
        <div className="events_gallery_header">
          <img src="../../img/events-gallery.png" alt="gallery" />
          <img src="../../img/events-gallery-mobile.png" alt="gallery" />
          <button className="events_gallery_registration" onClick={togglePopup}>
            Registration
          </button>
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
