import React from 'react';
import CreatorCollectionMain from '../components/Creators/CreatorCollection/CreatorCollection';

const CreatorAccount = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <CreatorCollectionMain />
      </div>
    </React.Fragment>
  );
};

export default CreatorAccount;
