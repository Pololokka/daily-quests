import "./Formulario.css";
import { useState } from "react";

const Formulario = () => {
  const [titulo, setTitulo] = useState("");
  const [tempo, setTempo] = useState("");
  const [etapaP, setEtapaP] = useState("");
  const [etapaS, setEtapaS] = useState("");
  const [etapaT, setEtapaT] = useState("");
  const [etapaQ, setEtapaQ] = useState("");

  const salvaTarefa = () => {
    const arrayTarefas = JSON.stringify(tarefas);
    localStorage.setItem("arrayAfazeres", arrayTarefas);
  };

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

    tarefas.push(novaTarefa);

    salvaTarefa();

    setTitulo("");
    setTempo("");
    setEtapaP("");
    setEtapaS("");
    setEtapaT("");
    setEtapaQ("");
  };

  return (
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
  );
};

export default Formulario;
export var tarefas = JSON.parse(localStorage.getItem("arrayAfazeres")) || [];
