import React, {Component,useState,createRef} from 'react';
import {ReactP5Wrapper} from 'react-p5-wrapper';
import AsNormal from "../Sketches/AsNormal";
import CmNormal from "../Sketches/CmNormal";
import CmMohr from "../Sketches/CmMohr";
import AsMohr from "../Sketches/AsMohr";

import AsCisalhamento from "../Sketches/AsCisalhamento";

import AsEnergia from "../Sketches/AsEnergia";
import style from "./P5canvas.module.css"


const P5canvas = ( props ) => {
  let sketches = [CmMohr,AsMohr,CmNormal,AsNormal,1,AsCisalhamento,1,AsEnergia];
  let activeSketch = props.activeSketch;
  return (<div className={style.P5canvas} ><ReactP5Wrapper onSetEnsaios = {props.onSetEnsaios} layout = {props.layout} ensaios = {props.ensaios} propriedades={props.propriedades} sketch={sketches[activeSketch]}></ReactP5Wrapper>
  </div>)
}

export default P5canvas;