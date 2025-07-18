import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const TipoUsuario = () => {
    const navigate = useNavigate();

    const handleInit = (tipo: string) => {
        navigate(`/${tipo}`);
    }

    const handleBack = () => {
        navigate("/");
    }

    const getIcon = (tipo: string) => {
        switch (tipo) {
            case "Estudiante":
                return <PersonIcon sx={{ fontSize: 70 }} />;
            case "Visitante":
                return <PersonPinIcon sx={{ fontSize: 70 }} />;
            case "Administrador":
                return <AdminPanelSettingsIcon sx={{ fontSize: 70 }} />;
            default:
                return "👤";

        }
    }

    return (
        <div className="min-h-screen flex justify-center items-center mt-[-100px]">
            <span onClick={handleBack} className="absolute top-35 left-5 cursor-pointer text-white p-4 rounded-full shadow-md bg-icon text-center duration-300 ease-in-out">
                <ArrowBackIosIcon />
            </span>
            <div className="flex flex-wrap justify-center gap-10 ">
                {["Estudiante", "Visitante", "Administrador"].map((tipo, index) => (
                    <Card
                        key={index}
                        className="p-8 max-w-sm shadow-lg rounded-lg"
                        sx={{
                            p: 4,
                            maxWidth: 400,
                            borderRadius: 4,
                            boxShadow: 3,
                            backgroundColor: '#ffffffcc'
                        }}
                    >
                        <span className="mt-5 flex justify-center">{getIcon(tipo)}</span>
                        <h1 className="mb-3 relative top-10 text-2xl font-bold text-black text-center">{tipo}</h1>
                        <div className="text-center py-15 px-15">
                            <Button onClick={() => handleInit(tipo)} variant="contained" color="primary">
                                Ingresar
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
