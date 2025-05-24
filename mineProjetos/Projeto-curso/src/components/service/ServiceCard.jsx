const ServiceCard = ({ name, cost, description, handleRemove, id}) => {

  const remove = (e)=>{
    e.preventDefault()
    handleRemove(id, cost)
  }
  return (
    <div className=" border p-4 flex flex-col w-2xs gap-2">
      <h1 className=" text-2xl font-bold text-amber-300 bg-black px-2">
        {name}
      </h1>
      <p>
        <span className="font-bold">Valor do serviço:</span> R${cost}
      </p>

      <p className="text-gray-400">{description}</p>

      <button
        className={
          "px-4 py-1 w-25 flex items-center justify-center cursor-pointer duration-300 bg-red-300 hover:bg-red-400"
        }
        onClick={remove}
      >
        Excluir
      </button>
    </div>
  );
};

export default ServiceCard;
