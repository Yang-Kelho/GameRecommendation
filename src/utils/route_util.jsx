import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({user, children}) => {
  if (!user){
    return <Navigate to={"/"} replace/>
  };
  return children;
};