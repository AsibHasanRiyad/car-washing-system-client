import { useCurrentToken, useCurrentUser } from "@/redux/features/authSlice";
import { useAppSelector } from "@/redux/hook";

import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const token = useAppSelector(useCurrentToken);
  const role = useAppSelector(useCurrentUser)?.role;

  if (!token) {
    return <Navigate to={"/signin"} replace={true} />;
  }
  if (allowedRoles && !allowedRoles.includes(role as string)) {
    return <Navigate to={"/error"} replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
