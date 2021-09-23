import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Basket.css';

const Basket = (props) => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
 let history = useHistory();

  return (
    <div className="basket">
        <div className="container">
        <div className="basket_header">
            <div>
                <div>
                    <a className="goBack_button" onClick={() => history.goBack()}>
                        <span>&#8592; </span> GoBack
                    </a>
                    <h3>Create your collection</h3>
                </div>
                <div className="basket_items">
                <h4><span>5 </span>Items in your basket</h4>
            </div>
            </div>
            
            <div className="basket_total">
                <div>Grand Total: <span><strong>5 ETH</strong>($12345)</span></div>
                <div>or <span>12345 eYe ($1234)</span></div>
            </div>
        </div>
            <div className="basket_main">
            
            </div>
        </div>
    </div>
  );
};

export default Basket;
