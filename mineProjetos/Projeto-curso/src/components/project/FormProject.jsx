import React from "react";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmiBtn from "../form/SubmitBtn";

const FormProject = ({btnText}) => {
  return (
    <form>
      <Input
        type="text"
        name="name"
        placeholder="Insira o nome do projeto"
        text="Nome do projeto"
      />
      <Input
        type="number"
        name="buget"
        placeholder="Insira o orçamento do projeto"
        text="Orçamento do projeto"
      />

      <Select text="Selecione uam categoria" name="category-id" />
      <SubmiBtn text={btnText}/>
    </form>
  );
};

export default FormProject;
