import React from 'react';
import { useSelector } from 'react-redux';
import ContentMarketplaceHeader from '../components/ContentMarketplace/MarketplaceHeader/ContentMarketplaceHeader';
import MarketplaceMain from '../components/ContentMarketplace/MarketplaceMain/MarketplaceMain';
import MarketplaceSlider from '../components/ContentMarketplace/MarketplaceSlider/MarketplaceSlider';

const ContentMarketplace = (props) => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <ContentMarketplaceHeader darkTheme={darkTheme} />
        <MarketplaceSlider title={'Popular Content'} />
        <MarketplaceSlider title={'Featured Content'} />
        <MarketplaceMain title={'Content Marketplace'} />
      </div>
    </React.Fragment>
  );
};

export default ContentMarketplace;
