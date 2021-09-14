import React from 'react';
import CreateProductMain from '../components/CreateProduct/CreateProduct/CrerateProduct';

const CreateProduct = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse}>
        <CreateProductMain />
      </div>
    </React.Fragment>
  );
};

export default CreateProduct;
