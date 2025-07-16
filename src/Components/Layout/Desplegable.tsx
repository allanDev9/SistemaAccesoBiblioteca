import { useState } from "react";
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const Desplegable = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const handleLogin = () => {
        navigate("/Login");
    }

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} className="bg-sidebar" >
                <ul className="flex flex-col space-x-8 space-y-3 text-xl font-bold text-gray-300 p-[10px]">
                    <li>
                        <Link
                            to="/Inicio"
                            className={`hover-bg-soft-yellow ${location.pathname === "/Inicio" ? "bg-soft-yellow text-gray-400" : ""
                                }`}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Estudiantes"
                            className={`hover-bg-soft-yellow ${location.pathname === "/Estudiantes" ? "bg-soft-yellow text-gray-400" : ""
                                }`}
                        >
                            Estudiantes
                        </Link>
                    </li>
                    <li onClick={handleLogin}>
                        <Link
                            to="/Administrador"
                            className={`hover-bg-soft-yellow ${location.pathname === "/Administrador" ? "bg-soft-yellow text-gray-400" : ""
                                }`}
                        >
                            Administrador
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contacto"
                            className={`hover-bg-soft-yellow ${location.pathname === "/contacto" ? "bg-soft-yellow text-gray-400" : ""
                                }`}
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>
            </Sidebar>
            <Button onClick={() => setVisible(true)}>
                <MenuIcon />
            </Button>
        </div>
    )
}