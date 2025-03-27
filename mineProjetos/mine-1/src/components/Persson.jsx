import React from "react";

const Persson = ({ nome, idade, cargo, salario }) => {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Cargo: {cargo}</p>
      <p>salario: {salario}</p>
    </div>
  );
};

export default Persson;
