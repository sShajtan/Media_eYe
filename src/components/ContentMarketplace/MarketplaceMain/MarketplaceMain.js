import React, { useState, useEffect } from 'react';
import './MarketplaceMain.css';
import ExploreBlock from '../ExploreBlock/ExploreBlock';

const productPerPage = 8;
let arrayForHoldingProducts = [];
const ContentMarketplaceMain = (props) => {
  const { title, products } = props;
  const [productToShow, setproductToShow] = useState([]);
  const [next, setNext] = useState(8);

  const loopWithSlice = (start, end) => {
    const slicedProducts = products.slice(start, end);
    arrayForHoldingProducts = [...arrayForHoldingProducts, ...slicedProducts];
    setproductToShow(arrayForHoldingProducts);
  };

  useEffect(() => {
    loopWithSlice(0, productPerPage);
  }, []);

  const handleShowMoreProducts = () => {
    loopWithSlice(next, next + productPerPage);
    setNext(next + productPerPage);
  };

  return (
    <div className="marketplace_main">
      <div className="container">
        {title ? <h4>{title}</h4> : null}
        <div className="marketplace_main_main">
          {productToShow.map((product, i) => (
            <ExploreBlock key={i} product={product} />
          ))}
        </div>
        <button className="load_more" onClick={handleShowMoreProducts}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default ContentMarketplaceMain;
