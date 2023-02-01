import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import auth from "../firebase.init";

const RequireAdmin = ({ children }) => {
  const { userInfo } = useContext(AuthContext);
  if (userInfo.role === "admin") {
    return children;
  } else {
    signOut(auth);
    localStorage.removeItem("accessToken");
    return <Navigate to="/login" />;
  }
};

export default RequireAdmin;
