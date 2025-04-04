import Card from "./components/Card";
import { useState, useEffect } from "react";

import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [results, setResults] = useState([]);
  const [info, setInfo] = useState([]);
  const [location, setLocation] = useState();

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
    <>
      <div className="flex items-center flex-col bg-cyan-950">
        <NavBar />
      </div>
      <div
        className="container-card h-full max-w-7xl flex-wrap gap-6
         bg-cyan-950 flex items-center justify-evenly mx-4"
      >
        {results.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            name={item.name}
            status={item.status}
            species={item.species}
            location={item.location.name}
          />
        ))}
      </div>
    </>
  );
}

export default App;
