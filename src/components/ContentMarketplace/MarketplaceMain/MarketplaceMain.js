import React from "react";
import "./MarketplaceMain.css";
import MarketplaceBlock from "../MarketplaceBlock/MarketplaceBlock";

const ContentMarketplaceMain = (props) => {
    const {title} = props;

    return (
        <div className="marketplace_main">
            <div className="container">
                {title ? <h4>{title}</h4> : null }
                <div className="marketplace_main_main">
                    <MarketplaceBlock />
                    <MarketplaceBlock />
                    <MarketplaceBlock />
                    <MarketplaceBlock />
                    <MarketplaceBlock />
                    <MarketplaceBlock />
                    <MarketplaceBlock />
                    <MarketplaceBlock />
                    <MarketplaceBlock />
                    <MarketplaceBlock />
                    <MarketplaceBlock />
                    <MarketplaceBlock />
                </div>
                <button className="load_more">Load more</button>
            </div>
        </div>
    );
};

export default ContentMarketplaceMain;
