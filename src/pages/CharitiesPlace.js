import React from 'react';
import CharitiesPlaceMain from '../components/Charity/CharitiesPlace/CharitiesPlace';

const CharitiesPlace = (props) => {
  const { closeNftCollapse, togglePopup } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <CharitiesPlaceMain togglePopup={togglePopup} />
      </div>
    </React.Fragment>
  );
};

export default CharitiesPlace;
