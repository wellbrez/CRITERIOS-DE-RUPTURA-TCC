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
        titulo="Tensão axial horizontal - σx (MPa)"
        sufixo="MPa"
        min={props.minmax.sigmax.min}
        max={props.minmax.sigmax.max}
        setMin={props.functminmax.sigmax.min}
        setMax={props.functminmax.sigmax.max}
        value={props.propriedades.sigmax}
        onChange={changeSigmaX}
      />
      <Slider
        titulo="Tensão axial vertical - σy (MPa)"
        sufixo="MPa"
        min={props.minmax.sigmay.min}
        max={props.minmax.sigmay.max}
        setMin={props.functminmax.sigmay.min}
        setMax={props.functminmax.sigmay.max}
        value={props.propriedades.sigmay}
        onChange={changeSigmaY}
      />
      <Slider
        titulo="Tensão de cisalhamento 
        - Τxy (MPa)"

        sufixo="MPa"
        min={props.minmax.tauxy.min}
        max={props.minmax.tauxy.max}
        setMin={props.functminmax.tauxy.min}
        setMax={props.functminmax.tauxy.max}
        value={props.propriedades.tauxy}
        onChange={changeTauxy}
      />
    </div>
  );
};

export default BarraElemento;
