import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import NewProject from "./pages/NewProject";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <Routes>
          <Route element={<Container />}>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Company" element={<Company />} />
            <Route path="/NewProject" element={<NewProject />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
