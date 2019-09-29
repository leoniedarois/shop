import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ component: Component, ...rest }) => {
  const token = 't';
  return (
    <Route
      {...rest}
      component={props =>
        token.length > 0 ? (
          <Redirect to="/" />
        ) : (
          <ErrorBoundary>
            <Component {...props} />
          </ErrorBoundary>
        )
      }
    />
  );
};

export default PublicRoute;
