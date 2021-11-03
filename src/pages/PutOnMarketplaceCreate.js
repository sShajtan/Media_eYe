import React from 'react';
import { useLocation } from 'react-router-dom';
import PutOnMarketplaceCreateMainSingle from '../components/PutOn/PutOnMarketplaceCreateSingle/PutOnMarketplaceCreate';
import PutOnMarketplaceCreateMainBunding from '../components/PutOn/PutOnMarketplaceCreateBunding/PutOnMarketplaceCreate';

const PutOnMarketplaceCreate = (props) => {
  const { closeNftCollapse } = props;
  const location = useLocation();
  const product = location.state.activeImages;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse}>
        {product.length === 1 ? (
          <PutOnMarketplaceCreateMainSingle />
        ) : (
          <PutOnMarketplaceCreateMainBunding />
        )}
      </div>
    </React.Fragment>
  );
};

export default PutOnMarketplaceCreate;
