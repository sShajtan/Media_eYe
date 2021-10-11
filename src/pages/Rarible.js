import React from 'react';


const Rarible = (props) => {
  const { closeNftCollapse } = props;
  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <div></div>
      </div>
    </React.Fragment>
  );
};

export default Rarible;
