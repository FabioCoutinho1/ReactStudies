import { useState, useEffect } from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmiBtn from "../form/SubmitBtn";

const FormProject = ({ handleSubmit, btnText, projectDate }) => {
  const [categoris, setCategoris] = useState([]);
  const [project, setProject] = useState(projectDate || []);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const resposta = await fetch("http://localhost:3001/categories");
        const dados = await resposta.json();
        setCategoris(dados);
      } catch (erro) {
        console.error(erro);
      }
    };

    fetchCategories();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleCategory = (e) => {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  };

  return (
    <form onSubmit={submit}>
      <Input
        type="text"
        name="name"
        placeholder="Insira o nome do projeto"
        text="Nome do projeto"
        value={project.name ? project.name : ""}
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        name="buget"
        placeholder="Insira o orçamento do projeto"
        text="Orçamento do projeto"
        value={project.buget ? project.buget : ""}
        handleOnChange={handleChange}
      />

      <Select
        text="Selecione uam categoria"
        name="category-id"
        options={categoris}
        value={project.category ? project.category.id : ""}
        handleOnChange={handleCategory}
      />
      <SubmiBtn text={btnText} />
    </form>
  );
};

export default FormProject;
