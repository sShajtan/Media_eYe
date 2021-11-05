import React from 'react';
import AirdropMain from '../components/CreateCampaign/Airdrop/Airdrop';

const Airdrop = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <AirdropMain />
      </div>
    </React.Fragment>
  );
};

export default Airdrop;
