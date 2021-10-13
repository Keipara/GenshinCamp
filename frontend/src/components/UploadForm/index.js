import React from 'react'
import { requireAuth } from '../../../../backend/utils/auth';
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

  // Add your own authentication on the below line.
  const isLoggedIn = requireAuth;

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/signup', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
