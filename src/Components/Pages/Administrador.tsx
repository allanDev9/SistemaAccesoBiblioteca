import { Route, Routes } from "react-router-dom"
import { NavbarAdmin } from "../Layout/NavbarAdmin"
import { Dashboard } from "./pages-admin/Dashboard"
import { Usuarios } from "./pages-admin/Usuarios"
export const Administrador = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<NavbarAdmin />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="users" element={<Usuarios />} />
                </Route>
            </Routes>
        </>
    )
}