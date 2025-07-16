import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

export const TipoUsuario = () => {
    const navigate = useNavigate();

    const handleInit = (tipo: string) => {
        navigate(`/${tipo}`);
    }

    return (
        <div className="min-h-screen flex justify-center items-center mt-[-100px]">
            <div className="flex flex-wrap justify-center gap-10 ">
                {["Estudiante", "Visitante", "Administrador"].map((tipo, index) => (
                    <Card
                        key={index}
                        className="p-8 max-w-sm shadow-lg rounded-xl"
                        sx={{
                            p: 4,
                            maxWidth: 400,
                            borderRadius: 4,
                            boxShadow: 3,
                            backgroundColor: '#ffffffcc'
                        }}
                    >
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
