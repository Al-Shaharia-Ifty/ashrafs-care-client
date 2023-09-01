import React, { useContext, useState } from "react";
import Loading from "../../Shared/Loading";
import { useQuery } from "react-query";
import { PhotoProvider, PhotoView } from "react-photo-view";
import ContentOrderModel from "../../Modal/ContentOrderModel";
import { AuthContext } from "../../Contexts/AuthProvider";
import DeleteContentModal from "../../Modal/DeleteContentModal";

const ContentDesign = () => {
  const { userInfo } = useContext(AuthContext);
  const [designDelete, setDesignDelete] = useState(false);
  const [order, setOrder] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    data: facebookContent,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["facebookContent"],
    queryFn: () =>
      fetch(`https://ashrafs-servier.vercel.app/content-design`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  if (isLoading || loading) {
    return <Loading />;
  }
  return (
    <div className="min-h-screen">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:mx-[52px] mx-[14px] gap-[22px] pb-3 mt-5">
        {[...facebookContent].reverse().map((d, i) => (
          <div key={i}>
            <PhotoProvider>
              <PhotoView src={d.img}>
                <img className="rounded-t-xl" src={d.img} alt="" />
              </PhotoView>
            </PhotoProvider>
            <p className="bg-primary text-white p-[2px] px-2">{d.designName}</p>
            <div className="flex items-center justify-between p-2 px-2 text-white bg-[#166534]">
              <p className="text-xs md:text-sm">Price: ৳{d.amount}</p>
              <button className="small-btn">
                <label htmlFor="graphic-order" onClick={() => setOrder(d)}>
                  Order Now
                </label>
              </button>
            </div>
            {userInfo?.role === "admin" && (
              <div className="bg-red-600 flex justify-center p-1">
                <button className="small-btn">
                  <label
                    htmlFor="design-delete"
                    onClick={() => setDesignDelete(d)}
                  >
                    Delete Order
                  </label>
                </button>
              </div>
            )}
            {order && (
              <ContentOrderModel
                order={order}
                setOrder={setOrder}
                setLoading={setLoading}
                imag={d.img}
              />
            )}
          </div>
        ))}
      </div>
      {designDelete && (
        <DeleteContentModal
          designDelete={designDelete}
          setLoading={setLoading}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ContentDesign;
