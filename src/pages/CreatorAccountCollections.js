import React from 'react';
import CreatorCollections from '../components/Creators/CreatorCollections/CreatorCollections';

const CreatorAccountCollections = (props) => {
   const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <CreatorCollections />
      </div>
    </React.Fragment>
  );
};

export default CreatorAccountCollections;
