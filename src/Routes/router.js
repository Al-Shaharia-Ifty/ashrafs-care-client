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
    ],
  },
]);
