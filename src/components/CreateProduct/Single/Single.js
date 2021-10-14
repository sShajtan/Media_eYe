import React from 'react';
import { useHistory } from 'react-router-dom';
import './Single.css';

const Single = (props) => {
  let history = useHistory();

  return (
    <div className="single_product">
      <div className="container">
        <button className="goBack_button" onClick={() => history.goBack()}>
          <span>&#8592; </span> Go Back
        </button>
        <h3>Create your NFT Product</h3>
        <a className="tutorial" href="/">
          Tutorial &#5125;
        </a>
        <div className="single_product_main">
          <div className="row_1">
            <div className="col_1">
              <div className="single_product_image_wrapper">
                <img src="../../img/marketplace_img.png" alt="marketplace" />
              </div>
            </div>
            <div className="col_2">
              <h2>Select or upload content</h2>
              <button className="product_single_select">
                <span>Upload Your Content</span>
              </button>
              <h4>Have already approved content</h4>
              <button className="product_single_upload">
                <span>Browse</span>
              </button>
            </div>
          </div>
          <div className="product_single_mainform">
            {/* <div className="content_id">
              <label>Content ID</label>
              <input value="#88523" />
            </div> */}
            <div className="name">
              <label>Name</label>
              <input />
            </div>
            <div className="url">
              <label>Embed your URL link</label>
              <input />
              <span>
                The URL of your website. If you don't have a website, provide a
                social media url.
              </span>
            </div>
            <div className="type">
              <label>Type</label>
              <input />
            </div>
            <div className="category">
              <label>Content ID</label>
              <input />
              <span>
                Select a category that best fits your primary niche / industry.
              </span>
            </div>
            <div className="decscription">
              <label>Decscription</label>
              <textarea rows="5"></textarea>
            </div>
          </div>
          <span className="allow">
            Please allow up to 24 hours for moderation of your content
          </span>
          <button className="create">
            <span>Create Content</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Single;
