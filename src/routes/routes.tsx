import App from "@/App";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import AboutUs from "@/pages/AboutUs";
import AllBookings from "@/pages/AllBookings";
import AllSlot from "@/pages/AllSlot";
import { CreateService } from "@/pages/CreateService";
import { CreateSlot } from "@/pages/CreateSlot";
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
        path: "/create-service",
        element: <CreateService />,
      },
      {
        path: "/create-slot",
        element: <CreateSlot />,
      },
      {
        path: "/available-slot",
        element: <AllSlot />,
      },
      {
        path: "/all-services",
        element: <GetAllServices />,
      },
      {
        path: "/all-bookings",
        element: <AllBookings />,
      },
      {
        path: "/my-bookings",
        element: <MyBookings />,
      },
      {
        path: "/about-us",
        element: (
          <ProtectedRoute>
            <AboutUs />
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
    ],
  },
]);

export default router;
