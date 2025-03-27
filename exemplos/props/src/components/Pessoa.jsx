import React from "react";

const Pessoa = ({ foto, nome, idade, profissao }) => {
  return (
    <div>
      <img src={foto} alt={nome} />
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Profissao: {profissao}</p>
    </div>
  );
};

export default Pessoa;
