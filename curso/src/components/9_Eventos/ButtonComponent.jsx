import React from "react";

const ButtonComponent = () => {
  const eventoButton = () => {
    console.log("Enviou!");
  };
  return (
    <>
      <button onClick={eventoButton}>Enviar</button>
    </>
  );
};

export default ButtonComponent;
