import { createBrowserRouter } from "react-router-dom";
import AllPromote from "../AllOrder/AllPromote";
import AllRecover from "../AllOrder/AllRecover";
import AllOrder from "../AllOrder/AllOrder";
import ActiveAds from "../Status/ActiveAds";
import AllStatus from "../Status/AllStatus";
import AllSetup from "../AllOrder/AllSetup";
import AllBoost from "../AllOrder/AllBoost";
import About from "../Pages/About";
import AllUpdate from "../Pages/AllUpdate";
import BlogPage from "../Pages/BlogPage";
import BoostRejected from "../Status/BoostRejected";
import BasicAudience from "../Dashboard/Facebook/BasicAudience";
import Contact from "../Pages/Contact";
import Complete from "../Status/Complete";
import DashboardLayout from "../Pages/DashboardLayout";
import DashboardMobileNavbar from "../Shared/DashboardMobileNavbar";
import DashBoard from "../Dashboard/DashBoard";
import FacebookMarketing from "../Dashboard/Facebook/FacebookMarketing";
import GraphicsDesign from "../Dashboard/GraphicsDesign/GraphicsDesign";
import Home from "../Pages/Home";
import InReview from "../Status/InReview";
import Login from "../Pages/Login";
import Main from "../Layout/Main";
import NotDelivering from "../Status/NotDelivering";
import OrderDetails from "../Dashboard/OrderDetails";
import Pending from "../Status/Pending";
import PausedAds from "../Status/PausedAds";
import PageSetup from "../Dashboard/Facebook/PageSetup";
import RequireAuth from "../Layout/RequireAuth";
import Register from "../Pages/Register";
import Summery from "../Dashboard/Summery";
import TargetAudience from "../Dashboard/Facebook/TargetAudience";
import UserProfile from "../Dashboard/UserProfile";
import Report from "../Dashboard/Report";
import Support from "../Dashboard/Support";
import ChangePassword from "../Dashboard/ChangePassword";
import GraphicOrder from "../AllOrder/GraphicOrder";
import Payment from "../Dashboard/Payment";
import GetSupport from "../Dashboard/GetSupport";
import ErrorPage from "../Shared/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
    path: "/dashboard",
    element: (
      <RequireAuth>
        <DashboardLayout />
      </RequireAuth>
    ),
    errorElement: <ErrorPage />,
    children: [
      // member
      { path: "/dashboard", element: <DashBoard /> },
      { path: "/dashboard/mobile", element: <DashboardMobileNavbar /> },

      //all Status
      { path: "/dashboard/all-status", element: <AllStatus /> },
      { path: "/dashboard/all-pending", element: <Pending /> },
      { path: "/dashboard/all-in-review", element: <InReview /> },
      { path: "/dashboard/all-active", element: <ActiveAds /> },
      { path: "/dashboard/all-paused", element: <PausedAds /> },
      { path: "/dashboard/all-boost-rejected", element: <BoostRejected /> },
      { path: "/dashboard/all-not-delivering", element: <NotDelivering /> },
      { path: "/dashboard/all-complete", element: <Complete /> },

      // order summery
      { path: "/dashboard/summery", element: <Summery /> },

      // payment
      { path: "/dashboard/payment", element: <Payment /> },

      // Report
      { path: "/dashboard/report", element: <Report /> },

      // support
      { path: "/dashboard/support", element: <Support /> },

      // GetSupport
      { path: "/dashboard/get-support", element: <GetSupport /> },

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

      // /dashboard/graphics-design
      { path: "/dashboard/graphics-design", element: <GraphicsDesign /> },

      // all Order
      { path: "/dashboard/all-order", element: <AllOrder /> },
      { path: "/dashboard/all-boost", element: <AllBoost /> },
      { path: "/dashboard/all-setup", element: <AllSetup /> },
      { path: "/dashboard/all-promote", element: <AllPromote /> },
      { path: "/dashboard/all-recover", element: <AllRecover /> },
      { path: "/dashboard/all-graphic-order", element: <GraphicOrder /> },

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
      {
        path: "user/change-password",
        element: <ChangePassword />,
      },
    ],
  },
]);
