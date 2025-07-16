import { useState } from 'react';
import { Message } from 'primereact/message';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

export const Estudiantes = () => {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cuenta, setCuenta] = useState('');
  const [correo, setCorreo] = useState('');
  const [carrera, setCarrera] = useState('');

  const handleBack = () => {
    navigate("/TipoUsuario");
  }

  const handleSubmit = () => {
    setFormSubmitted(true);

    if (nombre && apellido && cuenta && correo && carrera) {
      // Enviar formulario o hacer lo que necesites
      console.log("Formulario válido");
    } else {
      console.log("Hay campos vacíos");
    }
  };

  return (
    <div className="card bg-black/50">
      <span onClick={handleBack} className="absolute top-35 left-5 cursor-pointer text-white p-4 rounded-full shadow-md bg-icon text-center duration-300 ease-in-out">
        <ArrowBackIosIcon />
      </span>
      <div className='flex flex-col justify-center items-center p-5'>
        <h1 className="text-gray-300 text-3xl text-center font-extrabold">Datos del Estudiante</h1>
        <div className='flex flex-col justify-start py-10'>
          {/* Nombre */}
          <div className="flex flex-wrap align-items-center mb-3 gap-2">
            <label htmlFor="nombre" className="p-hidden-accessible">Nombre</label>
            <InputText
              id="nombre"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className={`mr-2 ${formSubmitted && !nombre ? 'p-invalid' : ''}`}
            />
            {formSubmitted && !nombre && (
              <Message severity="error" text="El nombre es requerido" />
            )}
          </div>

          {/* Apellido */}
          <div className="flex flex-wrap align-items-center mb-3 gap-2">
            <label htmlFor="apellido" className="p-hidden-accessible">Apellido</label>
            <InputText
              id="apellido"
              placeholder="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className={`mr-2 ${formSubmitted && !apellido ? 'p-invalid' : ''}`}
            />
            {formSubmitted && !apellido && (
              <Message severity="error" text="El apellido es requerido" />
            )}
          </div>

          {/* Número de cuenta */}
          <div className="flex flex-wrap align-items-center gap-2 mb-3">
            <label htmlFor="cuenta" className="p-hidden-accessible">Número de cuenta</label>
            <InputText
              id="cuenta"
              placeholder="Número de cuenta"
              value={cuenta}
              onChange={(e) => setCuenta(e.target.value)}
              className={`mr-2 ${formSubmitted && !cuenta ? 'p-invalid' : ''}`}
            />
            {formSubmitted && !cuenta && (
              <Message severity="error" text="El número de cuenta es requerido" />
            )}
          </div>

          {/* Correo */}
          <div className="flex flex-wrap align-items-center gap-2 mb-3">
            <label htmlFor="correo" className="p-hidden-accessible">Email</label>
            <InputText
              id="correo"
              placeholder="Correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className={`mr-2 ${formSubmitted && !correo ? 'p-invalid' : ''}`}
            />
            {formSubmitted && !correo && (
              <Message severity="error" text="El correo es requerido" />
            )}
          </div>

          {/* Carrera */}
          <div className="flex flex-wrap align-items-center gap-2 mt-2">
            <FormControl fullWidth error={formSubmitted && !carrera}
              sx={{
                "& label": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiSvgIcon-root": {
                  color: "white", // ícono desplegable
                }
              }}
            >
              <InputLabel id="carrera-label">Carrera</InputLabel>
              <Select
                labelId="carrera-label"
                id="carrera"
                value={carrera}
                label="Carrera"
                onChange={(e) => setCarrera(e.target.value)}
              >
                <MenuItem value=""><em>Seleccionar</em></MenuItem>
                <MenuItem value="Ingeniería">Ingeniería</MenuItem>
                <MenuItem value="Medicina">Medicina</MenuItem>
                <MenuItem value="Informatica Administrativa">Informatica Administrativa</MenuItem>
                <MenuItem value="Administración">Administración</MenuItem>
                <MenuItem value="Derecho">Derecho</MenuItem>
                {/* Agrega más si deseas */}
              </Select>
              {formSubmitted && !carrera && (
                <Message severity="error" text="La carrera es requerida" />
              )}
            </FormControl>
          </div>
          <div className='flex justify-center py-5'>
            <Button label="Enviar" className="mt-5 w-50" onClick={handleSubmit}></Button>
          </div>
        </div>
      </div>
    </div >
  )
}
