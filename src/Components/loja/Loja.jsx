import Mercador from "./compraveis/Compraveis";
import Folder from "../folder/Folder";

const Loja = () => {
  return (
    <section>
      <h1 className="titulo cont__header">Mercador</h1>
      <Folder label={"Classe"}>
        <Mercador equip={"classe"} />
      </Folder>
      <Folder label={"Título"}>
        <Mercador equip={"titulo"} />
      </Folder>
      <Folder label={"Arma(ícone de concluir tarefa)"}>
        <Mercador equip={"arma"} />
      </Folder>
    </section>
  );
};

export default Loja;
