import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Load from "../layout/Load";
import FormProject from "../project/FormProject";
import Mensage from "../layout/Mensage";

const Project = () => {
  const { id } = useParams();
  const [project1, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(true);
  const [showServiceForm, setShowServiceForm] = useState(true);
  const [msg, setMsg] = useState();
  const [typeMsg, setTypeMsg] = useState();

  useEffect(() => {
    const getProject = async () => {
      try {
        const resposta = await fetch(`http://localhost:3001/projects/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await resposta.json();
        setProject(data);
        console.log(data);
      } catch (erro) {
        console.error(erro);
      }
    };

    getProject();
  }, [id]);

  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };

  const toggeServiceForm = () => {
    setShowServiceForm(!showServiceForm);
  };

  const editSubmit = async (project) => {
    setMsg();

    try {
      if (project.buget < project.cost) {
        setMsg("O orçamento não pode ser menor que o custo do projeto");
        setTypeMsg("error");
        return false;
      }
      const resposta = await fetch(
        `http://localhost:3001/projects/${project.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(project),
        }
      );
      const data = await resposta.json();
      setProject(data);
      setMsg("Projeto editado com sucesso");
      setShowProjectForm(true);
    } catch (erro) {
      console.log(erro);
    }
  };
  return (
    <>
      {project1.name ? (
        <div>
          <div className="border-b-2 border-b-gray-300">
            <div className="flex justify-between mb-8 ">
              <h1 className="text-4xl font-bold bg-black text-amber-300 p-4">
                {project1.name}
              </h1>
              <button
                className="bg-gray-900 w-52 h-14 text-white transition duration-300 ease-in hover:text-amber-200 "
                onClick={toggleProjectForm}
              >
                {showProjectForm ? "Editar Projeto" : "Fechar"}
              </button>
            </div>
            {msg && <Mensage type={typeMsg} text={msg} />}
            {showProjectForm ? (
              <div className="mb-8">
                <p className="mb-4">
                  <span className="font-bold">Categoria: </span>
                  {project1.category.name}
                </p>
                <p className="mb-4">
                  <span className="font-bold">Tota de Orçamento: </span>R$
                  {project1.buget}
                </p>
                <p className="mb-4">
                  <span className="font-bold">Total utilizaddo: </span>R$
                  {project1.cost}
                </p>
              </div>
            ) : (
              <div className="mb-8">
                <FormProject
                  handleSubmit={editSubmit}
                  btnText={"Comcluir ediçao"}
                  projectDate={project1}
                />
              </div>
            )}
          </div>
          <div className="border-b-2 border-gray-300 ">
            <div className="flex justify-between items-center my-8">
              <h2 className="font-bold text-3xl">Adicione um serviço:</h2>
              <button
                className="bg-gray-900 w-52 h-14 text-white transition duration-300 ease-in hover:text-amber-200 "
                onClick={toggeServiceForm}
              >
                {showServiceForm ? "Adicionar serviço" : "Fechar"}
              </button>
            </div>

            {!showServiceForm && (
              <div className="mb-8">
                <p>formulario</p>
              </div>
            )}

            <div>
              <h2 className="font-bold text-3xl">Serviço:</h2>
              <p>area de serviços</p>
            </div>
          </div>
        </div>
      ) : (
        <Load />
      )}
    </>
  );
};

export default Project;
