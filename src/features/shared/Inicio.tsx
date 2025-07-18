import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { lazy, Suspense, useRef, useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Carousel from 'react-bootstrap/Carousel';

import BibliotecaEntrada from "../../assets/BibliotecaEntrada.jpeg";
import BibliotecaInterior from "../../assets/BibliotecaInterior.jpeg";
import BibliotecaInterior2 from "../../assets/BibliotecaInterior2.jpeg";

const ContadorEstudiantes = lazy(() => import("./chart/ContadorEstudiantes"));
const BarChart = lazy(() => import("./chart/BarChart"));

export const Inicio = () => {
  const navigate = useNavigate();
  const chartRef = useRef(null);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowChart(true);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  const handleInit = () => {
    navigate("/TipoUsuario");
  };

  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* Carrusel en el fondo */}
        <div className="absolute top-0 left-0 w-full h-[100vh] z-1">
          <Carousel fade controls={true} indicators={false} interval={2000} pause={false} wrap={true}>
            <Carousel.Item>
              <img src={BibliotecaEntrada} className="w-full h-[80vh] object-cover" alt="BibliotecaEntrada" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={BibliotecaInterior} className="w-full h-[80vh] object-cover" alt="BibliotecaInterior" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={BibliotecaInterior2} className="w-full h-[80vh] object-cover" alt="BibliotecaInterior2" />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Tarjeta sobrepuesta */}
        <div className="w-[30%] mx-auto relative rounded-xl overflow-hidden shadow-2xl z-10">
          <div className="mt-[50px] p-8 max-w-sm rounded-xl bg-white/80">
            <h1 className="mb-5 text-3xl font-bold text-black text-center">Bienvenidos</h1>
            <p className="m-0 text-black text-center">
              Ten una experienza agradable al visitarnos
            </p>
            <div className="text-center py-10">
              <Button onClick={handleInit} label="Ingresar" className="mt-5" />
            </div>
          </div>
        </div>

        {/* Gráficas */}
        <div className="flex justify-evenly w-[95%] h-[75vh] mx-auto mt-30 mb-10 z-10" ref={chartRef}>
          {showChart && (
            <Suspense
              fallback={
                <div className="text-center text-white mt-50">
                  <Spinner animation="border" variant="light" />
                </div>
              }
            >
              <section className="flex flex-row p-20 space-x-5 span mt-10">
                <div>
                  <BarChart />
                </div>
                <div>
                  <ContadorEstudiantes />
                </div>
              </section>
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};
