import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useLocation, useNavigate } from "react-router-dom";
import fondo from "../../assets/UNAHVS6.jpg";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./Login.css";

export const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");

    const from = location.state?.from?.pathname || "/inicio";

    const handleLogin = () => {
        if (usuario === "admin" && contrasena === "admin") {
            localStorage.setItem("admin", "true");
            navigate(from, { replace: true });
            navigate("/administrador");
        } else {
            alert("Credenciales incorrectas");
        }
    };

    const handleBack = () => {
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center " style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover" }}>
            <div onClick={handleBack} className="absolute top-5 left-5 cursor-pointer text-white p-4 rounded-full shadow-md bg-icon text-center duration-300 ease-in-out">
                <ArrowBackIosIcon />
            </div>
            <div className="bg-gray-200 p-10 rounded-3xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-b-600 mb-8">
                    Iniciar Sesión
                </h2>

                {/* Usuario */}
                <div className="flex item-center flex-col ml-10">

                    <div className="mb-6">
                        <span className="p-float-label w-69">
                            <InputText
                                id="usuario"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                                className="w-full"
                            />
                            <label htmlFor="usuario">Usuario</label>
                        </span>
                    </div>

                    {/* Contraseña */}
                    <div className="mb-8">
                        <span className="p-float-label w-100">
                            <Password
                                id="contrasena"
                                value={contrasena}
                                onChange={(e) => setContrasena(e.target.value)}
                                toggleMask
                                feedback={false}
                                className="w-full"
                                inputClassName="w-full"
                            />
                            <label htmlFor="contrasena">Contraseña</label>
                        </span>
                    </div>
                </div>

                {/* Botón */}
                <div className="flex justify-center">
                    <button

                        className="w-70 bg-yellow-300 p-3 rounded-xl"
                        onClick={handleLogin}
                    >
                        Iniciar Sesión
                    </button>
                </div>
            </div>
        </div>
    );
};
