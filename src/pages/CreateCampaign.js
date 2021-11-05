import React from 'react';
import CreateCampaignMain from '../components/CreateCampaign/CreateCampaign/CreateCampaign';

const CreateCampaign = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <CreateCampaignMain />
      </div>
    </React.Fragment>
  );
};

export default CreateCampaign;
