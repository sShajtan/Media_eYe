import React from 'react';
import CharitiesSingleMain from '../components/Charity/CharitiesSingle/CharitiesSingle';

const CharitiesSingle = (props) => {
  const { closeNftCollapse, togglePopup } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <CharitiesSingleMain togglePopup={togglePopup} />
      </div>
    </React.Fragment>
  );
};

export default CharitiesSingle;
