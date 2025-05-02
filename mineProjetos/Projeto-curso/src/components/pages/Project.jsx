import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);

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

  return (
    <div>
      <h1>{project.name}</h1>
    </div>
  );
};

export default Project;
