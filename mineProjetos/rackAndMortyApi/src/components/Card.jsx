const Card = ({ image, name }) => {
  return (
    <div className="bg-black w-45 h-45 text-center">
      <h2 className="">{name}</h2>
      <img src={image} alt={name} />
    </div>
  );
};

export default Card;
