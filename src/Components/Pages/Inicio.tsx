import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import './styled/Card.css'

export const Inicio = () => {
  const navigate = useNavigate();

  const handleInit = () => {
    navigate("/estudiantes");
  };

  return (
    <>
      <div className="min-h-screen overflow-y-auto py-10">
        <div className="w-[30%] mx-auto">
          <Card
            className="mb-16 fondoCard" // Eliminé la altura fija
          >
            <h1 className="mb-5 text-3xl font-bold text-yellow-300 text-center">Bienvenidos</h1>
            <p className="m-0 text-white text-center">
              Ten una experienza agradable al visitarnos
            </p>
            <div className="text-center py-10">
              <Button onClick={handleInit} label="Ingresar" className="mt-5" />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
