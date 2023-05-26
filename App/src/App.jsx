import "./App.css";

// Iconos
import CarbonTaskAdd from "./assets/CarbonTaskAdd";

// Componentes
import Inscribir from './Componentes/Botones/Inscribir'

function App() {
  return (
    <>
      <div className="App h-screen">
        
        <Inscribir titulo='Inscribir Jugador' Icono={CarbonTaskAdd}/>
      </div>
    </>
  );
}

export default App;
