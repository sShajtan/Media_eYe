import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../components/LogIn/LogIn.js';

const LogIn = (props) => {
  const darkTheme = useSelector((state) => state.app.darkTheme);
  const { closeNftCollapse } = props;

  return (
    <React.Fragment>
      <div onClick={closeNftCollapse} className="marketplace">
        <Login />
      </div>
    </React.Fragment>
  );
};

export default LogIn;
