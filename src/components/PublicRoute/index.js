import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../../utils/auth';

const PublicRoute = ({ children, restricted, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isAuth() && restricted ? <Redirect to="/nft-marketplace" /> : children
      }
    />
  );
};

export default PublicRoute;
