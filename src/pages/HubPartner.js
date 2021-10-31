import React from 'react';
import HubMainPartner from '../components/Hub/HubMainPartner/HubMainPartner';

const HubPartner = (props) => {
  const { closeNftCollapse, togglePopup } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <HubMainPartner togglePopup={togglePopup} />
      </div>
    </React.Fragment>
  );
};

export default HubPartner;
