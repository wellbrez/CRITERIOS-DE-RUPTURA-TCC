import React from "react";
import style from "./Ensaios.module.css";

const Ensaios = (props) => {
  return (
    <div>
      <form className={style.form}>
        <label for="cisalhamento">Resistência ao Cisalhamento (MPa)</label>
        <input id="cisalhamento" type="text"></input>
        <label for="tracao">Resistência à tração (MPa)</label>
        <input id="tracao" type="text"></input>
        <label for="compressao">Resistência à compressão (MPa)</label>
        <input id="compressao" type="text"></input>
      </form>
    </div>
  );
};

export default Ensaios;
