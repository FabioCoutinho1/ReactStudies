import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

import { useContext } from "react";
import { ThemeContext } from "./context/ThemaContaxt";

import "./App.css";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme === "dark" ? "dark__theme" : ""}`}>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
