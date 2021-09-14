import React from 'react';
import SelectFeature from '../components/SelectFeature/SelectFeature';

const Feature = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <SelectFeature />
      </div>
    </React.Fragment>
  );
};

export default Feature;
