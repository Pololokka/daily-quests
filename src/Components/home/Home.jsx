import Informacoes from "./informacoes/Informacoes";
import Formulario from "./formulario/Formulario";

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Home = () => {
  return (
    <section>
      <Tooltip anchorSelect=".my-anchor-element" />;
      <h1 className="titulo cont__header">Quadro de Avisos</h1>
      <Informacoes />
      <Formulario />
    </section>
  );
};

export default Home;
