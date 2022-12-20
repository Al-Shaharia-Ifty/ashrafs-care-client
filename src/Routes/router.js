import FacebookMarketing from "../Dashboard/FacebookMarketing";
import ControlPanelLayout from "../Layout/ControlPanelLayout";
import TargetAudience from "../Dashboard/TargetAudience";
import { createBrowserRouter } from "react-router-dom";
import BasicAudience from "../Dashboard/BasicAudience";
import DashboardLayout from "../Pages/DashboardLayout";
import RequireAuth from "../Layout/RequireAuth";
import DashBoard from "../Dashboard/DashBoard";
import PageSetup from "../Dashboard/PageSetup";
import AllOrder from "../AllOrder/AllOrder";
import AllBoost from "../AllOrder/AllBoost";
import AllUpdate from "../Pages/AllUpdate";
import BlogPage from "../Pages/BlogPage";
import Register from "../Pages/Register";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AllSetup from "../AllOrder/AllSetup";
import AllPromote from "../AllOrder/AllPromote";
import AllRecover from "../AllOrder/AllRecover";
import OrderDetails from "../Dashboard/OrderDetails";
import DashboardMobileNavbar from "../Shared/DashboardMobileNavbar";
import UserProfile from "../Dashboard/UserProfile";
import AllStatus from "../Status/AllStatus";
import Pending from "../Status/Pending";
import InReview from "../Status/InReview";
import ActiveAds from "../Status/ActiveAds";
import PausedAds from "../Status/PausedAds";
import BoostRejected from "../Status/BoostRejected";
import NotDelivering from "../Status/NotDelivering";
import Complete from "../Status/Complete";
import Summery from "../Dashboard/Summery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/all-update",
        element: <AllUpdate />,
      },
      {
        path: "/blog/:id",
        element: <BlogPage />,
      },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/control-panel",
    element: (
      <RequireAuth>
        <ControlPanelLayout />
      </RequireAuth>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <RequireAuth>
        <DashboardLayout />
      </RequireAuth>
    ),
    children: [
      { path: "/dashboard", element: <DashBoard /> },
      { path: "/dashboard/mobile", element: <DashboardMobileNavbar /> },

      //all Status
      { path: "/dashboard/all-status", element: <AllStatus /> },
      { path: "/dashboard/all-pending", element: <Pending /> },
      { path: "/dashboard/all-in-review", element: <InReview /> },
      { path: "/dashboard/all-active-ads", element: <ActiveAds /> },
      { path: "/dashboard/all-paused-ads", element: <PausedAds /> },
      { path: "/dashboard/all-boost-rejected", element: <BoostRejected /> },
      { path: "/dashboard/all-not-delivering", element: <NotDelivering /> },
      { path: "/dashboard/all-complete", element: <Complete /> },

      // order summery
      { path: "/dashboard/summery", element: <Summery /> },

      // Facebook
      {
        path: "/dashboard/faceBook-instagram/marketing",
        element: <FacebookMarketing />,
      },
      {
        path: "/dashboard/facebook-setup",
        element: <PageSetup />,
      },
      {
        path: "/dashboard/promote/basic-audience",
        element: <BasicAudience />,
      },
      {
        path: "/dashboard/promote/target-audience",
        element: <TargetAudience />,
      },

      // all Order
      { path: "/dashboard/all-order", element: <AllOrder /> },
      { path: "/dashboard/all-boost", element: <AllBoost /> },
      { path: "/dashboard/all-setup", element: <AllSetup /> },
      { path: "/dashboard/all-promote", element: <AllPromote /> },
      { path: "/dashboard/all-recover", element: <AllRecover /> },

      // Order details
      {
        path: "/dashboard/order-details/:id",
        element: <OrderDetails />,
      },

      // user profile
      {
        path: "user/profile",
        element: <UserProfile />,
      },
    ],
  },
]);
