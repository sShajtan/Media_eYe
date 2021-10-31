import React from 'react';
import ProductSingle from '../components/ProductCard/Product/Product';
import { useLocation } from 'react-router-dom';
import ProductBundingAuction from './ProductBundingAuction';
import ProductAuction from '../components/ProductCard/ProductAuction/ProductAuction';
import ProductBunding from './ProductBunding';

const Product = (props) => {
  const { closeNftCollapse } = props;
  const location = useLocation();
  const product = location.state.product;

  const renderSwitch = () => {
    if (product.isBunding) {
      return <ProductBunding />;
    }
    if (product.isAuction) {
      return <ProductAuction />;
    }
    if (product.isBunding & product.isAuction) {
      return <ProductBundingAuction />;
    } else {
      return <ProductSingle />;
    }
  };

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse}>{renderSwitch()}</div>
    </React.Fragment>
  );
};

export default Product;
