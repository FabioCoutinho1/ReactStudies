import { useState, useEffect } from "react";

const Card = () => {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character/");
        const data = await res.json();
        const { info, results } = data;
        setInfo(info);
        setResults(results);
        console.log(data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };
    fetchApi();
  }, []);

  return (
    <div>
      <h1>lista de personagens</h1>
      {results.map((item) => (
        <div key={item.id} className="bg-black">
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

export default Card;
