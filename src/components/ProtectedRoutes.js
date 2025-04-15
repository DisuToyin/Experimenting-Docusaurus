// src/components/ProtectedRoute.js
import React from 'react';
import { Redirect } from '@docusaurus/router';
import { isAuthenticated } from '../utils/useIsAuthenticated';

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Redirect to="/login" />;
  }
  return children;
};

export default ProtectedRoute;