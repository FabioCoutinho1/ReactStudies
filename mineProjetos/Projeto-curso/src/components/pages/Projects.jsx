import {useLocation} from "react-router-dom";
import Mensage from "../layout/Mensage";

const Projects = () => {

  const location = useLocation()
  const mensage = location.state?.mensagem
  return (
    <div>
      <h1>Meu Projetos</h1>
      <Mensage text={mensage} />
    </div>
  );
};

export default Projects;
