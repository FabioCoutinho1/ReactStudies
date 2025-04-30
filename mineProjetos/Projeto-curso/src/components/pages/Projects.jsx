import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Mensage from "../layout/Mensage";
import LinkButton from "../layout/LinkButton";
import CardProjetc from "../project/CardProjetc";

const Projects = () => {
  const location = useLocation();
  const mensage = location.state?.mensagem;

  const [projetcs, setProjetcs] = useState([]);

  useEffect(() => {
    const creatGet = async () => {
      try {
        const resposta = await fetch("http://localhost:3001/projects", {
          method: "GET",
          headers: {
            "Content-Type": "applicatio/json",
          },
        });
        const data = await resposta.json();
        console.log(data);
        setProjetcs(data);
      } catch (error) {
        console.log(error);
      }
    };

    creatGet();
  }, []);
  return (
    <section className="flex flex-col justify-center items-center ">
      <div className="max-w-7xl">
        <div className="flex justify-between flex-wrap mb-28 gap-9">
          <h1 className="font-bold text-4xl">Meu Projetos</h1>
          <LinkButton to="/NewProject" text="Criar Projeto" />
        </div>
        {mensage && <Mensage text={mensage} />}
        <div className="flex justify-center gap-10 flex-wrap items-center">
          {projetcs.length > 0 &&
            projetcs.map((element) => (
              <CardProjetc
                key={element.id}
                name={element.name}
                buget={element.buget}
                categry={element.category.name}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
