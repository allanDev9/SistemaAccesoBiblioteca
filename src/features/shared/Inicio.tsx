import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

export const Inicio = () => {
  const navigate = useNavigate();

  const handleInit = () => {
    navigate("/TipoUsuario");
  };

  return (
    <>
      <div className="min-h-screen overflow-y-auto py-10">
        <div className="w-[30%] mx-auto">
          <div
            className="mb-16 p-8 max-w-sm shadow-lg rounded-xl bg-white/80" // Eliminé la altura fija
          >
            <h1 className="mb-5 text-3xl font-bold text-black text-center">Bienvenidos</h1>
            <p className="m-0 text-black text-center">
              Ten una experienza agradable al visitarnos
            </p>
            <div className="text-center py-10">
              <Button onClick={handleInit} label="Ingresar" className="mt-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
