import React from 'react';
import AccountCurrentlyMain  from '../components/Account/AccountCurrently/AccountCurrently';

const AccountCurrently = (props) => {
   const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <AccountCurrentlyMain />
      </div>
    </React.Fragment>
  );
};

export default AccountCurrently;
