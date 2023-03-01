import "./App.css";

import { useState, useEffect } from "react";
import { GiBattleAxe, GiDreadSkull } from "react-icons/gi";

function App() {
  const [titulo, setTitulo] = useState("");
  const [tempo, setTempo] = useState("");
  const [tarefa, setTarefa] = useState([]);
  const [load, setLoad] = useState(false);

  return (
    <div className="App">
      <header className="form__header">
        <h1 className="titulo">Missões</h1>
      </header>

      <div className="form__tarefa">
        <h2 className="subtitulo">O que você vai enfrentar hoje?</h2>
      </div>

      <div className="lista__tarefas">
        <h2 className="subtitulo">Missões já postadas</h2>
        {tarefa.length == 0 && (
          <p className="texto">Sem missão hoje, chefe...</p>
        )}
      </div>
    </div>
  );
}

export default App;
