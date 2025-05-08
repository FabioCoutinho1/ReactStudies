import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Load from "../layout/Load";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showForm, setShowForm] = useState(true);

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

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      {project.name ? (
        <div className="border-b-2 border-b-gray-300">
          <div className="flex justify-between mb-8">
            <h1 className="text-4xl font-bold bg-black text-amber-300 p-4">
              {project.name}
            </h1>
            <button
              className="bg-gray-900 w-52 h-14 text-white transition duration-300 ease-in hover:text-amber-200 "
              onClick={toggleForm}
            >
              {showForm ? "Editar Projeto" : "Fechar"}
            </button>
          </div>

          {showForm ? (
            <div className="mb-8">
              <p>
                <span className="font-bold">Categoria: </span>
                {project.category.name}
              </p>
              <p>
                <span className="font-bold">Tota de Orçamento: </span>R$
                {project.buget}
              </p>
              <p>
                <span className="font-bold">Total utilizaddo: </span>R$
                {project.cost}
              </p>
            </div>
          ) : (
            "Form"
          )}
        </div>
      ) : (
        <Load />
      )}
    </>
  );
};

export default Project;
