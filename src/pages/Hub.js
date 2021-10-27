import React from 'react';
import HubMain from '../components/Hub/HubMain/HubMain';

const Hub = (props) => {
  const { closeNftCollapse, togglePopup } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse}>
        <HubMain togglePopup={togglePopup} />
      </div>
    </React.Fragment>
  );
};

export default Hub;
