import React from "react";
import "./ContentMarketplaceBlock.css";


const ContentMarketplaceBlock = () => {


    return (
        <div className="content_marketplace_block_wrapper">
            <img src="img/triangle.png" className="triangle" />
            <div className="content_marketplace_block">
                <div className="content_marketplace_block_img">
                    <img src="img/content_marketplace_img.png" alt="marketplace block img" />
                </div>
                <div className="content_marketplace_block_info">
                    <h6>Demo Title, Demo Title</h6>
                    <a>@user123</a>
                    <div className="content_marketplace_block_footer">
                        <span><img src="img/heart.svg" alt="heart" />1,2 k</span>
                        <span className="count">0.053 ETH</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentMarketplaceBlock;
