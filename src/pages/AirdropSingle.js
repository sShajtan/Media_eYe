import React from 'react';
import AirdropSingleMain from '../components/CreateCampaign/AirdropSingle/AirdropSingle';

const AirdropSingle = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <AirdropSingleMain />
      </div>
    </React.Fragment>
  );
};

export default AirdropSingle;
