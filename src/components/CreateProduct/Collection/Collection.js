import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Collection.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import avatar from '../../../assets/img/avatar_collection.png'
import ReactTooltip from 'react-tooltip';
import CollectionBlock from '../CollectionBlock/CollectionBlock';
import {Collapse} from 'react-collapse';

const animatedComponents = makeAnimated();

let minters = [
  { id: 1, value: 'Artist_Title_1', label: <span><img src={avatar} />&ensp; Artist_Title<button>Add</button></span>, img: avatar },
  { id: 2, value: 'Artist_Title_2', label: <span><img src={avatar} />&ensp; Artist_Title<button>Add</button></span>, img: avatar },
  { id: 3, value: 'Artist_Title_3', label: <span><img src={avatar} />&ensp; Artist_Title<button>Add</button></span>, img: avatar },
  { id: 4, value: 'Artist_Title_4', label: <span><img src={avatar} />&ensp; Artist_Title<button>Add</button></span>, img: avatar },
];


const Collection = (props) => {
  const [activeMinters, setActiveMinters] = useState([]);
  const { darkTheme } = props;
  const [activeToken, setActiveToken] = useState(null);
  const [activeBlockchain, setActiveBlockchain] = useState(null);
  const [showAddContent, setShowAddContent] = useState(true);
  const [valueSelect, setValueSelect] = useState(null);
  let history = useHistory();
  
  
  const handleChangMinters = (e) => {
    if(e[0] === undefined){
      return;
    }
    let arr = activeMinters.slice();
    arr.push(e[0]);
    setActiveMinters(arr);
        minters.forEach(function(item, i) {
        if(item.id == e[0].id){
          minters.splice(i, 1);
        }
      })
  };

  const deleteMinters = (id) => {
    let arr = activeMinters.slice();
    arr.forEach(function(item, i) {
      if(item.id == id){
        arr.splice(i, 1);
        minters.push(item);
      }
    });
      setActiveMinters(arr);
    }
    




    const activeMintersList = activeMinters.map(function(item) {
      return <div className="active_minters_block" >
            <img src="../img/close_btn.png" className="close_btn" onClick={() => deleteMinters(item.id)} />
            <img src={item.img} />
            <h5>{item.value}</h5>      
          </div>;
   });
  

  
  return (
    
    <div className="collection_product">
      <div className="container">
        <a className="goBack_button" onClick={() => history.goBack()}>
          <span>&#8592; </span> GoBack
        </a>
        <h3>Create your collection</h3>
        <a className="tutorial">Tutorial &#5125;</a>
        <div className="collection_product_main">
        <div className="collection_block collection_block_buttons collection_block_blockchain">
            <h5>Blockchain</h5>
            <span>
              Select the blockchain where you’d like new items from this
              collection to be added by default.
            </span>
            <div>
              <button className={activeBlockchain == 'ETH' ? 'active' : null} onClick={() => {setActiveBlockchain('ETH')}}>
                <img
                  src={
                    darkTheme ? '../img/eth_sm.png' : '../img/eth_sm_dark.png'
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
            <h5>Token type</h5>
            <ReactTooltip />
            <div>
              <div>
                <button className={activeToken == '721' ? 'active' : null} onClick={() => {setActiveToken('721')}}>
                  <img src={activeToken  == '721' && darkTheme === false ? "../img/alt_white.png" : "../img/alt.png" } />
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
                  <img src={activeToken  == '1155' && darkTheme === false ? "../img/alt_white.png" : "../img/alt.png" } />
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
          <div className="collection_logo_img collection_block collection_block_img">
            <h5>Logo image</h5>
            <span>
              This image will also be used for nsvigation. 350 x 350 recommended.
            </span>
            <label>
              <input type="file" ection_block />
            </label>
          </div>
          <div className="collection_fratured_img collection_block collection_block_img">
            <h5>Fratured image</h5>
            <span>
              (optional) This image will be used for featuring your collection on the homepage, category pages, or
othe promotional areas of Media eYe. . 600 x 600 recommendedhis image will also be used for nsvigation. 350 x 350
              recommended.
            </span>
            <label>
              <input type="file" ection_block />
            </label>
          </div>
          <div className="collection_banner_img collection_block collection_block_img">
            <h5>Banner image</h5>
            <span>
              (optional) This image will appear at the top of your collection page. Avoid icluding too much text in
this banner image, as the dimensions change on different devices. 1400 x 400 recommended.
            </span>
            <label>
              <input type="file" ection_block />
            </label>
          </div>
          <div className="collection_block collection_block_name">
            <div>
              <label>Name</label>
              <input type="text" />
              <span>Choose a name for your store.</span>
            </div>
            <div className="symbol_block">
              <label>Symbol (ERC 721)</label>
              <input type="text" />
            </div>
          </div>
          <div className="collection_block collection_block_url">
            <label>URL</label>
            <input type="text" />
            <span>
              Customize your URL on OpenSea. Must only contain lowercase
              letters, numbers, and hyphens.
            </span>
          </div>
          <div className="collection_block collection_block_desc">
            <label>Decscription</label>
            <textarea rows="5"></textarea>
          </div>
        <div className="collection_block collection_block_url">
            <label onClick={()=>setShowAddContent(!showAddContent)}>Add content (Optional) &nbsp;&nbsp; &nbsp;<span className={showAddContent ? "content_arrow active" : "content_arrow"}>&#10094;</span>&nbsp;&nbsp;&nbsp;<img src="../img/i.png" /> </label>
            <Collapse isOpened={showAddContent}>
              <div className="collection_block_content_wrapper">
                <div className="collection_block_content">
                    <CollectionBlock id={1} activeToken={activeToken} />
                    <CollectionBlock id={2} activeToken={activeToken}/>
                    <CollectionBlock id={3} activeToken={activeToken}/>
                    <CollectionBlock id={4} activeToken={activeToken}/>
                    <CollectionBlock id={5} activeToken={activeToken}/>
                    <CollectionBlock id={6} activeToken={activeToken}/>
                    <CollectionBlock id={7} activeToken={activeToken}/>
                    <CollectionBlock id={8} activeToken={activeToken}/>
                </div>
              </div>
              <button className="load_more">Load more</button>
            </Collapse>
          </div>
          <div className="collection_block collection_block_url">
            <label>Add Minters (Optional) &nbsp;&nbsp;&nbsp;<img src="../img/i.png" /> </label>
            <div className="collection_block_content_minters">
              <Select
                components={animatedComponents}
                options={minters}
                placeholder="@user_name"
                onChange={handleChangMinters}
                isMulti
                value={valueSelect}
              />
            </div>
            <div className="active_minters">
              {activeMintersList}
            </div>
          </div>
          <div className="collection_block collection_block_links">
            <span>Links</span>
            <div>
              <input placeholder="yoursite.io" />
              <img src="../img/close_btn.png" />
            </div>
            <div>
              <input placeholder="https://discord.gg/abcde" />
              <img src="../img/close_btn.png" />
            </div>
            <div>
              <input placeholder="https://twitter.com/YourTwitterHandle" />
              <img src="../img/close_btn.png" />
            </div>
            <div>
              <input placeholder="https://www.instagram.com/YourInstagramHandle" />
              <img src="../img/close_btn.png" />
            </div>
            <div>
              <input placeholder="https://www.medium.com/@YourMediumHandle" />
              <img src="../img/close_btn.png" />
            </div>
            <div>
              <input placeholder="https://t.me/abcdef/" />
              <img src="../img/close_btn.png" />
            </div>
          </div>

          <button className="create">Create</button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
