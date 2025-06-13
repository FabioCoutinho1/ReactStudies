import { useContext } from "react";
import { ThemeContext } from "../context/ThemaContaxt";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Pagina inicil</h1>
      <button onClick={toggleTheme}>Mudar tema</button>
      <p>o tema atual e: {theme}</p>
    </div>
  );
};

export default Home;
