import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contatos from "./pages/Contatos";
import Sobre from "./pages/sobre";
import Home from "./pages/home";

import "./App.css";
import MenuNav from "./components/MenuNav";

function App() {
  return (
    <Router>
      <MenuNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
    </Router>
  );
}

export default App;
