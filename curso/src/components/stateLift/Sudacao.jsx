import React from "react";

const Sudacao = ({ nome }) => {
  const saudacao = (seuNome) => {
    return `Ola ${seuNome}, tudo bem?`;
  };
  return <div>{nome && <p>{saudacao(nome)}</p>}</div>;
};

export default Sudacao;
