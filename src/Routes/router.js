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
import PageRejected from "../Status/PageRejected";
import AccessNeed from "../Status/AccessNeed";
import FullAccessNeed from "../Status/FullAccessNeed";
import RequireAdmin from "../Layout/RequireAdmin";
import AdminPanel from "../Dashboard/AdminPanel";
import ThisMonth from "../Pages/ThisMonth";
import UserPanel from "../Dashboard/UserPanel";
import AddGraphic from "../AdPost/AddGraphic";
import ViewUserProfile from "../DashboardAdmin/ViewUserProfile";
import TodayOrder from "../Pages/TodayOrder";
import Policy from "../Pages/Policy";
import Refund from "../Pages/Refund";
import Due from "../Pages/Due";
import ContentDesign from "../Dashboard/Facebook/ContentDesign";
import WebDesign from "../Dashboard/WebDeshgn/WebDesign";
import VideoEditing from "../Dashboard/VideoEditingRecording/VideoEditing";
import WhatsApp from "../Dashboard/WhatsAppMarketing/WhatsApp";
import SMSMarketing from "../Dashboard/SMSMarketing/SMSMarketing";
import AddContent from "../AdPost/AddContent";
import AddWeb from "../AdPost/AddWeb";
import AddWhatsApp from "../AdPost/AddWhatsApp";
import AddVideoEditing from "../AdPost/AddVideoEditing";
import AddSMS from "../AdPost/AddSMS";

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
      { path: "/privacy_policy", element: <Policy /> },
      { path: "/refund_policy", element: <Refund /> },
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
      { path: "/dashboard/all-page-restricted", element: <PageRejected /> },
      { path: "/dashboard/all-access-need", element: <AccessNeed /> },
      { path: "/dashboard/all-full-access-need", element: <FullAccessNeed /> },

      // order summery
      { path: "/dashboard/summery", element: <Summery /> },

      // payment
      { path: "/dashboard/payment", element: <Payment /> },

      // due
      { path: "/dashboard/due-payment", element: <Due /> },

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
      {
        path: "/dashboard/promote/content-design",
        element: <ContentDesign />,
      },

      // /dashboard/graphics-design
      { path: "/dashboard/graphics-design", element: <GraphicsDesign /> },

      // /dashboard/web-design
      { path: "/dashboard/web-design", element: <WebDesign /> },

      // /dashboard/video-editing
      { path: "/dashboard/video-editing", element: <VideoEditing /> },

      // /dashboard/whatsapp-marketing
      { path: "/dashboard/whatsapp-marketing", element: <WhatsApp /> },

      // /dashboard/sms-marketing
      { path: "/dashboard/sms-marketing", element: <SMSMarketing /> },

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

      // changed password
      {
        path: "user/change-password",
        element: <ChangePassword />,
      },

      // admin panel
      {
        path: "admin-panel",
        element: (
          <RequireAdmin>
            <AdminPanel />
          </RequireAdmin>
        ),
      },

      // user panel
      {
        path: "user-panel",
        element: (
          <RequireAdmin>
            <UserPanel />
          </RequireAdmin>
        ),
      },

      // monthly all order
      {
        path: "admin/this-month",
        element: (
          <RequireAdmin>
            <ThisMonth />
          </RequireAdmin>
        ),
      },

      // daily all order
      {
        path: "admin/today",
        element: (
          <RequireAdmin>
            <TodayOrder />
          </RequireAdmin>
        ),
      },

      // admin add
      // graphic post
      {
        path: "admin/add-graphic",
        element: (
          <RequireAdmin>
            <AddGraphic />
          </RequireAdmin>
        ),
      },

      // facebook content
      {
        path: "admin/add-content",
        element: (
          <RequireAdmin>
            <AddContent />
          </RequireAdmin>
        ),
      },

      // Web Design
      {
        path: "admin/add-webDesign",
        element: (
          <RequireAdmin>
            <AddWeb />
          </RequireAdmin>
        ),
      },

      // whatsApp Marketing
      {
        path: "admin/add-whatsApp",
        element: (
          <RequireAdmin>
            <AddWhatsApp />
          </RequireAdmin>
        ),
      },

      // video Edit
      {
        path: "admin/add-videoEdit",
        element: (
          <RequireAdmin>
            <AddVideoEditing />
          </RequireAdmin>
        ),
      },

      // SMS Marketing
      {
        path: "admin/add-smsMarketing",
        element: (
          <RequireAdmin>
            <AddSMS />
          </RequireAdmin>
        ),
      },

      // admin view user profile
      {
        path: "admin/view-user-profile/:email",
        element: (
          <RequireAdmin>
            <ViewUserProfile />
          </RequireAdmin>
        ),
      },
    ],
  },
]);
