import React from 'react';
import { useSelector } from 'react-redux';
import Signup from '../components/SignUp/SignUp.js';

const SignUp = (props) => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
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
