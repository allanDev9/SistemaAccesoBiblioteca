import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../../dashboard/pages/Dashboard"
import { NavbarAdmin } from "../../shared/sidebar/SidebarAdmin"
import { Usuarios } from "../../usuarios/pages/Usuarios"

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<NavbarAdmin />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="users" element={<Usuarios />} />
            </Route>
        </Routes>
    )
}