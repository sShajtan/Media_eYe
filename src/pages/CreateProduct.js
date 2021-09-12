import React from 'react';
import CreateProductMain from '../components/CreateProduct/CreateProduct/CrerateProduct';

const CreateProduct= (props) => {
  const { closeNftCollapse, darkTheme } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse}>
        <CreateProductMain darkTheme={darkTheme} />
      </div>
    </React.Fragment>
  );
};

export default CreateProduct;
