import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const BlogPage = () => {
  const params = useParams();
  const { isLoading, data: news } = useQuery({
    queryKey: "news",
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/update/${params.id}`).then(
        (res) => res.json()
      ),
  });
  if (isLoading) {
    return <Loading />;
  }
  const { heading, img, details } = news;
  return (
    <div>
      <div className="pt-20 bg-green-800"></div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
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
            <h1 className="lg:text-5xl text-2xl mt-10 font-bold">{heading}</h1>
            <p className="py-6 text-xl">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
