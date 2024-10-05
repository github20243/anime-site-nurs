import React from 'react';
import { Navigate } from "react-router-dom";

interface PrivateRouterProps {
  Component: React.ComponentType;
  fallBackPath: string;
  isAuth: boolean;
}

const PrivateRouter: React.FC<PrivateRouterProps> = ({ Component, fallBackPath, isAuth }) => {
  return isAuth ? <Component /> : <Navigate to={fallBackPath} replace />;
};

export default PrivateRouter;