const Card = ({ image, name }) => {
  return (
    <div className="flex h-20 bg-black w-45 text-white text-center">
      <img src={image} alt={name} />
      <h2 className="">{name}</h2>
    </div>
  );
};

export default Card;
