import { useContext } from "react";
import { ThemeContext } from "../context/ThemaContaxt";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Pagina de contatos</h1>
      <p>O tema e: {theme}</p>
    </div>
  );
};

export default Contact;
