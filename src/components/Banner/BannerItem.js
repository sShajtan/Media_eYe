import React from 'react';
import { Link } from 'react-router-dom';

import './BannerItem.scss';

const BannerItem = ({ title, product }) => {
  return (
    <Link
      to={{
        pathname: '/product',
        state: { product }
      }}
    >
      <div>
        <div
          className="home-banners-item"
          style={{ backgroundImage: "url('../img/" + product.img + "')" }}
        >
          <div className="home-banners-item__shadow"></div>
          <span className="home-banners-item__title">{title}</span>
        </div>
      </div>
    </Link>
  );
};

export default BannerItem;
