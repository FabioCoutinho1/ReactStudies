import React from "react";

import Savings from "../../assets/savings.svg";
import LinkButton from "../layout/LinkButton";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">
        Bem Vindo ao
        <span className="text-amber-200 font-bold bg-black px-1">Costs</span>
      </h1>
      <p className="mb-6 text-gray-500">
        Comece a organizar seus projetos agora
      </p>
      <LinkButton to="/NewProject" text="Criar Projeto" />
      <img className="w-80 my-8" src={Savings} alt="Pig and Coins" />
    </section>
  );
};

export default Home;
