import { useState } from "react";

import "./App.css";
import EventoProps from "./components/11_eventosProps/EventoProps";
import Render from "./components/12-renderizacaoCondicional/render";
import ButtonComponent from "./components/9_Eventos/ButtonComponent";
import FormComponent from "./components/9_Eventos/FormComponent";
import RenderListal from "./components/renderDeLista/RenderListal";
import StateLift from "./components/stateLift/StateLift";
import Sudacao from "./components/stateLift/Sudacao";

function App() {
  const enviarEvento = () => {
    console.log("O evento foi enviado!!!");
  };
  const [nome, setNome] = useState("");

  return (
    <>
      <h2>Eventos</h2>
      <ButtonComponent />
      <FormComponent />

      <h2>Eventos por props</h2>
      <EventoProps event={enviarEvento} />

      <h2>Render Condicional</h2>
      <Render />

      <h2>Render de listas</h2>
      <RenderListal />

      <h2>State Lift</h2>
      <StateLift setNome={setNome} />
      <Sudacao nome={nome} />
    </>
  );
}

export default App;
