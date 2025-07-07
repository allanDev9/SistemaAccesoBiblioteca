// src/routes/PrivateRoute.jsx
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
    children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const isAuthenticated = localStorage.getItem("admin") === "true";
    const location = useLocation();

    return isAuthenticated ? (
        children
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};
