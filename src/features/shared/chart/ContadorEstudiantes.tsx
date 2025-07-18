import { useEffect, useState } from "react";
import { estudiantes as DataEstudiantes } from "../../services/data/Estudiantes.data";

const ContadorEstudiantes = () => {
  const [TotalEstudiantes, setTotalEstudiantes] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTotalEstudiantes(DataEstudiantes.length);
  }, []);

  useEffect(() => {
    if (TotalEstudiantes === 0) return; // No hacer nada si no hay estudiantes

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < TotalEstudiantes) {
          return prevCount + 1;
        } else {
          clearInterval(interval); // Limpiar el intervalo una vez alcanzado el total
          return prevCount; // Devolver el total
        }
      });
    }, 30); // Ajusta el tiempo aquí para la velocidad de la animación

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [TotalEstudiantes]);

  return (
    <section>
      <div className="flex flex-col w-[300px] h-[47vh] space-y-2 items-center justify-center bg-yellow-400 text-black font-black p-4 rounded-lg shadow-md">
        <span className="text-9xl">{count}</span>
        <p className="font-light text-xl">Total de estudiantes</p>
      </div>
    </section>
  )
}
export default ContadorEstudiantes;