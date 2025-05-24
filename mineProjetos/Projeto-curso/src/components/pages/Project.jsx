import { useParams } from "react-router-dom";
import { parse, v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

import Load from "../layout/Load";
import FormProject from "../project/FormProject";
import Mensage from "../layout/Mensage";
import ServiceForm from "../service/ServiceForm";
import ServiceCard from "../service/ServiceCard";

const Project = () => {
  const { id } = useParams();
  const [project1, setProject1] = useState([]);
  const [services, setServices] = useState([]);
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
        setProject1(data);
        setServices(data.services);
      } catch (erro) {
        console.error(erro);
      }
    };

    getProject();
  }, [id]);

  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };

  const removeMsg = () => {
    setTimeout(() => {
      setMsg("");
      setTypeMsg("");
    }, 3000);
  };

  const toggeServiceForm = () => {
    setShowServiceForm(!showServiceForm);
  };

  const editSubmit = async (project) => {
    setMsg("");

    try {
      if (project.buget < project.cost) {
        setMsg("O orçamento não pode ser menor que o custo do projeto");
        setTypeMsg("error");

        removeMsg();
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
      setProject1(data);
      setMsg("Projeto editado com sucesso");
      setShowProjectForm(true);
    } catch (erro) {
      console.log(erro);
    }
  };

  const puthService = async (project) => {
    setMsg("");
    setTypeMsg("");

    try {
      const lastSevice = project.services[project.services.length - 1];
      lastSevice.id = uuidv4();

      const lastServiceCost = lastSevice.cost;

      const newConst = parseFloat(project.cost) + parseFloat(lastServiceCost);

      if (newConst > project.buget) {
        setMsg("Custo do serviço ultrapassa o valor do orçamento");
        setTypeMsg("error");
        project.services.pop();
        removeMsg();
        return false;
      }

      project.cost = parseFloat(newConst);
      console.log(project);

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
      console.log(data);
      setMsg("Serviço adicionado com sucesso");
      setShowServiceForm(true);
    } catch (erro) {
      console.log(err3);
    }
  };

  const removeService = async (id, cost)=>{
    const novoSevico = services.filter((element)=> element.id !== id)
    const newCost = parseFloat(project1.cost) - parseFloat(cost)
  
    try{
      const resposta =  await fetch(`http://localhost:3001/projects/${project1.id}`,{
        method: "PATCH",
        headers:{
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify({...project1, cost:newCost, services: novoSevico})
      })
      const data = await resposta.json()
      console.log(data)
      setProject1(data)
      setServices(data.services)
    }catch(erro){
      console.log(erro)
    }
  }
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
                <ServiceForm
                  handleSubmit={puthService}
                  btnText={"Enviar"}
                  projectData={project1}
                />
              </div>
            )}

            <div>
              <h2 className="font-bold text-3xl mb-8">Serviços:</h2>
              <div className="overflow-y-scroll max-h-[394px] flex justify-center gap-10 flex-wrap items-center mb-8">
                {services.length > 0 &&
                  services.map((element) => (
                    <ServiceCard
                      key={element.id}
                      id={element.id}
                      name={element.name}
                      cost={element.cost}
                      description={element.description}
                      handleRemove={removeService}
                    />
                  ))}
                {services.length === 0 && <p>Não a serviços ainda</p>}
              </div>
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
