import React from "react";
import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../Assets/website-img/logo512.png";
import { AuthContext } from "../Contexts/AuthProvider";
import auth from "../firebase.init";
// import spt from "../Assets/icons/Artboard-17.png";
import not from "../Assets/icons/Artboard-18.png";
import pro from "../Assets/icons/Artboard 21.png";
import { signOut } from "firebase/auth";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "./Loading";
import UpdateNoteModal from "../Modal/UpdateNoteModal";

const DashboardNavbar = () => {
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState(false);
  const [user] = useAuthState(auth);
  const { userInfo, refetch, notification, adminBalance } =
    useContext(AuthContext);
  const [closeDropDown, setCloseDropDown] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const orderID = data.orderID;
    reset();
    navigate(`/dashboard/order-details/${orderID}`);
  };
  if (loading || !adminBalance) {
    return <Loading />;
  }

  // update notification
  const deleteNot = (id) => {
    setLoading(true);
    fetch("https://ashrafs-servier.vercel.app/admin/deleteNot", {
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
      });
  };
  return (
    <div>
      <div className="py-5 bg-[#166534] pl-5 pr-5 md:pl-8 md:pr-8 flex justify-between items-center">
        <div className="flex">
          <Link to={"/dashboard"}>
            <img className="md:w-16 w-12" src={logo} alt="" />
          </Link>
          {userInfo.role === "admin" && (
            <div className="hidden lg:flex items-center">
              <div className="bg-white p-3 rounded-lg ml-5 flex items-center">
                <p className="font-bold text-xl">Balance</p>
                <p className="text-2xl ml-5">{adminBalance[0].balance} Tk</p>
              </div>
            </div>
          )}
        </div>
        <div>
          {user && (
            <div className="flex items-center justify-between">
              {userInfo.role === "member" && (
                <>
                  <div className="flex gap-3 items-center m-2">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex justify-center items-center h-9 md:h-12 w-40 md:w-80"
                    >
                      <input
                        type="text"
                        placeholder="Type Order ID"
                        className="input input-bordered w-full h-full max-w-xs rounded-l-full"
                        {...register("orderID", {
                          required: {
                            value: true,
                          },
                        })}
                      />
                      <button className="bg-white h-full rounded-r-full px-3 w-16">
                        <AiOutlineSearch className="text-3xl" />
                      </button>
                    </form>
                    <div className="dropdown dropdown-end">
                      <label tabIndex={0} className="">
                        <img
                          className="w-9 md:w-full md:h-[45px]"
                          src={not}
                          alt=""
                        />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content p-2 shadow bg-base-100 rounded-box w-64 mt-4 max-h-[400px] overflow-y-auto"
                      >
                        {notification
                          ?.slice()
                          .reverse()
                          .map((n, i) => (
                            <li
                              key={i}
                              className="m-2 p-3 border-2 border-primary rounded-md text-xl"
                            >
                              <p>{n.p}</p>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
              {userInfo.role === "admin" && (
                <>
                  <div className="flex gap-3 items-center m-2">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex justify-center items-center h-9 md:h-12 w-40 md:w-80"
                    >
                      <input
                        type="text"
                        placeholder="Type Order ID"
                        className="input input-bordered w-full h-full max-w-xs rounded-l-full"
                        {...register("orderID", {
                          required: {
                            value: true,
                          },
                        })}
                      />
                      <button className="bg-white h-full rounded-r-full px-3 w-16">
                        <AiOutlineSearch className="text-3xl" />
                      </button>
                    </form>
                    {/*  */}
                    <div className="dropdown dropdown-end">
                      <label tabIndex={0} className="">
                        <img
                          className="w-9 md:w-full md:h-[45px]"
                          src={not}
                          alt=""
                        />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content p-2 shadow bg-base-100 rounded-box w-64 mt-4 max-h-[400px] overflow-y-auto"
                      >
                        {notification
                          ?.slice()
                          .reverse()
                          .map((n, i) => (
                            <li
                              key={i}
                              className="m-2 p-3 border-2 border-primary rounded-md text-xl"
                            >
                              <p>{n.p}</p>
                              <label
                                htmlFor="update-note-modal"
                                onClick={() => setNote(n)}
                                className="btn btn-outline btn-secondary mr-3"
                              >
                                Update
                              </label>
                              <button
                                onClick={() => deleteNot(n._id)}
                                className="btn btn-error"
                              >
                                Delete
                              </button>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
              <div className="dropdown dropdown-end md:ml-5">
                <label
                  tabIndex={0}
                  onClick={() => setCloseDropDown(true)}
                  className="btn btn-ghost rounded-full p-0"
                >
                  <img
                    className="w-11 h-11 rounded-full bg-white"
                    src={userInfo?.img ? userInfo?.img : pro}
                    alt=""
                  />
                </label>
                {closeDropDown && (
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                  >
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-xl text-white bg-primary" : ""
                        }
                        onClick={() => setCloseDropDown(false)}
                        to={"/dashboard/user/profile"}
                      >
                        <h2>Profile</h2>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-xl text-white bg-primary" : ""
                        }
                        onClick={() => setCloseDropDown(false)}
                        to={"/dashboard/user/change-password"}
                      >
                        <h2>Change Password</h2>
                      </NavLink>
                    </li>
                    <li>
                      <h2
                        onClick={() => {
                          signOut(auth);
                          localStorage.removeItem("accessToken");
                          refetch();
                        }}
                        className="text-red-600 hover:text-white hover:bg-red-600"
                      >
                        Sign Out
                      </h2>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {note && <UpdateNoteModal note={note} setLoading={setLoading} />}
    </div>
  );
};

export default DashboardNavbar;

/*
 // admin balance
  let totalPaidAmount;
  if (userInfo.role === "admin") {
    const allOrders = adminAllOrder;
    const paidBalance = allOrders?.filter((p) => {
      return p.payment !== "Due" && p.payment !== "Old Payment";
    });
    const paidAmount = paidBalance?.map((p) => {
      return parseInt(p.amount) || parseInt(p.like) || parseInt(p.dollarAmount);
    });
    totalPaidAmount = paidAmount?.reduce((a, b) => a + b, 0);
  }
*/

/*
<div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn m-1">Click</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

<NavLink
  to="/control-panel"
  className={({ isActive }) =>
    isActive
      ? "btn btn-primary text-white p-0 md:ml-5"
      : "btn btn-ghost hover:btn-primary text-white p-0 md:ml-5"
  }
>
  <img
    className="w-7 md:w-full md:h-[45px]"
    src={spt}
    alt=""
  />
</NavLink>

*/
