import React from "react";

import Savings from "../assets/savings.svg";

const Home = () => {
  return (
    <section className="flex h-dvh flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-2">
        Bem Vindo ao
        <span className="text-amber-200 font-bold bg-black p-1">Costs</span>
      </h1>
      <p>Comece a organizar seus projetos agora</p>
      <img className="w-80" src={Savings} alt="Pig and Coins" />
    </section>
  );
};

export default Home;
