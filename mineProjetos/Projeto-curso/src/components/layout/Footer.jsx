import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white flex items-center flex-col p-4 gap-4">
      <ul className="flex gap-4">
        <li className="cursor-pointer text-2xl">
          <FaFacebook />
        </li>
        <li className="cursor-pointer text-2xl">
          <FaLinkedin />
        </li>
        <li className="cursor-pointer text-2xl">
          <FaInstagram />
        </li>
      </ul>
      <p>
        <span className="text-amber-200">Empresa </span>
        &copy; 2025
      </p>
    </footer>
  );
};

export default Footer;
