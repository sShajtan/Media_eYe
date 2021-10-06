import React from 'react';
import ProductBundingMain from '../components/ProductCard/ProductBunding/ProductBunding';

const ProductBunding = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse}>
        <ProductBundingMain />
      </div>
    </React.Fragment>
  );
};

export default ProductBunding;
