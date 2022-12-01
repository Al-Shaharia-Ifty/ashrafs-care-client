import { useEffect, useState } from "react";

const useGoogleToken = (google) => {
  const [token, setToken] = useState(null);
  const email = google?.user?.email;
  const memberInfo = {
    email: email,
    role: "member",
  };
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/googleUser/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(memberInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [email]);

  return [token];
};

export default useGoogleToken;
