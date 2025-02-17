import React from "react";
import "./StyleExamples.css";
import style  from "./StyleExamples.module.css";

const StylesExamples = () => {
  const ilineStyle = {
    // illine
    color: "blue",
    fontSize: "20px",
  };
  return (
    <div>
      <h2 style={ilineStyle}>Estilo Inline</h2>
      {/* Arquico de estilo */}
      <h2 className="text">Meu css</h2>
      {/* Css module */}
      <h2 className={style.textPurple}>meu CSS modules</h2>
    </div>
  );
};

export default StylesExamples;
