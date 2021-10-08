import React from 'react';
import AccountFavoriteMain  from '../components/Account/AccountFavorite/AccountFavorite';

const AccountPurchased = (props) => {
   const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <AccountFavoriteMain />
      </div>
    </React.Fragment>
  );
};

export default AccountPurchased;
