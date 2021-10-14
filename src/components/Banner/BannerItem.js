import React from 'react';

import './BannerItem.scss';

const BannerItem = ({ title, image }) => {
  return (
    <div>
      <div
        className="home-banners-item"
        style={{ backgroundImage: "url('../img/" + image + "')" }}
      >
        <div className="home-banners-item__shadow"></div>
        <span className="home-banners-item__title">{title}</span>
      </div>
    </div>
  );
};

export default BannerItem;
