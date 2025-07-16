// src/routes/PrivateRoute.jsx
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
    children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const isAuthenticated = localStorage.getItem("admin") === "true";
    const location = useLocation();

    const publicRoutes = ["/administrador/dashboard", "/administrador/users"];

    if (publicRoutes.includes(location.pathname)) {
        return children;
    }

    return isAuthenticated ? (
        children
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};
