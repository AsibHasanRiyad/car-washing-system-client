import App from "@/App";
import AdminDashboard from "@/components/layout/AdminDashboard";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import AboutUs from "@/pages/AboutUs";
import AllBookings from "@/pages/AllBookings";
import AllSlot from "@/pages/AllSlot";
import { CreateService } from "@/pages/CreateService";
import { CreateSlot } from "@/pages/CreateSlot";
import { AllUser } from "@/pages/Dashboard/AllUser";

import ServiceManagement from "@/pages/Dashboard/ServiceManagement";
import SlotManagement from "@/pages/Dashboard/SlotManagement";
import { UserBookings } from "@/pages/Dashboard/UserBookings";

import ErrorPage from "@/pages/ErrorPage";
import GetAllServices from "@/pages/GetAllServices";

import Home from "@/pages/Home";
import MyBookings from "@/pages/MyBookings";
import SignUp from "@/pages/SignUp";
import SingIn from "@/pages/SingIn";

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
      {
        path: "dashboard",
        element: (
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "dashboard",
            element: <h1>Dashboard Home</h1>,
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
        ],
      },
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
        element: <AboutUs />,
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
