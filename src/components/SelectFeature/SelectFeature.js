import React from "react";
import "./SelectFeature.css";

const SelectFeature = (props) => {
  const {darktheme } = props;
  return (
    <div className="select_feature">
        <div className="container">
        <h2>Select your Feature</h2>
        <span><a>Tutorial &#5125;</a></span>
            <div className="select_feature_main">
                <div className="select_feature_block">
                    <h6>My eYe</h6>
                    <h3>FREE</h3>
                    <div className="selecte_feature_text">
                    <p>Free to mint individual NFTs (excluding gas fees), 
                        1 x 721 NFT only (minting function limited), 
                        1155 NFT minting function unlimited, 
                        Campaign Launcher (Locked), 
                        upload up to 200 MB (free of charge)
                    </p>
                    
                    <p>A user can mint 1 x 721 NFTs only, for free. Up to 10 NFT every 30-day cycle</p></div>
                    <button className="subscribe_feature"><span>Subscribe</span></button>
                </div>
                <div className="select_feature_block">
                    <h6>Business eYe Level 1</h6>
                    <h3>30$</h3>
                    <div className="selecte_feature_text">
                    <p>
Flat fee of $30 dollars to mint up to 10 x 721 NFTs  (minting function limited), 1155 NFT minting function unlimited, Per 30-day cycle, unlimited Launcher Access, upload up to 200 MB (free of charge).
                    </p>
                    <p>Users can launch NFT campaigns and whitelist up to 10 addresses to be able to mint them</p></div>
                    <button className="subscribe_feature"><span>Subscribe</span></button>
                </div>
                
                <div className="select_feature_block">
                    <h6>Business eYe Level 2</h6>
                    <h3>50$</h3>
                    <div className="selecte_feature_text">
                    <p>
                            Flat fee of $50 to mint an unlimited amount of NFTs per 30-day cycle. Unlimited Launcher Access, upload up to 200 MB (free of charge).
                    </p>
                    <p>Users can launch NFT campaigns and whitelist an unlimited amount of addresses to be able to receive them</p>
                    </div>
                    <button className="subscribe_feature"><span>Subscribe</span></button>
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default SelectFeature;
