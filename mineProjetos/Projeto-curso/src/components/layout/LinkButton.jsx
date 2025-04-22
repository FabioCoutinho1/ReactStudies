import { Link } from "react-router-dom";

const LinkButton = ({ to, text }) => {
  return (
    <Link
      className="bg-gray-900 tra text-white transition duration-300 ease-in hover:text-amber-200 py-2 px-8"
      to={to}
    >
      {text}
    </Link>
  );
};

export default LinkButton;
