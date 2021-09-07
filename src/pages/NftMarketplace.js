import React from 'react';
import { useSelector } from 'react-redux';
import ContentMarketplaceHeader from '../components/ContentMarketplace/MarketplaceHeader/NftMarketplaceHeader';
import MarketplaceMain from '../components/ContentMarketplace/MarketplaceMain/MarketplaceMain';
import MarketplaceSlider from '../components/ContentMarketplace/MarketplaceSlider/MarketplaceSlider';

const NftMarketplace = (props) => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <ContentMarketplaceHeader darkTheme={darkTheme} />
        <MarketplaceSlider title={'Popular NFT'} />
        <MarketplaceSlider title={'Featured NFT'} />
        <MarketplaceMain title={'NFT Marketplace'} />
      </div>
    </React.Fragment>
  );
};

export default NftMarketplace;
