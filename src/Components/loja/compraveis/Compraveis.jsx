import "./Compraveis.css";
import { mercador } from "../../../data/mercador";
import { useState } from "react";
import { GiCoinflip, GiBackpack } from "react-icons/gi";

const Mercador = ({ equip }) => {
  const itemExibir = mercador[equip];

  return (
    <div className="compravel__container">
      {itemExibir.map((elemento) => {
        return (
          <div className="compravel__card" key={elemento.id}>
            <h3 className="subtitulo">{elemento.nome}</h3>
            <p className="texto">Tipo: {equip}</p>
            <p className="texto">preço: {elemento.preco}</p>
            {elemento.comprado === false ? (
              <div className="btn__loja">
                <p className="texto">Comprar</p>
                <span className="icon__style">
                  <GiCoinflip />
                </span>
              </div>
            ) : (
              <div className="btn__loja">
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
