import { useState } from "react";

const UseState = () => {
  const [cont, setCount] = useState(0);
  const icrementar = () => {
    setCount((numero) => numero + 1);
  };

  return (
    <div>
      <p>Numero: {cont}</p>
      <button onClick={icrementar}>Adicionar</button>
    </div>
  );
};

export default UseState;
