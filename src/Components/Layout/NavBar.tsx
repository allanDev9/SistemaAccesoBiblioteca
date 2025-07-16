import { useLocation, useNavigate } from "react-router-dom";
import { Contenedor } from "./Contenedor";
import logoUnah from "../../assets/logoUnah.png";
import fondo from "../../assets/fondo.jpg";
import { useEffect, useState } from "react";
import { Desplegable } from "./Desplegable";

export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [key, setKey] = useState(location.pathname);

  useEffect(() => {
    setKey(location.pathname);
  }, [location]);

  useEffect(() => {
    if (localStorage.getItem("admin") === "true" && location.pathname !== "/inicio" && location.pathname !== "/estudiantes") {
      localStorage.removeItem("admin");
    }
  }, [location]);


  return (
    <div className="min-h-screen bg-cover bg-center text-white max-md:w-[100%]"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <nav className="flex justify-between items-center px-10 py-2">
        <div className="flex items-center space-x-4">
          <Desplegable />
          <img className="w-20 object-cover" src={logoUnah} alt="" />
          <h1 className="text-3xl font-extrabold text-yellow-300">Sistema Acceso Biblioteca</h1>
        </div>

      </nav>
      <Contenedor key={key} />
    </div >
  );
};
