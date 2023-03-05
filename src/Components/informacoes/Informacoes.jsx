import "./Informacoes.css";
import { useState, useEffect } from "react";

const Informacoes = () => {
  const [nome, setNome] = useState("");
  // pega info do local storage pra colocar na tela
  //   const puxaItens = () => {
  //   };

  useEffect(() => {
    const nomeSalvo = JSON.parse(localStorage.getItem("nomeJogador"));
    setNome(nomeSalvo);
  }, []);

  const salvaItens = () => {
    const nomePc = JSON.stringify(nome);
    localStorage.setItem("nomeJogador", nomePc);
  };

  let testeInfo = {
    classe: "Cidadão",
    titulo: "Pagador/a de taxas",
  };

  const handleNome = (evento) => {
    const nomeSalvar = evento.target.value;
    setNome(nomeSalvar);
    salvaItens();
    console.log(nomeSalvar);
  };

  return (
    <div className="info__container">
      <label htmlFor="pc-nome" className="texto">
        Nome:
      </label>
      <input
        type="text"
        name="pc-nome"
        className="texto input__info"
        onInput={(evento) => handleNome(evento)}
        value={nome || ""}
      />
      <p className="texto">
        Personagem: {nome}, {testeInfo.classe}, {testeInfo.titulo}
      </p>
    </div>
  );
};

export default Informacoes;
