import "./App.css";

import Formulario from "./Components/formulario/Formulario";
import Tarefas from "./Components/tarefas/Tarefas";

function App() {
  return (
    <div className="App">
      <header className="form__header">
        <h1 className="titulo">Missões</h1>
      </header>

      <Formulario />
      <Tarefas />
    </div>
  );
}

export default App;
