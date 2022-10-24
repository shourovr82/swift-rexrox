import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContextss';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext)
  console.log(user);
  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
  }
  return children;
};

export default PrivateRoute;