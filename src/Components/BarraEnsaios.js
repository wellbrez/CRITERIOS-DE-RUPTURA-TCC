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
  let visivel = [true,true,true];
  let titulo = ["Tensão última de compressão (MPa)","Tensão última de tração (MPa)","Tensão última de cisalhamento (MPa)"];
  if(props.sketch==5||props.sketch==7)
  {
    visivel = [false,true,false];
    titulo = ["Tensão última de compressão (MPa)","Tensão limite de escoamento (MPa)","Tensão última de cisalhamento (MPa)"]
  }
  if(props.sketch==2||props.sketch==3)
  {
    visivel = [true,true,false];
  }
  return (
    <div className={style.barra}>
      <Slider
        titulo={titulo[0]}
        sufixo="MPa"
        min={props.minmax.compr.min}
        max={props.minmax.compr.max}
        value={props.ensaios.compr}
        visivel={visivel[0]}
        setMin={props.functminmax.compr.min}
        setMax={props.functminmax.compr.max}
        onChange={changeEnsaioComprHandler}
      />
      <Slider
        titulo={titulo[1]}
        sufixo="MPa"
        min={props.minmax.trac.min}
        max={props.minmax.trac.max}
        value={props.ensaios.trac}
        visivel={visivel[1]}
        setMin={props.functminmax.trac.min}
        setMax={props.functminmax.trac.max}
        onChange={changeEnsaioTracHandler}
      />
      <Slider
        titulo={titulo[2]}
        sufixo="MPa"
        min={props.minmax.cis.min}
        max={props.minmax.cis.max}
        value={props.ensaios.cis}
        visivel={visivel[2]}
        setMin={props.functminmax.cis.min}
        setMax={props.functminmax.cis.max}
        onChange={changeEnsaioCisHandler}
      />
    </div>
  );
};

export default BarraEnsaios;
