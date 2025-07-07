import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useLocation, useNavigate } from "react-router-dom";
import fondo from "../../assets/UNAHVS6.jpg";

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

    return (
        <div className="min-h-screen flex items-center justify-center " style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover" }}>
            <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-yellow-600 mb-8">
                    Iniciar Sesión
                </h2>

                {/* Usuario */}
                <div className="mb-6">
                    <span className="p-float-label w-full">
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
                    <span className="p-float-label w-full">
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

                {/* Botón */}
                <Button
                    label="Entrar"
                    icon="pi pi-sign-in"
                    className="w-full p-button-rounded p-button-warning"
                    onClick={handleLogin}
                />
            </div>
        </div>
    );
};
