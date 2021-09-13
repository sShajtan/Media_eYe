import React from 'react';
import GallereyHeader from '../components/ContentMarketplace/MarketplaceHeader/GallereyHeader.js';
import MarketplaceMain from '../components/ContentMarketplace/MarketplaceMain/MarketplaceMain';

const NftMarketplace = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <GallereyHeader />
        <MarketplaceMain />
      </div>
    </React.Fragment>
  );
};

export default NftMarketplace;
