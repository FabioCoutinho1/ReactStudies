import { useLocation } from "react-router-dom";
import { useState, useEffect, use } from "react";

import Mensage from "../layout/Mensage";
import LinkButton from "../layout/LinkButton";
import CardProjetc from "../project/CardProjetc";
import Load from "../layout/Load";

const Projects = () => {
  const location = useLocation();
  const mensage = location.state?.mensagem;

  const [projetcs, setProjetcs] = useState([]);
  const [loading, setLoaing] = useState(false);
  const [msg, setMsg] = useState();

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
        setLoaing(true);
      } catch (error) {
        console.log(error);
      }
    };

    creatGet();
  }, []);

  const removeProject = async (id) => {
    try {
      const resposta = await fetch(`http://localhost:3001/projects/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMsg("Projeto apagado com sucesso");
      setProjetcs(projetcs.filter((projetc) => projetc.id !== id));
    } catch (erro) {
      console.error(erro);
    }
  };
  return (
    <section className="flex flex-col justify-center items-center ">
      <div className="max-w-7xl">
        <div className="flex justify-between flex-wrap mb-28 gap-9">
          <h1 className="font-bold text-4xl">Meu Projetos</h1>
          <LinkButton to="/NewProject" text="Criar Projeto" />
        </div>
        {mensage && <Mensage text={mensage} />}
        {msg && <Mensage text={msg} />}
        <div className="flex justify-center gap-10 flex-wrap items-center">
          {projetcs.length > 0 &&
            projetcs.map((element) => (
              <CardProjetc
                key={element.id}
                id={element.id}
                name={element.name}
                buget={element.buget}
                categry={element.category.name}
                hendleDelete={removeProject}
              />
            ))}
          {!loading && <Load />}
          {loading && projetcs.length === 0 && <p>Aainda nao a prejetos!</p>}
        </div>
      </div>
    </section>
  );
};

export default Projects;
