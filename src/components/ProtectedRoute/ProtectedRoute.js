import React from "react";
import { URLS } from "../../utils/constants";
import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ isAuthorized, children }) => {
  return isAuthorized ? children : <Redirect to={URLS.LANDING} />;
};

export default ProtectedRoute;