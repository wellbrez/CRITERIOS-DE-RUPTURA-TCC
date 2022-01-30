import React from "react";
import style from "./BarraEnsaios.module.css";
import Slider from "./Slider";

const BarraEnsaios = (props) => {
  const changeEnsaioComprHandler = (vl) => {
    props.onSetEnsaios((ensaios) => {
      return { compr: vl, trac: ensaios.trac, cis: ensaios.cis };
    });
  };
  const changeEnsaioTracHandler = (vl) => {
    props.onSetEnsaios((ensaios) => {
      return { compr: ensaios.compr, trac: vl, cis: ensaios.cis };
    });
  };
  const changeEnsaioCisHandler = (vl) => {
    props.onSetEnsaios((ensaios) => {
      return { compr: ensaios.compr, trac: ensaios.trac, cis: vl };
    });
  };
  return (
    <div className={style.barra}>
      <Slider
        titulo="TENSÃO ÚTLIMA DE COMPRESSÃO"
        sufixo="MPa"
        min="0.00001"
        max="500"
        onChange={changeEnsaioComprHandler}
      />
      <Slider
        titulo="TENSÃO ÚTLIMA DE TRAÇÃO"
        sufixo="MPa"
        min="0.00001"
        max="500"
        onChange={changeEnsaioTracHandler}
      />
      <Slider
        titulo="TENSÃO ÚTLIMA DE CISALHAMENTO"
        sufixo="MPa"
        min="0.00001"
        max="500"
        onChange={changeEnsaioCisHandler}
      />
    </div>
  );
};

export default BarraEnsaios;
