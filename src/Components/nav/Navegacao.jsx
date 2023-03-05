import "./Navegacao.css";
import { Link } from "react-router-dom";

const Navegacao = () => {
  return (
    <nav className="nav__container">
      <ul className="lista__nav texto">
        <li className="link__nav">
          <Link to="/">Quadro de Avisos</Link>
        </li>
        <li className="link__nav">
          <Link to="/mercador">Mercador</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navegacao;
