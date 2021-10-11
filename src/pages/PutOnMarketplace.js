import React from 'react';
import PutOnMarketplaceMain from '../components/PutOn/PutOnMarketplace/PutOnMarketplace';

const PutOnMarketplace = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse}>
        <PutOnMarketplaceMain />
      </div>
    </React.Fragment>
  );
};

export default PutOnMarketplace;
