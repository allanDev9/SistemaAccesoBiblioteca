import { Message } from 'primereact/message';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

export const Estudiantes = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/TipoUsuario");
  }

  return (
    <div className="card bg-black/50">
      <span onClick={handleBack} className="absolute top-35 left-5 cursor-pointer text-white p-4 rounded-full shadow-md bg-icon text-center duration-300 ease-in-out">
        <ArrowBackIosIcon />
      </span>
      <div className='flex flex-col justify-center items-center p-5'>
        <h1 className="text-yellow-300 text-3xl text-center font-extrabold">Datos del Estudiante</h1>
        <div className='flex flex-col justify-start py-10'>
          <div className="flex flex-wrap align-items-center mb-3 gap-2">
            <label htmlFor="text" className="p-hidden-accessible">Nombre</label>
            <InputText id="text" placeholder="Nombre" className="p-invalid mr-2" />
            <Message severity="error" text="El nombre es requerido" />
          </div>
          <div className="flex flex-wrap align-items-center mb-3 gap-2">
            <label htmlFor="text" className="p-hidden-accessible">Apellido</label>
            <InputText id="text" placeholder="Apellido" className="p-invalid mr-2" />
            <Message severity="error" text="El apellido es requerido" />
          </div>
          <div className="flex flex-wrap align-items-center gap-2 mb-3">
            <label htmlFor="email" className="p-hidden-accessible">Número de cuenta</label>
            <InputText id="number" placeholder="Numero de cuenta" className="p-invalid mr-2" />
            <Message severity="error" text="El numero de cuenta es requerido" />
          </div>
          <div className="flex flex-wrap align-items-center gap-2 mb-3">
            <label htmlFor="email" className="p-hidden-accessible">Email</label>
            <InputText id="email" placeholder="Correo" className="p-invalid mr-2" />
            <Message severity="error" text="El correo es requerido" />
          </div>
          <div className="flex flex-wrap align-items-center gap-2 mb-3">
            <label htmlFor="email" className="p-hidden-accessible">Carrera</label>
            <InputText id="textl" placeholder="Carrera" className="p-invalid mr-2" />
            <Message severity="error" text="La carrera es requerida" />
          </div>
          <div className='flex justify-center py-5'>
            <Button label="Enviar" className="mt-5 w-50"></Button>
          </div>
        </div>
      </div>
    </div >
  )
}
