import React from "react";
import FormProject from "../project/FormProject";

const NewProject = () => {
  return (
    <section className="flex flex-col items-center h-screen">
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl mb-4">Criei seu Projeto</h1>
        <p className="text-gray-500 mb-4">Crie seu projeto para depois adicionar os seviços</p>
        <FormProject btnText="Criar projeto" />
      </div>
    </section>
  );
};

export default NewProject;
