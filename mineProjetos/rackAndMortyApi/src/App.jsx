import Card from "./components/Card";
import { useState, useEffect } from "react";
import { useState, useEffect } from "react";

import "./App.css";
import NavBar from "./components/NavBar";

function App() {
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
    <div className="flex flex-wrap items-center justify-center gap-2.5">
      {results.map((item) => (
        <Card key={item.id} image={item.image} name={item.name} />
      ))}
    </div>
  );
}

export default App;
