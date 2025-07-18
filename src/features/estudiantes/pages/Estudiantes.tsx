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
  const [cuenta, setCuenta] = useState('');
  const [contrasena, setContrasena] = useState('');


  const handleBack = () => {
    navigate("/TipoUsuario");
  }

  const handleSubmit = () => {
    setFormSubmitted(true);

    if (cuenta && contrasena) {
      // Enviar formulario o hacer lo que necesites
      console.log("Formulario válido");
    } else {
      console.log("Hay campos vacíos");
    }
  };

  return (
    <div className="bg-black/50">
      <span onClick={handleBack} className="absolute top-35 left-5 cursor-pointer text-white p-4 rounded-full shadow-md bg-icon text-center duration-300 ease-in-out">
        <ArrowBackIosIcon />
      </span>
      <div className='flex flex-col justify-center items-center p-5'>
        <h1 className="text-gray-300 text-3xl text-center font-extrabold">Datos del Estudiante</h1>
        <div className='flex flex-col justify-start py-10'>
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

          <div className="flex flex-wrap align-items-center gap-2 mb-3">
            <label htmlFor="correo" className="p-hidden-accessible">Contraseña</label>
            <InputText
              id="contrasena"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              className={`mr-2 ${formSubmitted && !contrasena ? 'p-invalid' : ''}`}
            />
            {formSubmitted && !contrasena && (
              <Message severity="error" text="El correo es requerido" />
            )}
          </div>
          <span onClick={() => navigate("/Registrarse")} className='text-xl text-blue-600 text-center cursor-pointer hover:text-blue-700 duration-100 ease-in-out'>
            Registrarse
          </span>
          <div className='flex justify-center py-5'>
            <Button label="Enviar" className="mt-5 w-50" onClick={handleSubmit}></Button>
          </div>
        </div>
      </div>
    </div >
  )
}
