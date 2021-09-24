import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../../utils/auth';

const PrivateRoute = ({ children, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page

    <Route
      {...rest}
      render={(props) => {
        return isAuth() ? children : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
