import React from "react";

const StateLift = ({ setNome }) => {
  return (
    <div>
        <input type="text" name="nome" onChange={(e) => setNome(e.target.value)} />
    </div>
  );
};

export default StateLift;
