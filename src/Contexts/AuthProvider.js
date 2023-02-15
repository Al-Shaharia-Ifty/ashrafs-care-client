import React, { createContext } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, userLoading] = useAuthState(auth);

  const { data: dollarRate } = useQuery({
    queryKey: ["dollarRate"],
    queryFn: () =>
      fetch("https://ashrafs-servier.vercel.app/dollarRate").then((res) =>
        res.json()
      ),
  });

  const {
    data: userInfo,
    isLoading,
    refetch,
  } = useQuery({
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

  const { data: adminAllOrder, adminOrderLoading } = useQuery({
    queryKey: ["adminAllOrder"],
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/admin/allOrder`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  const { data: notification } = useQuery({
    queryKey: ["notification"],
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/get-notification`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  // admin balance
  const { data: adminBalance } = useQuery({
    queryKey: ["adminBalance"],
    queryFn: () =>
      fetch(`http://localhost:5000/admin-balance`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  if (isLoading || userLoading) {
    return <Loading />;
  }
  const authInfo = {
    user,
    userInfo,
    dollarRate,
    adminAllOrder,
    adminOrderLoading,
    notification,
    adminBalance,
    refetch,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
