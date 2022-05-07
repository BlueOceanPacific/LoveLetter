import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import useStore from '../Store/store';

function AuthWrapper({ children }) {
  const loggedIn = useStore((state) => state.loggedIn);

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

AuthWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthWrapper;
