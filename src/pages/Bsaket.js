import React from 'react';
import BasketMain from '../components/Basket/Basket';


const Basket = (props) => {
  const { closeNftCollapse } = props;
  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <BasketMain />
      </div>
    </React.Fragment>
  );
};

export default Basket;
