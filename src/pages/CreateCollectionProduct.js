import React from 'react';
import CollectionComponent from '../components/CreateProduct/Collection/Collection';

const Collection= (props) => {
  const { closeNftCollapse, darkTheme } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse}>
        <CollectionComponent darkTheme={darkTheme} />
      </div>
    </React.Fragment>
  );
};

export default Collection;
