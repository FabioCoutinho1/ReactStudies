import { useState } from "react";
import Persson from "./Persson";

const GerarPessoas = () => {
  const [funcionarios, setFuncionarios] = useState([
    { id: 1, nome: "Fabio", idade: 22, cargo: "recep", salario: 1750 },
    { id: 2, nome: "Paulo", idade: 40, cargo: "gerente", salario: 4800 },
    { id: 3, nome: "Antonio", idade: 29, cargo: "manobrista", salario: 1800 },
    { id: 4, nome: "Cleusa", idade: 45, cargo: "camareira", salario: 1500 },
  ]);

  return (
    <div>
      <h1>Lista de Funcionarios</h1>
      {funcionarios.map((item) => (
        <Persson
          key={item.id}
          nome={item.nome}
          idade={item.idade}
          cargo={item.cargo}
          salario={item.salario}
        />
      ))}
    </div>
  );
};

export default GerarPessoas;
