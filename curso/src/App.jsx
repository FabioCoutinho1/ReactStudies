import "./App.css";
import EventoProps from "./components/11_eventosProps/EventoProps";
import Render from "./components/12-renderizacaoCondicional/render";
import ButtonComponent from "./components/9_Eventos/ButtonComponent";
import FormComponent from "./components/9_Eventos/FormComponent";
import RenderListal from "./components/renderDeLista/RenderListal";

function App() {
  const enviarEvento = () => {
    console.log("O evento foi enviado!!!");
  };
  return (
    <>
      <h2>Eventos</h2>
      <ButtonComponent />
      <FormComponent />

      <h2>Eventos por props5</h2>
      <EventoProps event={enviarEvento} />

      <h2>Render Condicional</h2>
      <Render />

      <h2>Render de listas</h2>
      <RenderListal />
    </>
  );
}

export default App;
