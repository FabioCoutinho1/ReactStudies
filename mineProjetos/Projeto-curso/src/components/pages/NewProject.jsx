import React from "react";
import FormProject from "../project/FormProject";

const NewProject = () => {
  return (
    <section className="flex flex-col items-center">
      <h1>Criei seu Projeto</h1>
      <p>Crie seu projeto para depois adicionar os seviços</p>
      <FormProject />
    </section>
  );
};

export default NewProject;
