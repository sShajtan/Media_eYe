import React from 'react';
import Single from '../components/CreateProduct/Single/Single';

const CreateSingleProduct = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse}>
        <Single />
      </div>
    </React.Fragment>
  );
};

export default CreateSingleProduct;
