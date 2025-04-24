import { useNavigate } from "react-router-dom";
import FormProject from "../project/FormProject";

const NewProject = () => {
  const navigate = useNavigate();

  const createPost = async (project) => {
    project.cost = 0;
    project.services = [];
    try {
      const resposta = await fetch("http://localhost:3001/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      });
      const dados = await resposta.json();
      console.log(dados);

      navigate("/projects");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex justify-center items-center  ">
      <div className="flex flex-col h-full">
        <h1 className="font-bold text-4xl mb-4">Criei seu Projeto</h1>
        <p className="text-gray-500 mb-4">
          Crie seu projeto para depois adicionar os seviços
        </p>
        <FormProject handleSubmit={createPost} btnText="Criar projeto" />
      </div>
    </section>
  );
};

export default NewProject;
