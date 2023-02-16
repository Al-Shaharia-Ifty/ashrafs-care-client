import React, { useContext } from "react";
import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Shared/Loading";

const BlogPage = () => {
  const params = useParams();
  const { userInfo } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { isLoading, data: news } = useQuery({
    queryKey: "news",
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/update/${params.id}`).then(
        (res) => res.json()
      ),
  });
  if (isLoading || loading) {
    return <Loading />;
  }
  const { heading, img, details, _id } = news;

  const deleteUpdate = (id) => {
    setLoading(true);
    fetch("https://ashrafs-servier.vercel.app/admin/delete-update", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        navigate("/");
      });
  };
  return (
    <div>
      <div className="pt-20 bg-green-800"></div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          {userInfo.role === "admin" && (
            <button onClick={() => deleteUpdate(_id)} className="btn btn-error">
              Delete Update
            </button>
          )}
          <PhotoProvider>
            <PhotoView src={img}>
              <img
                src={img}
                className="w-full max-w-lg rounded-lg shadow-2xl"
                alt=""
              />
            </PhotoView>
          </PhotoProvider>
          <div>
            <h1 className="lg:text-5xl text-2xl text-center mt-10 font-bold">
              {heading}
            </h1>
            <p className="py-6 text-xl text-justify">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
