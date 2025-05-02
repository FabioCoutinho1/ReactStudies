import { Link } from "react-router-dom";

const CardProjetc = ({ id, name, buget, categry, hendleDelete }) => {
  const buttonStyle =
    "bg-amber-200 px-4 py-1 w-25 flex items-center justify-center cursor-pointer duration-300";

  const categoryColors = {
    Infra: "bg-indigo-200",
    Desenvolvimento: "bg-emerald-200",
    Design: "bg-purple-200",
    Planejamento: "bg-red-200",
  };

  const remove = (e) => {
    e.preventDefault();
    hendleDelete(id);
  };
  return (
    <div className="border p-4">
      <h1 className="mb-4 text-2xl font-bold text-amber-300 bg-black px-2">
        {name}
      </h1>

      <p className="mb-4">
        <span className="font-bold">Orçamento:</span> R${buget}
      </p>
      <p className="flex items-center gap-3 mb-4">
        <span
          className={`block w-3 h-3 rounded-full ${categoryColors[categry]}`}
        ></span>{" "}
        {categry}
      </p>

      <div className="flex justify-between gap-6">
        <button
          className={`${buttonStyle} bg-red-300 hover:bg-red-400`}
          onClick={remove}
        >
          Remover
        </button>
        <Link
          className={`${buttonStyle} hover:bg-amber-400`}
          to={`/Project/${id}`}
        >
          Editar
        </Link>
      </div>
    </div>
  );
};

export default CardProjetc;
