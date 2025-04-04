const Card = ({ image, name, status, species, location }) => {
  return (
    <div className="w-100 h-40 rounded-md bg-sky-900 text-amber-50 flex gap-6">
      <img src={image} alt={name} />
      <div className=" flex-auto flex flex-col  bg-sky-900">
        <h2 className="text-xl font-black text-sky-200">{name}</h2>
        <p>{status}</p>
        <p>{species}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Card;
