import React from "react";
import "./ContentMarketplaceMain.css";
import ContentMarketplaceBlock from "../ContentMarketplaceBlock/ContentMarketplaceBlock";

const ContentMarketplaceMain = () => {

    return (
        <div className="content_marketplace_main">
            <div className="container">
                <h4>Content Marketplace</h4>
                <div className="content_marketplace_main_main">
                    <ContentMarketplaceBlock />
                    <ContentMarketplaceBlock />
                    <ContentMarketplaceBlock />
                    <ContentMarketplaceBlock />
                    <ContentMarketplaceBlock />
                    <ContentMarketplaceBlock />
                    <ContentMarketplaceBlock />
                    <ContentMarketplaceBlock />
                    <ContentMarketplaceBlock />
                    <ContentMarketplaceBlock />
                    <ContentMarketplaceBlock />
                    <ContentMarketplaceBlock />
                </div>
                <button className="load_more">Load more</button>
            </div>
        </div>
    );
};

export default ContentMarketplaceMain;
