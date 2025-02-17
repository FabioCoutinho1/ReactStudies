import React from "react";

const JsxExamples = () => {
  const userName = "Carlos";

  const user = {
    name: "Ana",
    lastName: "Souza",
  };

  function getGreeting(name) {
    return `Ola ${name}`;
  }

  const userIsLoggedIn = false;
  const userRole = "admin";

  const users = [
    { id: 1, name: "Fabio" },
    { id: 2, name: "pedro" },
    { id: 3, name: "guilherme" },
  ];

  return (
    <div>
      {/* basico */}
      <h2>Cnteudo que o usuario irar ver</h2>
      {/* lsitando dados do usuario */}
      <p>O nome do usuario e: {userName}</p>

      <p>
        Ussuario: {user.name} {user.lastName}
      </p>

      <p>{2 + 2}</p>

      <p>{getGreeting(userName)}</p>
      <p>{getGreeting("Fabio")}</p>

      {/* tudo que esta em chaves vai executar Js */}

      {/* DIFERENCAS DO HTML */}

      {/* class e uma palavra reservado do js 
        aqui usamos o ClassName pra dar nome as classes
      */}

      <div className="alguma-coisa">Este cara</div>

      {/* os Atributos do html tem que sem um camalCase */}

      <button onClick={() => alert("Test")}>botao</button>

      <input type="text" placeholder="Digite algo" />

      {/* RENDERIZACAO CONDICIONAL */}

      {userIsLoggedIn ? (
        <div>
          <p>Caso: esta logado</p>
        </div>
      ) : (
        <div>
          <p>Caso: nao esta logado</p>
        </div>
      )}

      <p>{userRole === "admin" && "voce e admin"}</p>

      {/* RENDERIZACAO DE LISTAS */}

      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.id} - {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JsxExamples;
