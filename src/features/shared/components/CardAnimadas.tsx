import { useEffect, useState } from "react";


export const CardAnimadas = () => {
    const imagenes = [
        "../../../assets/UNAHVS6.jpg",
        "./src/assets/UNAHVS6.png",
        "./src/assets/logoUnah.png",
    ];

    const [imagenActual, setImagenActual] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImagenActual((prev) => (prev + 1) % imagenes.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>CardAnimadas</div>
    )
}