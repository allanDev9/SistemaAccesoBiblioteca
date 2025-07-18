import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Administrador } from "../features/admin/pages/Administrador";
import { Estudiantes } from "../features/estudiantes/pages/Estudiantes";
import { Inicio } from "../features/shared/Inicio";
import { Login } from "../features/auth/components/Login";
import { NavBar } from "../features/shared/sidebar/Navbar";
import { TipoUsuario } from "../features/roles/pages/TipoUsuario";
import { PrivateRoute } from "../features/auth/pages/PrivateRoute";
import { Visitante } from "../features/visitantes/pages/Visitante";
import { Registrarse } from "../features/estudiantes/pages/Registrarse";
export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route element={<NavBar />}>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/Inicio" element={<Inicio />} />
                    <Route path="/Estudiante" element={<Estudiantes />} />
                    <Route path="/Registrarse" element={<Registrarse />} />
                    <Route path="/Tipousuario" element={<TipoUsuario />} />
                    <Route path="/Visitante" element={<Visitante />} />
                    <Route path="/Administrador/*" element={
                        <PrivateRoute>
                            <Administrador />
                        </PrivateRoute>

                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}