import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/Layout/NavBar";
import { Inicio } from "./Components/Pages/Inicio";
import { Estudiantes } from "./Components/Pages/Estudiantes";
import { Administrador } from "./Components/Pages/Administrador";
import { Login } from "./Components/Layout/Login";
import { TipoUsuario } from './Components/Pages/TipoUsuario';
import { PrivateRoute } from "./Components/Layout/PrivateRoute";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route element={<NavBar />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Estudiante" element={<Estudiantes />} />
          <Route path="/Tipousuario" element={<TipoUsuario />} />
          <Route path="/Administrador/*" element={
            <PrivateRoute>
              <Administrador />
            </PrivateRoute>

          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
