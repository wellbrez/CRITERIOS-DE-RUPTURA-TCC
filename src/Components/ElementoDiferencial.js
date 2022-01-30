import React, { useState } from "react";
import style from "./ElementoDiferencial.module.css";
import Seta from "./SVGs/Seta";
const ElementoDiferencial = (props) => {
  let size = Number(props.size);
  let offset = `${size / 2 + size / 8}em`;
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
      <Seta
        size={props.size}
        direcao="direita"
        x={offset}
        valor={propriedades.sigmax}
      />
      <Seta
        size={props.size}
        direcao="baixo"
        y={offset}
        valor={propriedades.sigmay}
      />
      <Seta
        size={props.size}
        direcao="cima"
        y={"-" + offset}
        valor={propriedades.sigmay}
      />
      <Seta
        size={props.size}
        direcao="esquerda"
        x={"-" + offset}
        valor={propriedades.sigmax}
      />
      <Seta
        cis="true"
        size={props.size}
        direcao="direita"
        x={offset}
        valor={propriedades.tauxy}
      />
      <Seta
        cis="true"
        size={props.size}
        direcao="baixo"
        y={offset}
        valor={propriedades.tauxy}
      />
      <Seta
        cis="true"
        size={props.size}
        direcao="cima"
        y={"-" + offset}
        valor={propriedades.tauxy}
      />
      <Seta
        cis="true"
        size={props.size}
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
