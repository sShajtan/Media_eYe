import React from "react";
import ContentMarketplaceHeader from "../components/ContentMarketplace/MarketplaceHeader/ContentMarketplaceHeader";
import MarketplaceMain from "../components/ContentMarketplace/MarketplaceMain/MarketplaceMain";
import MarketplaceSlider from "../components/ContentMarketplace/MarketplaceSlider/MarketplaceSlider";


const ContentMarketplace = (props) => {
    const { closeNftCollapse, darkTheme } = props;

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
