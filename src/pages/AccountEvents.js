import React from 'react';
import AccountEventsMain from '../components/Account/AccountEvents/AccountEvents';

const AccountEvents = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <AccountEventsMain />
      </div>
    </React.Fragment>
  );
};

export default AccountEvents;
