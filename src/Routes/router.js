import { createBrowserRouter } from "react-router-dom";
import BasicAudience from "../Dashboard/BasicAudience";
import DashBoard from "../Dashboard/DashBoard";
import FacebookMarketing from "../Dashboard/FacebookMarketing";
import PageSetup from "../Dashboard/PageSetup";
import TargetAudience from "../Dashboard/TargetAudience";
import ControlPanelLayout from "../Layout/ControlPanelLayout";
import Main from "../Layout/Main";
import RequireAuth from "../Layout/RequireAuth";
import About from "../Pages/About";
import AllUpdate from "../Pages/AllUpdate";
import BlogPage from "../Pages/BlogPage";
import Contact from "../Pages/Contact";
import DashboardLayout from "../Pages/DashboardLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
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
    ],
  },
]);
