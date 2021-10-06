import React from 'react';
import ProductBundingAuctionMain from '../components/ProductCard/ProductBundingAuction/ProductBundingAuction';

const ProductBundingAuction = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse}>
        <ProductBundingAuctionMain />
      </div>
    </React.Fragment>
  );
};

export default ProductBundingAuction;
