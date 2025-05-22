import { useState } from "react";

import Input from "../form/Input";
import SubmiBtn from "../form/SubmitBtn";

const ServiceForm = ({ projectData, btnText, handleSubmit }) => {
  const [service, setService] = useState();

  const submit = (e) => {
    e.preventDefault();
    projectData.services.push(service)
    handleSubmit(projectData);
    console.log(projectData)
  };
  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={submit}>
      <Input
        type={"text"}
        name={"name"}
        text={"Nome do serviço"}
        placeholder={"Insira o nome do serviço"}
        handleOnChange={handleChange}
      />

      <Input
        type={"number"}
        name={"cost"}
        text={"Custo do serviço"}
        placeholder={"Insira o valor total"}
        handleOnChange={handleChange}
      />

      <Input
        type={"text"}
        name={"description"}
        text={"Descrição do serviço"}
        placeholder={"Descreva o serviço"}
        handleOnChange={handleChange}
      />

      <SubmiBtn text={btnText} />
    </form>
  );
};

export default ServiceForm;
