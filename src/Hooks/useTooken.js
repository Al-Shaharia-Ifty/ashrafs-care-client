import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  const email = user?.user?.email;
  useEffect(() => {
    const currentUser = { email: email };
    if (email) {
      fetch(`https://ashrafs-servier.vercel.app/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
          if (user) {
            const name = user?.user?.displayName;
            const email = user?.user?.email;
            const url = `https://ashrafs-servier.vercel.app/updateUser/${email}`;

            fetch(url, {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({ name }),
            }).then((res) => res.json());
          }
        });
    }
  }, [email, user]);
  return [token];
};

export default useToken;
