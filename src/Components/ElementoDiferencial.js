import React, { useState } from "react";
import style from "./ElementoDiferencial.module.css";
import Seta from "./SVGs/Seta";
const ElementoDiferencial = (props) => {
  let size = 20;
  let offset = `${size / 2 + 2}em`;
  let maxprop = 0;
  for (let prop in props.propriedades) {
    if (maxprop < Math.abs(props.propriedades[prop])) {
      maxprop = Math.abs(props.propriedades[prop]);
    }
  }
  let propriedades = {
    sigmax: props.propriedades["sigmax"] / maxprop,
    sigmay: props.propriedades["sigmay"] / maxprop,
    tauxy: props.propriedades["tauxy"] / maxprop,
  };

  return (
    <div className={style.elemento}>
      <Seta direcao="direita" x={offset} valor={propriedades.sigmax} />
      <Seta direcao="baixo" y={offset} valor={propriedades.sigmay} />
      <Seta direcao="cima" y={"-" + offset} valor={propriedades.sigmay} />
      <Seta direcao="esquerda" x={"-" + offset} valor={propriedades.sigmax} />
      <Seta
        cis="true"
        direcao="direita"
        x={offset}
        valor={propriedades.tauxy}
      />
      <Seta cis="true" direcao="baixo" y={offset} valor={propriedades.tauxy} />
      <Seta
        cis="true"
        direcao="cima"
        y={"-" + offset}
        valor={propriedades.tauxy}
      />
      <Seta
        cis="true"
        direcao="esquerda"
        x={"-" + offset}
        valor={propriedades.tauxy}
      />
      <div
        className={style.quadrado}
        style={{ width: `${size}em`, height: `${size}em` }}
      ></div>
    </div>
  );
};
export default ElementoDiferencial;
