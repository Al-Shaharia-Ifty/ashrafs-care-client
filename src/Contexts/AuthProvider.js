import React, { createContext } from "react";
import auth from "../firebase.init";

export const AuthContext = createContext();

const createUser = (email, password) => {
  return;
};

const authInfo = {
  createUser,
};

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
