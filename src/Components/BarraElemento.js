import React from "react";
import style from "./BarraElemento.module.css";
import Slider from "./Slider";

const BarraElemento = (props) => {
  const changeSigmaX = (vl) => {
    props.onSetPropriedades((propriedades) => {
      return {
        sigmax: vl,
        sigmay: propriedades.sigmay,
        tauxy: propriedades.tauxy,
      };
    });
  };
  const changeSigmaY = (vl) => {
    props.onSetPropriedades((propriedades) => {
      return {
        sigmax: propriedades.sigmax,
        sigmay: vl,
        tauxy: propriedades.tauxy,
      };
    });
  };
  const changeTauxy = (vl) => {
    props.onSetPropriedades((propriedades) => {
      return {
        sigmax: propriedades.sigmax,
        sigmay: propriedades.sigmay,
        tauxy: vl,
      };
    });
  };
  return (
    <div className={style.barra}>
      <Slider
        titulo="σx (MPa)"
        sufixo="MPa"
        min="-500"
        max="500"
        onChange={changeSigmaX}
      />
      <Slider
        titulo="σy (MPa)"
        sufixo="MPa"
        min="-500"
        max="500"
        onChange={changeSigmaY}
      />
      <Slider
        titulo="Τxy (MPa)"
        sufixo="MPa"
        min="-500"
        max="500"
        onChange={changeTauxy}
      />
    </div>
  );
};

export default BarraElemento;
