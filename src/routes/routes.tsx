import App from "@/App";
import AdminDashboard from "@/components/layout/AdminDashboard";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import AboutUs from "@/pages/AboutUs";
import AllBookings from "@/pages/AllBookings";
import AllReviews from "@/pages/AllReviews";
import AllSlot from "@/pages/AllSlot";
import Bookings from "@/pages/Bookings";
import { CreateService } from "@/pages/CreateService";
import { CreateSlot } from "@/pages/CreateSlot";
import { AllUser } from "@/pages/Dashboard/AllUser";
import DashboardHome from "@/pages/Dashboard/DashboardHome";
import { MyBookingsDashboard } from "@/pages/Dashboard/MyBookings";

import ServiceManagement from "@/pages/Dashboard/ServiceManagement";
import SlotManagement from "@/pages/Dashboard/SlotManagement";
import UpcomingBookings from "@/pages/Dashboard/UpcomingBookings";
import { UserBookings } from "@/pages/Dashboard/UserBookings";

import ErrorPage from "@/pages/ErrorPage";
import GetAllServices from "@/pages/GetAllServices";

import Home from "@/pages/Home";
import MyBookings from "@/pages/MyBookings";
import SignUp from "@/pages/SignUp";
import SingIn from "@/pages/SingIn";
import SingleServices from "@/pages/SingleServices";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // dashboard
      {
        path: "dashboard",
        element: (
          <ProtectedRoute allowedRoles={["admin", "user"]}>
            <AdminDashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "",
            element: <DashboardHome />,
          },
          {
            path: "service-management",
            element: <ServiceManagement />,
          },
          {
            path: "slot-management",
            element: <SlotManagement />,
          },
          {
            path: "user-bookings",
            element: <UserBookings />,
          },
          {
            path: "all-users",
            element: <AllUser />,
          },
          {
            path: "my-bookings",
            element: <MyBookingsDashboard />,
          },
          {
            path: "upcoming-bookings",
            element: <UpcomingBookings />,
          },
        ],
      },

      //
      {
        path: "/create-service",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            {" "}
            <CreateService />
          </ProtectedRoute>
        ),
      },
      {
        path: "/create-slot",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <CreateSlot />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/available-slot",
        element: (
          <ProtectedRoute allowedRoles={["admin", "user"]}>
            <AllSlot />
          </ProtectedRoute>
        ),
      },
      {
        path: "/all-services",
        element: <GetAllServices />,
      },
      {
        path: "/service-details/:id",
        element: (
          <ProtectedRoute allowedRoles={["user", "admin"]}>
            <SingleServices />
          </ProtectedRoute>
        ),
      },
      {
        path: "/bookings/:id/:slotId",
        element: (
          <ProtectedRoute allowedRoles={["user"]}>
            <Bookings />
          </ProtectedRoute>
        ),
      },
      {
        path: "/all-bookings",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <AllBookings />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-bookings",
        element: (
          <ProtectedRoute allowedRoles={["user"]}>
            <MyBookings />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/all-reviews",
        element: (
          <ProtectedRoute allowedRoles={["user"]}>
            <AllReviews />
          </ProtectedRoute>
        ),
      },

      {
        path: "/signin",
        element: <SingIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
