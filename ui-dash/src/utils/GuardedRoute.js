import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import AuthContext from './context/AuthContext'; // Import your AuthContext

const GuardedRoute = ({ element: Element, allowedRoles, ...rest }) => {
  const { user } = useContext(AuthContext);

  // Check if user is authenticated and has the allowed role
  const isAuthenticated = user !== null;
  const hasAllowedRole = allowedRoles.includes(user?.role);

  return (
    <Route
      {...rest}
      element={
        isAuthenticated && hasAllowedRole ? (
          <Element />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
};

export default GuardedRoute;
