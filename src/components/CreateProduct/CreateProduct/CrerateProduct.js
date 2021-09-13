import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import './CrerateProduct.css';

const CrerateProduct = (props) => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  let history = useHistory();

  return (
    <div className="create_product">
      <div className="container">
        <a className="goBack_button" onClick={() => history.goBack()}>
          <span>&#8592; </span> GoBack
        </a>
        <h3>Create collectible</h3>
        <span>
          Choose “Single” if you want your collectible to be one of a kind or
          “Collection” if you want to sell one collectible multiple times
        </span>
        <div className="create_product_main">
          <div className="create_product_block">
            <NavLink to="/create/single">
              <button>
                {' '}
                <div className="create_product_image_wrapper">
                  <img
                    src={darkTheme ? 'img/single_dark.svg' : 'img/single.svg'}
                  />
                </div>
                Single
              </button>
            </NavLink>
          </div>
          <div className="create_product_block">
            <button>
              <div className="create_product_image_wrapper">
                <img
                  src={
                    darkTheme ? 'img/collection_dark.svg' : 'img/collection.svg'
                  }
                />
              </div>
              Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrerateProduct;
