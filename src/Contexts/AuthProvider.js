import React, { createContext } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
// import auth from "../firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const [user] = useAuthState(auth);

  const { data: dollarRate } = useQuery({
    queryKey: ["dollarRate"],
    queryFn: () =>
      fetch("https://ashrafs-servier.vercel.app/dollarRate").then((res) =>
        res.json()
      ),
  });

  const { data: userInfo, isLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/userInfo`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading />;
  }
  const authInfo = {
    userInfo,
    dollarRate,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
