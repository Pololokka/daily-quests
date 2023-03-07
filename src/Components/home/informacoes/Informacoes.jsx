import "./Informacoes.css";
import { useState, useEffect } from "react";

const Informacoes = () => {
  const [nome, setNome] = useState("Inizad");
  const [classe, setClasse] = useState("Cidadão");
  const [titulo, setTitulo] = useState("Pagador/a de Taxas");

  const puxaItens = () => {
    const itensCarregados = JSON.parse(localStorage.getItem("arrayEquipados"));

    if (Array.isArray(itensCarregados)) {
      const pegaClasse = itensCarregados?.find(
        (elemento) => elemento.tipo === "classe"
      );

      const pegaTitulo = itensCarregados?.find(
        (elemento) => elemento.tipo === "titulo"
      );

      setClasse(pegaClasse.nome);
      setTitulo(pegaTitulo.nome);
    }
  };

  useEffect(() => {
    const nomeSalvo = JSON.parse(localStorage.getItem("nomeJogador"));
    setNome(nomeSalvo);
    puxaItens();
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
          {nome}, {classe}, {titulo}
        </p>
      </div>
    </div>
  );
};

export default Informacoes;
