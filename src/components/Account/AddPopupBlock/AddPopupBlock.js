import React from 'react';
import './AddPopupBlock.css';


const AddPopupBlock = (props) => {
  const { id, activeToken } = props;
  return (
    <div className="marketplace_block_wrapper add_popup_block">
      <div className="marketplace_block">
        <div className="marketplace_block_img">
        <div className="marketplace_block_img_wrapper ">
          <img src="../../img/marketplace_img.png" alt="marketplace block img" />
        </div>
        </div>
        <div className="marketplace_block_info">
          <div>
            <h6>Demo Title, Demo Title</h6>
            <a>@user123</a>
          </div>
          <div className="on_sale_in_checkbox">
                      <input id={id} type="checkbox" />
                      <label htmlFor={id}>
                        <span></span>
                      </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPopupBlock;
