import React from "react";

const FormComponent = () => {
  const enviarForm = (e) => {
    e.preventDefault();
    console.log("Deu bom!!!");
  };
  return (
    <div>
      <form onSubmit={enviarForm}>
        <div>
          <input type="text" />
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
