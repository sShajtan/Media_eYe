import React from "react";
import ContentMarketplaceFeatured from "../components/ContentMarketplace/ContentMarketplaceFeatured/ContentMarketplaceFeatured";
import ContentMarketplaceHeader from "../components/ContentMarketplace/ContentMarketplaceHeader/ContentMarketplaceHeader";
import ContentMarketplaceMain from "../components/ContentMarketplace/ContentMarketplaceMain/ContentMarketplaceMain";
import ContentMarketplacePopular from "../components/ContentMarketplace/ContentMarketplacePopular/ContentMarketplacePopular";


const ContentMarketplace = (props) => {
    const { closeNftCollapse } = props;

    return (
        <React.Fragment>
            <div onClick={closeNftCollapse} className="marketplace">
                <ContentMarketplaceHeader />
                <ContentMarketplacePopular />
                <ContentMarketplaceFeatured />
                <ContentMarketplaceMain />
            </div>
        </React.Fragment>
    );
};

export default ContentMarketplace;
