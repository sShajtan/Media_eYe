import React, { useState } from 'react';
import './Popup.css';
import { useSelector} from 'react-redux';
import CloseIcon from '../../Icons/CloseIcon';
import ReactTooltip from 'react-tooltip';
import PopupSuccess  from './SuccessPopup/Popup';
import { send } from 'emailjs-com';

const Popup = (props) => {
  const { togglePopup } = props;
  const theme = useSelector((state) => state.app.darkTheme);
  const [activeToken, setActiveToken] = useState(null);
  const [activeBlockchain, setActiveBlockchain] = useState(null);
  const [showPopupSuccess, setShowPopupSuccess] = useState(false);



  const togglePopupSuccess = () => {
      setShowPopupSuccess(!showPopupSuccess);
  };

  const sendForm = () =>{
     setShowPopupSuccess(!showPopupSuccess);
     props.togglePopup()
  }

  return (
    
    <React.Fragment>
      <PopupSuccess showPopup={showPopupSuccess}
            togglePopup={togglePopupSuccess} />
      <div className={props.showPopup ? 'popup active' : 'popup'}>
        <div
          className="popup-wrapper mint_popup"
          onClick={props.togglePopup}
        >
          <div
            onClick={(event) => event.stopPropagation()}
          >
            <div className="container">
              <div className="main_mint_popup">
              <div className="close" onClick={props.togglePopup}>
                <CloseIcon />
              </div>
                <h4>Mint NFT</h4>
                <div className="marketplace_block_wrapper minted_block_popup">
                  <div className="marketplace_block">
                    <div className="marketplace_block_img">
                    <div className="marketplace_block_img_wrapper ">
                      <img src="../../../img/marketplace_img.png" alt="marketplace block img" />
                    </div>
                    </div>
                    <div className="marketplace_block_info">
                      <h6>Demo Title, Demo Title </h6>
                      <a>@user123</a>
                    </div>
                  </div>
                </div>
          <div className="collection_block">
            <label>Name</label>
            <input className="name" type="text" />
          </div>
          <div className="collection_block collection_block_mint">
            <label>Decscription</label>
            <textarea rows="5"></textarea>
          </div>
          <div className="collection_block collection_block_mint">
            <label>Mint to</label>
            <input type="text" />
          </div>
            <div className="collection_block collection_block_buttons collection_block_blockchain">
            <label>Blockchain</label>
            <span>
              Select the blockchain where you’d like new items from this
              collection to be added by default.
            </span>
            <div>
              <button className={activeBlockchain == 'ETH' ? 'active' : null} onClick={() => {setActiveBlockchain('ETH')}}>
                <img
                  src={
                    theme ? '../img/eth_sm.png' : '../img/eth_sm_dark.png'
                  }
                />
                <div>
                  <h6>ETH</h6>
                  <span>Ethereum</span>
                </div>
              </button>
              <button className={activeBlockchain == 'BNB' ? 'active' : null} onClick={() => {setActiveBlockchain('BNB')}}>
                <img src="../img/bnb.png" />
                <div>
                  <h6>BNB</h6>
                  <span>Binance</span>
                </div>
              </button>
            </div>
          </div>
          <div className="collection_block collection_block_buttons collection_block_blockchain collection_block_tokens">
            <label>Token type</label>
            <ReactTooltip />
            <div>
              <div>
                <button className={activeToken == '721' ? 'active' : null} onClick={() => {setActiveToken('721')}}>
                  <img src={activeToken  == '721' && theme === false ? "../img/alt_white.png" : "../img/alt.png" } />
                  <div>
                    <h6>ERC - 721</h6>
                  </div>
                </button>
                <div>
                  <img src="../img/i.png" data-html={true} data-class="roadmap_popup roadmap_popup_active"  data-tip="<h6><img src='../img/alt.png' />ERC - 721</h6>
                  <br/>ERC-721 is a global Token standard exhibiting functionalities of developing the Non-Fungible Tokens over the Ethereum blockchain. The ERC-721 contributes to the rarity and uniqueness to the assets designed and developed. The NFTs are developed with unique uint256 token ID attributes that are available globally." />
                </div>
              </div>
              <div>
                <button className={activeToken == '1155' ? 'active' : null} onClick={() => {setActiveToken('1155')}}>
                  <img src={activeToken  == '1155' && theme === false ? "../img/alt_white.png" : "../img/alt.png" } />
                  <div>
                    <h6>ERC - 1155</h6>
                  </div>
                </button>
                <div>
                <img src="../img/i.png"  data-html={true} data-class="roadmap_popup roadmap_popup_active" data-tip="<h6><img src='../img/alt.png' />ERC - 1155</h6>
                  <br/>ERC-1155 is a token standard specifically designed and developed by the Enjin network. ERC-1155 can be used to create both fungible (currencies) and non-fungible (digital cards, pets and in-game skins) assets exclusively on the Ethereum Blockchain Network Architecture along with Transaction bundling which reduces the cost of token development." />
                  
                </div>
              </div>
            </div>
          </div>
          <div className="mint_popup_footer">
              <div className="marketplace_block_info">
                 <div className="on_sale_in_checkbox">
                      <input id='Proprietary' type="checkbox" />
                      <label htmlFor='Proprietary'>
                        <span></span>
                      </label>
                    </div>
                Proprietary
              </div>
              <div className="collection_block">
                <span>Mint more than one (only for erc1155)</span>
                <input />
              </div>
            </div>     
            <button className="mint_btn" onClick={() => sendForm()}>Mint</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Popup;
