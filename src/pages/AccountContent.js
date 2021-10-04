import React from 'react';
import AccountContentMain from '../components/Account/AccountContent/AccountContent';

const AccountContent = (props) => {
   const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <AccountContentMain />
      </div>
    </React.Fragment>
  );
};

export default AccountContent;
