import "./App.css";

import Informacoes from "./Components/informacoes/Informacoes";
import Formulario from "./Components/formulario/Formulario";
import Tarefas from "./Components/tarefas/Tarefas";

function App() {
  return (
    <div className="App">
      <header className="form__header">
        <h1 className="titulo">Quadro de Avisos</h1>
      </header>
      <Informacoes />

      <Formulario />
      <Tarefas />
    </div>
  );
}

export default App;
