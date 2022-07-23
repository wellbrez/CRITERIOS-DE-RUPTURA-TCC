import React, { useState } from "react";
import style from "./ElementoDiferencial.module.css";
import Seta from "./SVGs/Seta";



const ElementoDiferencial = (props) => {
  const calculaCor = (n) =>
  {
    let maxrange = Math.max(Number(props.minmax.sigmax.max),Number(props.minmax.sigmay.max),Number(props.minmax.tauxy.max));
    return `RGB(${(-n/maxrange*127.5+127.5)},${(n/maxrange*127.5+127.5)},125)`
  }
  let size = Number(props.size)*0.8;
  let offset = `${size / 2 + size / 4}em`;
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
      <p style={{left:-props.size*40}}>{props.propriedades.sigmax.toFixed(3)+" MPa"}</p>
      <p style={{top:-props.size*24}}>{props.propriedades.sigmay.toFixed(3)+" MPa"}</p>
      <p style={{top:-props.size*8,left:-props.size*20}}>{props.propriedades.tauxy.toFixed(3)+" MPa"}</p>
      <Seta
        color={calculaCor(props.propriedades.sigmax)}
        size={props.size}
        direcao="direita"
        x={offset}
        valor={propriedades.sigmax}
      />
      <Seta
        color={calculaCor(props.propriedades.sigmay)}
        size={props.size}
        direcao="baixo"
        y={offset}
        valor={propriedades.sigmay}
      />
      <Seta
        color={calculaCor(props.propriedades.sigmay)}
        size={props.size}
        direcao="cima"
        y={"-" + offset}
        valor={propriedades.sigmay}
      />
      <Seta
        color={calculaCor(props.propriedades.sigmax)}
        size={props.size}
        direcao="esquerda"
        x={"-" + offset}
        valor={propriedades.sigmax}
      />
      <Seta
        color={calculaCor(props.propriedades.tauxy)}
        cis="true"
        size={props.size}
        direcao="direita"
        x={offset}
        valor={propriedades.tauxy}
      />
      <Seta
        color={calculaCor(props.propriedades.tauxy)}
        cis="true"
        size={props.size}
        direcao="baixo"
        y={offset}
        valor={propriedades.tauxy}
      />
      <Seta
        color={calculaCor(props.propriedades.tauxy)}
        cis="true"
        size={props.size}
        direcao="cima"
        y={"-" + offset}
        valor={propriedades.tauxy}
      />
      <Seta
        color={calculaCor(props.propriedades.tauxy)}
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
