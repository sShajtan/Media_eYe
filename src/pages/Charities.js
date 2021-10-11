import React from 'react';
import CharitiesMain from '../components/Charity/Charities/Charities';

const Charities = (props) => {
  const { closeNftCollapse, togglePopup } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <CharitiesMain togglePopup={togglePopup} />
      </div>
    </React.Fragment>
  );
};

export default Charities;
