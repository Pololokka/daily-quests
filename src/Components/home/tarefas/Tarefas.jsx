import "./Tarefas.css";
import { GiBattleAxe, GiDreadSkull } from "react-icons/gi";
import { useEffect, useState } from "react";

const Tarefas = () => {
  let arrayTarefas;
  const [tarefas, setTarefa] = useState(
    JSON.parse(localStorage.getItem("arrayAfazeres")) || []
  );

  useEffect(() => {
    const tarefasAtualizadas = JSON.parse(
      localStorage.getItem("arrayAfazeres")
    );
    setTarefa(tarefasAtualizadas);
  });

  const salvaTarefa = () => {
    arrayTarefas = JSON.stringify(tarefas);
    localStorage.setItem("arrayAfazeres", arrayTarefas);
  };

  const handleDeleta = (id) => {
    const index = tarefas.findIndex((elemento) => elemento.id === id);

    tarefas.splice(index, 1);

    salvaTarefa();

    setTarefa((prevState) => prevState.filter((tarefas) => tarefas.id !== id));
  };

  const handleConcluir = (elemento) => {
    elemento.feita = !elemento.feita;

    salvaTarefa();

    setTarefa((prevState) =>
      prevState.map((tarefa) =>
        tarefa.id === arrayTarefas.id ? (tarefa = arrayTarefas) : tarefa
      )
    );
  };

  return (
    <div className="lista__tarefas">
      <h2 className="subtitulo">Missões já postadas</h2>
      {tarefas == null || tarefas.length === 0 ? (
        <p className="texto">Sem missão hoje, chefe...</p>
      ) : (
        tarefas.map((elemento) => (
          <div className="tarefas__container" key={elemento.id}>
            <h3
              className={
                elemento.feita ? "texto__tarefa-feita" : "texto__tarefa"
              }
            >
              {elemento.titulo}
            </h3>
            <span
              className="icon__style my-anchor-element"
              onClick={() => handleConcluir(elemento)}
              data-tooltip-content="Atacar tarefa!"
            >
              <GiBattleAxe />
            </span>
            <span
              className="icon__style my-anchor-element"
              onClick={() => handleDeleta(elemento.id)}
              data-tooltip-content="Despachar o inimigo"
            >
              <GiDreadSkull />
            </span>
            <p
              className={
                elemento.feita ? "texto__tarefa-feita" : "texto__tarefa"
              }
            >
              {elemento.tempo}
            </p>
            {elemento.etapaP !== "" && (
              <p
                className={
                  elemento.feita ? "texto__etapa-feita" : "texto__etapa"
                }
              >
                {elemento.etapaP}
              </p>
            )}
            {elemento.etapaS !== "" && (
              <p
                className={
                  elemento.feita ? "texto__etapa-feita" : "texto__etapa"
                }
              >
                {elemento.etapaS}
              </p>
            )}
            {elemento.etapaT !== "" && (
              <p
                className={
                  elemento.feita ? "texto__etapa-feita" : "texto__etapa"
                }
              >
                {elemento.etapaT}
              </p>
            )}
            {elemento.etapaQ !== "" && (
              <p
                className={
                  elemento.feita ? "texto__etapa-feita" : "texto__etapa"
                }
              >
                {elemento.etapaQ}
              </p>
            )}
          </div>
        ))
      )}
      {}
    </div>
  );
};

export default Tarefas;
