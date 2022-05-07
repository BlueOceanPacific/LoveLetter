import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function AuthWrapper({ children }) {
  // Update: need to store login status in Zustand store and authenticate based on that

  if (valid === null) {
    return <div>Processing Login</div>;
  }

  if (!valid) {
    return <Navigate to="/login" />;
  }

  return children;
}

AuthWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthWrapper;
