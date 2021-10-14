import React from 'react';
import Signup from '../components/SignUp/SignUp.js';

const SignUp = (props) => {
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <Signup />
      </div>
    </React.Fragment>
  );
};

export default SignUp;
