import { useState } from "react";

import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);

  const toggle = () => {

    if(visible){
    setVisible(false)
    return
    }
    setVisible(true);
  };

  return (
    <>
      {visible ? (
        <button onClick={toggle}>mostrar</button>
      ) : (
        <button onClick={toggle}>mostrar 2</button>
      )}

      <button>{ }</button>
    </>
  );
}

export default App;
