import { useState } from "react";

// useState: hooks

// Sempre que vamos auterar o valor de algo vamos utilizar o useState
// se for somente leitura => var, state

const UseStateComponent = () => {
  const [count, setCount] = useState(0);
  //   variavel de consulta e uma te alteracao, inicio do hook

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    //   setCount(count + 1);
    console.log(count);
  };

  const [user, setUser] = useState({
    nome: "Ana",
    age: 21,
    hobbies: ["leitura", "Progamar", "Jogar"],
  });

  const updateUserAge = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };

  return (
    <div>
      <div>Contador</div>
      <p>Voce Clicou {count} Vezes</p>
      <button onClick={increment}>Incrementar</button>

      <p>
        Nome {user.nome} e idade {user.age}
      </p>
      <button onClick={updateUserAge}>Incrementar idade</button>
    </div>
  );
};

export default UseStateComponent;
