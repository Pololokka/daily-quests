import Informacoes from "./informacoes/Informacoes";
import Tarefas from "./tarefas/Tarefas";
import Formulario from "./formulario/Formulario";

const Home = () => {
  return (
    <section>
      <h1 className="titulo form__header">Quadro de Avisos</h1>
      <Informacoes />
      <Formulario />
      <Tarefas />
    </section>
  );
};

export default Home;
