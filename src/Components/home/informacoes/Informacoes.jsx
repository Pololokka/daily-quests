import "./Informacoes.css";
import { useState, useEffect } from "react";

const Informacoes = () => {
  const [nome, setNome] = useState("");
  let userInfo = {
    classe: "Cidadão",
    titulo: "Pagador/a de taxas",
  };
  // pega info do local storage pra colocar na tela
  //   const puxaItens = () => {
  //   };

  useEffect(() => {
    const nomeSalvo = JSON.parse(localStorage.getItem("nomeJogador"));
    setNome(nomeSalvo);
  }, []);

  const salvaItens = (valor) => {
    const nomePc = JSON.stringify(valor);
    localStorage.setItem("nomeJogador", nomePc);
  };

  const handleNome = (valor) => {
    setNome(valor);
    salvaItens(valor);
  };

  return (
    <div className="info__container">
      <form className="info__form">
        <label htmlFor="pc-nome" className="texto">
          Nome:
        </label>
        <input
          type="text"
          name="pc-nome"
          className="texto input__info"
          onChange={(evento) => handleNome(evento.target.value)}
          value={nome || ""}
        />
      </form>

      <div className="tarefas__container">
        <h2 className="subtitulo">Ficha</h2>
        <p className="texto">
          {nome}, {userInfo.classe}, {userInfo.titulo}
        </p>
      </div>
    </div>
  );
};

export default Informacoes;
