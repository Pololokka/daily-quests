import "./App.css";

import { useState, useEffect } from "react";
import { GiBattleAxe, GiDreadSkull, GiDungeonGate } from "react-icons/gi";

function App() {
  const [titulo, setTitulo] = useState("");
  const [tempo, setTempo] = useState("");
  const [etapaP, setEtapaP] = useState("");
  const [etapaS, setEtapaS] = useState("");
  const [etapaT, setEtapaT] = useState("");
  const [etapaQ, setEtapaQ] = useState("");

  const [tarefa, setTarefa] = useState([]);

  const [load, setLoad] = useState(false);

  // carrega as tarefas já existentes

  useEffect(() => {
    setLoad(true);

    const tarefasCarregadas =
      JSON.parse(localStorage.getItem("arrayAfazeres")) || [];

    setTarefa(tarefasCarregadas);

    setLoad(false);
  }, []);

  // cria nova tarefa e coloca no local storage

  const handleEnvia = (evento) => {
    evento.preventDefault();

    const novaTarefa = {
      id: Math.random(),
      titulo,
      tempo,
      etapaP,
      etapaS,
      etapaT,
      etapaQ,
      feita: false,
    };

    tarefa.push(novaTarefa);

    const arrayTarefas = JSON.stringify(tarefa);
    localStorage.setItem("arrayAfazeres", arrayTarefas);

    console.log(tarefa);

    setTitulo("");
    setTempo("");
    setEtapaP("");
    setEtapaS("");
    setEtapaT("");
    setEtapaQ("");
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
              E é pra quando?
            </label>
            <input
              type="date"
              name="tempo"
              className="texto input__geral"
              onChange={(evento) => setTempo(evento.target.value)}
              value={tempo || ""}
              required
            />
          </div>

          <div className="form__controle">
            <p className="texto">E como que é pra fazer?</p>
            <label htmlFor="etapa" className="texto">
              Etapa 1
            </label>
            <input
              type="text"
              name="etapa"
              className="texto input__geral"
              onChange={(evento) => setEtapaP(evento.target.value)}
              value={etapaP || ""}
            />
          </div>

          <div className="form__controle">
            <label htmlFor="etapa" className="texto">
              Etapa 2
            </label>
            <input
              type="text"
              name="etapa"
              className="texto input__geral"
              onChange={(evento) => setEtapaS(evento.target.value)}
              value={etapaS || ""}
            />
          </div>

          <div className="form__controle">
            <label htmlFor="etapa" className="texto">
              Etapa 3
            </label>
            <input
              type="text"
              name="etapa"
              className="texto input__geral"
              onChange={(evento) => setEtapaT(evento.target.value)}
              value={etapaT || ""}
            />
          </div>

          <div className="form__controle">
            <label htmlFor="etapa" className="texto">
              Etapa 4
            </label>
            <input
              type="text"
              name="etapa"
              className="texto input__geral"
              onChange={(evento) => setEtapaQ(evento.target.value)}
              value={etapaQ || ""}
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
        {tarefa.map((tarefa) => (
          <div className="tarefas__container" key={tarefa.id}>
            <p className="texto">{tarefa.titulo}</p>
            <p className="texto">{tarefa.tempo}</p>
            {tarefa.etapaP !== "" && <p className="texto">{tarefa.etapaP}</p>}
            {tarefa.etapaS !== "" && <p className="texto">{tarefa.etapaS}</p>}
            {tarefa.etapaT !== "" && <p className="texto">{tarefa.etapaT}</p>}
            {tarefa.etapaQ !== "" && <p className="texto">{tarefa.etapaQ}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
