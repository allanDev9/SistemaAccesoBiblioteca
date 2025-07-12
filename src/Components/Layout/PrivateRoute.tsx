// src/routes/PrivateRoute.jsx
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
    children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const isAuthenticated = localStorage.getItem("admin") === "true";
    const location = useLocation();

    // Lista de rutas que no necesitan autenticación
    const publicRoutes = ["/administrador/dashboard", "/administrador/users"];

    // Si la ruta actual es pública, permite acceso sin importar autenticación
    if (publicRoutes.includes(location.pathname)) {
        return children;
    }

    return isAuthenticated ? (
        children
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};
