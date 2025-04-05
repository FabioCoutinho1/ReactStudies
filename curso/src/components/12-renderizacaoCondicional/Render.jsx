import { useState } from "react";

const Render = () => {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  const meuEvento = (e) => {
    e.preventDefault();
    setUserEmail(email);
  };

  const eventLimparEmail = () => {
    setUserEmail("");
  };
  return (
    <>
      <form onSubmit={meuEvento}>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>

      {userEmail && (
        <div>
          <p>{userEmail}</p>
          <button onClick={eventLimparEmail}>LinparEmail</button>
        </div>
      )}
    </>
  );
};

export default Render;
