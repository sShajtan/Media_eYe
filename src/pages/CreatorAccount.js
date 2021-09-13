import React from 'react';
import CreatorAccountMain from '../components/Creators/CreatorAccount/CreatorAccount';

const CreatorAccount = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <CreatorAccountMain />
      </div>
    </React.Fragment>
  );
};

export default CreatorAccount;
