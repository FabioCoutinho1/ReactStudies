import { useState, useEffect } from "react";

const UseEffectExample = () => {
  // Sem dependecias
  useEffect(() => {
    console.log("Rodou UE1");
  });

  //com dependecias vazias
  // So irar executar uma unica vez quando a pagina for carregada
  useEffect(() => {
    console.log("Rodou UE2");
  }, []);
  // O useState Ativa a reenderizção da pagina, logo o useeffect vai acionar novamente
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // com dependencias
  // so rooda se o o ques estivar atrelado a dependencia ativar um reenderizção na tela

  useEffect(() => {
    console.log("Rodou UE3");
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <p>{count2}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount2(count2 + 1)}>Incrementar</button>
    </div>
  );
};

export default UseEffectExample;
