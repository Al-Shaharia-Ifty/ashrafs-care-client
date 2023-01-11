import { useEffect, useState } from "react";

const useGoogleToken = (google) => {
  const [token, setToken] = useState(null);
  const email = google?.user?.email;
  const img = google?.user.photoURL;
  const name = google?.user.displayName;
  useEffect(() => {
    const memberInfo = {
      img: img,
      email: email,
      name: name,
      role: "member",
    };
    if (email) {
      fetch(`https://ashrafs-servier.vercel.app/googleUser/${email}`, {
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
  }, [email, img, name]);

  return [token];
};

export default useGoogleToken;
