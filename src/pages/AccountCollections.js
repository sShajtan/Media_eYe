import React from 'react';
import Collections from '../components/Account/AccountCollections/AccountCollections';

const AccountCollections = (props) => {
   const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <Collections />
      </div>
    </React.Fragment>
  );
};

export default AccountCollections;
