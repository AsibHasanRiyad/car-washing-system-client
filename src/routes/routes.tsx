import App from "@/App";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import AboutUs from "@/pages/AboutUs";
import { CreateService } from "@/pages/CreateService";
import GetAllServices from "@/pages/GetAllServices";

import Home from "@/pages/Home";
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
        path: "/all-services",
        element: <GetAllServices />,
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
