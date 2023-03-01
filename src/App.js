import "./App.css";

import { useState, useEffect } from "react";
import { GiBattleAxe, GiDreadSkull } from "react-icons/gi";

function App() {
  const [titulo, setTitulo] = useState("");
  const [tempo, setTempo] = useState("");
  const [tarefa, setTarefa] = useState([]);
  const [load, setLoad] = useState(false);

  const handleEnvia = (evento) => {
    evento.preventDefault();

    const novaTarefa = {
      id: Math.random(),
      titulo,
      tempo,
      feita: false,
    };

    console.log(novaTarefa);

    setTitulo("");
    setTempo("");
  };

  return (
    <div className="App">
      <header className="form__header">
        <h1 className="titulo">Missões</h1>
      </header>

      <div className="form__tarefa">
        <h2 className="subtitulo">O que você vai enfrentar hoje?</h2>
        <form onSubmit={handleEnvia}>
          <div className="form__controle">
            <label htmlFor="titulo" className="texto">
              E ai, qual o problema?
            </label>
            <input
              type="text"
              name="titulo"
              className="texto input__geral"
              onChange={(evento) => setTitulo(evento.target.value)}
              value={titulo || ""}
              required
            />
          </div>

          <div className="form__controle">
            <label htmlFor="tempo" className="texto">
              E em quanto tempo ce faz?
            </label>
            <input
              type="text"
              name="tempo"
              className="texto input__geral"
              onChange={(evento) => setTempo(evento.target.value)}
              value={tempo || ""}
              required
            />
          </div>

          <input
            type="submit"
            value="Postar Missão"
            className="texto btn__geral"
          />
        </form>
      </div>

      <div className="lista__tarefas">
        <h2 className="subtitulo">Missões já postadas</h2>
        {tarefa.length === 0 && (
          <p className="texto">Sem missão hoje, chefe...</p>
        )}
      </div>
    </div>
  );
}

export default App;
