import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import NewProject from "./pages/NewProject";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Contact />} />
        <Route path="/" element={<Company />} />
        <Route path="/" element={<NewProject />} />
      </Routes>
    </Router>
  );
}

export default App;
