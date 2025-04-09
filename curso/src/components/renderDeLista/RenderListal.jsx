import React from "react";

const RenderListal = () => {
  const lista = ["uva", "Abacaxi", "pera", "manga", "Laranja", "Manga"];
  return (
    <div>
      <ul>
        {lista.map((element, index) => (
            <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default RenderListal;
