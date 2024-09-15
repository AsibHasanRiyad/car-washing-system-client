/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  logout,
  useCurrentToken,
  useCurrentUser,
} from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { jwtDecode } from "jwt-decode";

import { ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const token = useAppSelector(useCurrentToken);
  const role = useAppSelector(useCurrentUser)?.role;
  const dispatch = useAppDispatch();

  const isTokenValid = (token: string | null) => {
    if (!token) return false;
    try {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp > currentTime;
    } catch (error) {
      return false;
    }
  };
  console.log(isTokenValid(token), "token");
  useEffect(() => {
    if (!token || !isTokenValid(token)) {
      dispatch(logout());
      window.location.href = "/signin";
    }
  }, [token, dispatch]);
  if (!token) {
    return <Navigate to={"/signin"} replace={true} />;
  }
  if (allowedRoles && !allowedRoles.includes(role as string)) {
    return <Navigate to={"/error"} replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
