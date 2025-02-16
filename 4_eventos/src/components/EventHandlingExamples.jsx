import { useState } from "react";

const EventHandlingExamples = () => {
  const handalClick = () => {
    alert("testando");
  };

  const handalGreet = (name) => {
    alert(`Ola ${name}`);
  };

  const [nome, setNome] = useState();

  const handalSubmit = (e) => {
    e.preventDefault();

    alert(`Enviado ${nome}`);
  };

  return (
    <div>
      <button onClick={() => alert("oi")}>CLique</button>
      <button onClick={handalClick}>CLique</button>
      <br />
      <button onClick={() => handalGreet("Ana")}>Dizer ola Ana</button>
      <button onClick={() => handalGreet("Pedro")}>Dizer ola Pedro</button>
      <br />
      <form onSubmit={handalSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default EventHandlingExamples;
