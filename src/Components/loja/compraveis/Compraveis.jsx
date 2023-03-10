import "./Compraveis.css";
import { mercador } from "../../../data/mercador";
import { armasProMap } from "../../../data/armasMap";
import { inimigosProMap } from "../../../data/InimigoMap";
import { useState, useEffect } from "react";
import { GiCoinflip, GiBackpack } from "react-icons/gi";
import { salvaMercador } from "../../../data/mercador";

const Mercador = ({ equip }) => {
  const [comprado, setComprado] = useState(false);
  const itemExibir = mercador[equip];
  const itensEquipados =
    JSON.parse(localStorage.getItem("arrayEquipados")) || [];

  let dinheiroSalvo = JSON.parse(localStorage.getItem("dinheiroRecebido")) || 0;

  useEffect(() => {}, [comprado]);

  const salvaEquipamento = () => {
    const arrayItensSalvos = JSON.stringify(itensEquipados);
    localStorage.setItem("arrayEquipados", arrayItensSalvos);
  };

  const filtraEquipamento = () => {
    const index = itensEquipados.findIndex(
      (elemento) => elemento.tipo === equip
    );
    if (index > -1) {
      itensEquipados.splice(index, 1);
    }
  };

  const handleCompra = (evento) => {
    if (evento.preco <= dinheiroSalvo) {
      evento.comprado = true;
      salvaMercador();
      setComprado(!comprado);
      dinheiroSalvo -= evento.preco;
      const variavelDinheiroSalvo = JSON.stringify(dinheiroSalvo);
      localStorage.setItem("dinheiroRecebido", variavelDinheiroSalvo);
    }
  };

  const handleEquipa = (evento) => {
    const novoEquip = {
      id: evento.id,
      nome: evento.nome,
      tipo: equip,
    };

    filtraEquipamento();
    itensEquipados.unshift(novoEquip);

    console.log(itensEquipados);
    salvaEquipamento();
  };

  return (
    <div className="compravel__container">
      {itemExibir.map((elemento) => {
        return (
          <div className="compravel__card" key={elemento.id}>
            {equip === "arma" ? (
              <h3 className="subtitulo">{armasProMap[elemento.nome]}</h3>
            ) : equip === "inimigo" ? (
              <h3 className="subtitulo">{inimigosProMap[elemento.nome]}</h3>
            ) : (
              <h3 className="subtitulo">{elemento.nome}</h3>
            )}
            <p className="texto">Tipo: {equip}</p>
            <p className="texto">pre??o: {elemento.preco}</p>
            {elemento.comprado === false ? (
              <div onClick={() => handleCompra(elemento)} className="btn__loja">
                <p className="texto">Comprar</p>
                <span className="icon__style">
                  <GiCoinflip />
                </span>
              </div>
            ) : (
              <div onClick={() => handleEquipa(elemento)} className="btn__loja">
                <p className="texto">Equipar</p>
                <span className="icon__style">
                  <GiBackpack />
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Mercador;
