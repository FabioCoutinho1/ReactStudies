import React from "react";

const EventoProps = ({ event }) => {
  return (
    <>
      <button onClick={event}>Receber event props</button>
    </>
  );
};

export default EventoProps;
