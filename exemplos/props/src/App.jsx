import "./App.css";
import Pessoa from "./components/Pessoa";


function App() {
  const nome = "Maria";

  return (
    <>
      <Pessoa
        foto="https://placehold.co/150"
        nome="Fabio"
        idade="22"
        profissao="Progamador"
      />
    </>
  );
}

export default App;
