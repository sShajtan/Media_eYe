import React from 'react';
import AccountMaintedMain  from '../components/Account/AccountMainted/AccountMainted';

const AccountMainted = (props) => {
   const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <AccountMaintedMain />
      </div>
    </React.Fragment>
  );
};

export default AccountMainted;
