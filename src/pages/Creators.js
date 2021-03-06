import React from 'react';
import CreatorsHeader from '../components/Creators/CreatorsHeader/CreatorsHeader';
import CreatorsMain from '../components/Creators/CreatorsMain/CreatorsMain';

const Creators = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <CreatorsHeader />
        <CreatorsMain title="Popular" showLoadMore={true} />
        <CreatorsMain title="All Artists" showLoadMore={true} />
      </div>
    </React.Fragment>
  );
};

export default Creators;
