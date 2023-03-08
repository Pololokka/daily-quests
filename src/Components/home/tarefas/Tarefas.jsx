import "./Tarefas.css";
import { GiDreadSkull } from "react-icons/gi";
import { armasProMap } from "../../../data/armasMap";
import { useState, useEffect } from "react";

const Tarefas = ({ tarefas, setTarefa }) => {
  const [arma, setArma] = useState("GiBattleAxe");
  let arrayTarefas;

  const salvaTarefa = () => {
    arrayTarefas = JSON.stringify(tarefas);
    localStorage.setItem("arrayAfazeres", arrayTarefas);
  };

  const puxaArma = () => {
    const itensCarregados = JSON.parse(localStorage.getItem("arrayEquipados"));
    let pegaArma;

    if (Array.isArray(itensCarregados)) {
      if (
        (pegaArma = itensCarregados?.find(
          (elemento) => elemento.tipo === "arma"
        ))
      ) {
        setArma(pegaArma.nome);
      }
    }
  };

  useEffect(() => {
    puxaArma();
  }, []);

  const handleDeleta = (tarefa) => {
    const index = tarefas.findIndex((elemento) => elemento.id === tarefa.id);
    console.log(tarefa.feita);
    if (tarefa.feita) {
      const dinheiroSalvo =
        JSON.parse(localStorage.getItem("dinheiroRecebido")) || 0;
      let dinheiroGanho = parseInt(tarefa.dinheiro + dinheiroSalvo);
      const variavelDinheiroGanho = JSON.stringify(dinheiroGanho);
      localStorage.setItem("dinheiroRecebido", variavelDinheiroGanho);
      console.log(dinheiroGanho);
    }

    tarefas.splice(index, 1);

    salvaTarefa();

    setTarefa((prevState) =>
      prevState.filter((tarefas) => tarefas.id !== tarefa.id)
    );
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
            <p
              className={
                elemento.feita ? "texto__tarefa-feita" : "texto__tarefa"
              }
            >
              Dinheiro: {elemento.dinheiro}
            </p>
            <span
              className="icon__style my-anchor-element"
              onClick={() => handleConcluir(elemento)}
              data-tooltip-content="Atacar tarefa!"
            >
              {armasProMap[arma]}
            </span>
            <span
              className="icon__style my-anchor-element"
              onClick={() => handleDeleta(elemento)}
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
    </div>
  );
};

export default Tarefas;
