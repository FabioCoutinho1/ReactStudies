import React from "react";

const RenderListal = () => {
  const lista = ["uva", "Abacaxi", "pera", "manga", "Laranja", "Manga"];
  return (
    <div>
      <ul>
        {lista.map((element) => (
            <li>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default RenderListal;
