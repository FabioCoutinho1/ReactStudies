import { useState } from "react";

import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible ? ():()}
      <button>mostrar</button>
    </>
  );
}

export default App;
