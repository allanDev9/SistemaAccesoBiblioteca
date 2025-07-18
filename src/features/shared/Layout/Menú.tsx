import { useState } from "react";
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation, useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export const Menú = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const handleLogin = () => {
        navigate("/Login");
    }

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }} >
                <ul className="flex flex-col space-x-8 space-y-3 text-xl font-bold text-gray-300 p-[10px]">
                    <li>
                        <Link
                            to="/Inicio"
                            className={`px-[10px] py-[10px] rounded-full transition-colors duration-300 ease-in-out inline-block hover:bg-black/50 hover:cursor-pointer hover:ml-[10px] ${location.pathname === "/Inicio" ? "bg-black/50 text-gray-400" : ""
                                }`}
                        >
                            <span className="px-2">
                                <HomeIcon />
                            </span>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/Estudiante"
                            className={`px-[10px] py-[10px] rounded-full transition-colors duration-300 ease-in-out inline-block hover:bg-black/50 hover:cursor-pointer hover:ml-[10px] ${location.pathname === "/Estudiante" ? "bg-black/50 rounded-[80px] text-gray-400" : ""
                                }`}
                        >
                            <span className="px-2">
                                <PersonIcon />
                            </span>
                            Estudiantes
                        </Link>
                    </li>
                    <li onClick={handleLogin}>
                        <Link
                            to="/Administrador"
                            className={`px-[10px] py-[10px] rounded-full transition-colors duration-300 ease-in-out inline-block hover:bg-black/50 hover:cursor-pointer hover:ml-[10px] ${location.pathname === "/Administrador" ? "bg-black/50 rounded-[80px] text-gray-400" : ""
                                }`}
                        >
                            <span className="px-2">
                                <AdminPanelSettingsIcon />
                            </span>
                            Administrador
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contacto"
                            className={`px-[10px] py-[10px] rounded-full transition-colors duration-300 ease-in-out inline-block hover:bg-black/50 hover:cursor-pointer hover:ml-[10px] ${location.pathname === "/contacto" ? "bg-black/50 rounded-[80px] text-gray-400" : ""
                                }`}
                        >
                            <span className="px-2">
                                <ContactPhoneIcon />
                            </span>
                            Contacto
                        </Link>
                    </li>
                </ul>
            </Sidebar>
            <Button onClick={() => setVisible(true)} severity="secondary">
                <MenuIcon />
            </Button>
        </div>
    )
}