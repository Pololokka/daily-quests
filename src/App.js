import "./App.css";

import Home from "./Components/home/Home";
import Navegacao from "./Components/nav/Navegacao";
import Loja from "./Components/loja/Loja";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="app__cabecalho">
        <nav className="nav__container">
          <Navegacao />
        </nav>
      </header>
      <main className="app__container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mercador" element={<Loja />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
