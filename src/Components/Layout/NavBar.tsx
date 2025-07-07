import { Link, useLocation, useNavigate } from "react-router-dom";
import { Contenedor } from "./Contenedor";
import logoUnah from "../../assets/logoUnah.png";
import fondo from "../../assets/fondo.jpg";
import { useEffect, useState } from "react";
import "./NavBar.css";

export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [key, setKey] = useState(location.pathname);

  useEffect(() => {
    setKey(location.pathname);
  }, [location]);

  const handleLogin = () => {
    navigate("/Login");
  }

  useEffect(() => {
    if (localStorage.getItem("admin") === "true" && location.pathname !== "/inicio" && location.pathname !== "/estudiantes") {
      localStorage.removeItem("admin");
    }
  }, [location]);


  return (
    <div className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <nav className="flex justify-between items-center px-10 py-2">
        <div className="flex items-center space-x-4">
          <img className="w-20 object-cover" src={logoUnah} alt="" />
          <h1 className="text-3xl font-extrabold text-yellow-300">Sistema Acceso Biblioteca</h1>
        </div>
        <ul className="flex space-x-8 text-xl font-bold text-yellow-300 p-[10px]">
          <li>
            <Link
              to="/inicio"
              className={`hover-bg-soft-yellow ${location.pathname === "/inicio" ? "bg-soft-yellow text-yellow-500" : ""
                }`}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/estudiantes"
              className={`hover-bg-soft-yellow ${location.pathname === "/estudiantes" ? "bg-soft-yellow text-yellow-500" : ""
                }`}
            >
              Estudiantes
            </Link>
          </li>
          <li onClick={handleLogin}>
            <Link
              to="/administrador"
              className={`hover-bg-soft-yellow ${location.pathname === "/administrador" ? "bg-soft-yellow text-yellow-500" : ""
                }`}
            >
              Administrador
            </Link>
          </li>
        </ul>
      </nav>
      <Contenedor key={key} />
    </div >
  );
};
