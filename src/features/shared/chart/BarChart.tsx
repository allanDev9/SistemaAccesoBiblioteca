import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { estudiantes } from "../../services/data/Estudiantes.data";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// Contar estudiantes por carrera
// Contar estudiantes por carrera
const contarEstudiantesPorCarrera = (): { [key: string]: number } => {
    const contador: { [key: string]: number } = {};
    estudiantes.forEach(estudiante => {
        const carrera = estudiante.carrera;

        if (carrera) {
            contador[carrera] = (contador[carrera] || 0) + 1;
        }
    });
    return contador;
};

// Preparar los datos para el gráfico
const datosCarrera = contarEstudiantesPorCarrera();
const labels = Object.keys(datosCarrera);
const data = {
    labels: labels,
    datasets: [{
        label: 'Número de Estudiantes por Carrera',
        data: Object.values(datosCarrera), // Aquí se utilizan los datos contados
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true
        }
    }
};


const BarChart = () => {
    return (
        <div className="bg-black p-4 rounded-lg shadow-md w-[600px] h-[300px]">
            <Bar data={data} options={options} />
        </div>
    );
};
export default BarChart;