import React from 'react';
import Single from '../components/CreateProduct/Single/Single';

const CreateSingleProduct= (props) => {
  const { closeNftCollapse, darkTheme } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse}>
        <Single darkTheme={darkTheme} />
      </div>
    </React.Fragment>
  );
};

export default CreateSingleProduct;
