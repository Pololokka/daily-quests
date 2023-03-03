import "./App.css";

import { useState, useEffect } from "react";
import { GiBattleAxe, GiDreadSkull } from "react-icons/gi";

function App() {
  const [titulo, setTitulo] = useState("");
  const [tempo, setTempo] = useState("");
  const [etapaP, setEtapaP] = useState("");
  const [etapaS, setEtapaS] = useState("");
  const [etapaT, setEtapaT] = useState("");
  const [etapaQ, setEtapaQ] = useState("");

  const [tarefa, setTarefa] = useState([]);

  // carrega as tarefas já existentes

  useEffect(() => {
    const tarefasCarregadas =
      JSON.parse(localStorage.getItem("arrayAfazeres")) || [];

    setTarefa(tarefasCarregadas);
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

    setTitulo("");
    setTempo("");
    setEtapaP("");
    setEtapaS("");
    setEtapaT("");
    setEtapaQ("");
  };

  const handleDeleta = (id) => {
    const index = tarefa.findIndex((elemento) => elemento.id === id);

    tarefa.splice(index, 1);

    console.log(tarefa);

    const arrayTarefas = JSON.stringify(tarefa);
    localStorage.setItem("arrayAfazeres", arrayTarefas);

    setTarefa((prevState) => prevState.filter((tarefa) => tarefa.id !== id));
  };

  const handleConcluir = (tarefa) => {
    tarefa.feita = !tarefa.feita;
    console.log(tarefa);

    const tarefasCarregadas =
      JSON.parse(localStorage.getItem("arrayAfazeres")) || [];

    const arrayTarefas = JSON.stringify(tarefa);
    localStorage.setItem("arrayAfazeres", arrayTarefas);

    setTarefa((prevState) =>
      prevState.map((tarefa) =>
        tarefa.id === tarefasCarregadas.id
          ? (tarefa = tarefasCarregadas)
          : tarefa
      )
    );
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
              placeholder="Pegar minha espada com a dama do lago"
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
            <p className="texto">E como que é pra fazer?(Opcional)</p>
            <label htmlFor="etapa" className="texto">
              Etapa 1
            </label>
            <input
              type="text"
              name="etapa"
              className="texto input__geral"
              onChange={(evento) => setEtapaP(evento.target.value)}
              placeholder="Dar um pulo na casa do Merlin"
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
              placeholder="Ver se tá tudo certo com a Guinevere"
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
              placeholder="Mandar um salve pro Lancelot"
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
              placeholder="Pegar a espada e virar rei"
              value={etapaQ || ""}
            />
          </div>

          <input
            type="submit"
            className="texto btn__geral"
            value="Postar Missão"
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
            <h3
              className={tarefa.feita ? "texto__tarefa-feita" : "texto__tarefa"}
            >
              {tarefa.titulo}
            </h3>
            <span
              className="icon__style"
              onClick={() => handleConcluir(tarefa)}
            >
              <GiBattleAxe />
            </span>
            <span
              className="icon__style"
              onClick={() => handleDeleta(tarefa.id)}
            >
              <GiDreadSkull />
            </span>
            <p
              className={tarefa.feita ? "texto__tarefa-feita" : "texto__tarefa"}
            >
              {tarefa.tempo}
            </p>
            {tarefa.etapaP !== "" && (
              <p
                className={tarefa.feita ? "texto__etapa-feita" : "texto__etapa"}
              >
                {tarefa.etapaP}
              </p>
            )}
            {tarefa.etapaS !== "" && (
              <p
                className={tarefa.feita ? "texto__etapa-feita" : "texto__etapa"}
              >
                {tarefa.etapaS}
              </p>
            )}
            {tarefa.etapaT !== "" && (
              <p
                className={tarefa.feita ? "texto__etapa-feita" : "texto__etapa"}
              >
                {tarefa.etapaT}
              </p>
            )}
            {tarefa.etapaQ !== "" && (
              <p
                className={tarefa.feita ? "texto__etapa-feita" : "texto__etapa"}
              >
                {tarefa.etapaQ}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
