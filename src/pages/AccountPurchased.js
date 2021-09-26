import React from 'react';
import AccountPurchasedMain  from '../components/Account/AccountPurchased/AccountPurchased';

const AccountPurchased = (props) => {
   const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <AccountPurchasedMain />
      </div>
    </React.Fragment>
  );
};

export default AccountPurchased;
