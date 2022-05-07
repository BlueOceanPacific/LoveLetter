import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import useStore from '../Store/store';

function AuthWrapper({ children }) {
  // Get login status from Zustand store
  const loggedIn = useStore((state) => state.loggedIn);

  // If we are not logged in, redirect to login page
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  // If we are logged in, allow the child component to render
  return children;
}

AuthWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthWrapper;
