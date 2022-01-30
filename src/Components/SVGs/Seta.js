import React, { useState } from "react";
import style from "./Seta.module.css";

const Seta = (props) => {
  let valor = props.valor * 300 || 0.00001;
  let cis = props.cis;
  let direcao = props.direcao;

  let [svgwidth, svgheight] = [100, 100];
  if (!cis) {
    if (direcao == "cima" || direcao == "baixo") svgheight = Math.abs(valor);
    if (direcao == "esquerda" || direcao == "direita")
      svgwidth = Math.abs(valor);
  } else {
    if (direcao == "esquerda" || direcao == "direita")
      svgheight = Math.abs(valor);
    if (direcao == "cima" || direcao == "baixo") svgwidth = Math.abs(valor);
  }

  if (cis) {
    if (direcao == "cima" && valor < 0) direcao = 9; //
    if (direcao == "cima" && valor > 0) direcao = 12; //
    if (direcao == "baixo" && valor < 0) direcao = 12; //
    if (direcao == "baixo" && valor > 0) direcao = 9; //
    if (direcao == "esquerda" && valor < 0) direcao = 10; //
    if (direcao == "esquerda" && valor > 0) direcao = 11; //
    if (direcao == "direita" && valor < 0) direcao = 11; //
    if (direcao == "direita" && valor > 0) direcao = 10; //
  }

  if (direcao == "cima" && valor < 0) direcao = 4; //ok
  if (direcao == "cima" && valor > 0) direcao = 8; //ok
  if (direcao == "baixo" && valor < 0) direcao = 2; //ok
  if (direcao == "baixo" && valor > 0) direcao = 6; //ok
  if (direcao == "esquerda" && valor < 0) direcao = 3; //ok
  if (direcao == "esquerda" && valor > 0) direcao = 7; //ok
  if (direcao == "direita" && valor < 0) direcao = 1; //ok
  if (direcao == "direita" && valor > 0) direcao = 5; //ok

  valor = Math.abs(valor);

  let ponta = {
    1: `M ${valor / 2} 50 c 0 0 50 25, 50 25, -8 0, -8 -50, 0 -50 z`, // OK
    2: `M 50 ${valor / 2} c 0 0 25 50, 25 50, 0 -8, -50 -8, -50 0 z`, // OK
    3: `M ${valor / 2} 50 c 0 0 -50 25, -50 25, 8 0, 8 -50, 0 -50 z`, // OK
    4: `M 50 ${valor / 2} c 0 0 25 -50, 25 -50, 0 8, -50 8, -50 0 z`, // OK
    5: `M ${valor} 50 c 0 0 -50 -25, -50 -25, 8 0, 8 50, 0 50 z`, //OK
    6: `M 50 ${valor} c 0 0 -25 -50, -25 -50, 0 8, 50 8, 50 0 z`, //OK
    7: `M 0 50 c 0 0 50 -25, 50 -25, -8 0, -8 50, 0 50 z`, //OK
    8: `M 50 0 c 0 0 -25 50, -25 50, 0 -8, 50 -8, 50 0 z`, //OK
    9: `M ${valor / 4} 50 c 0 0 50 25, 50 25, -8 0, -8 -50, 0 -50 z`, //OK
    10: `M 50 ${valor / 4} c 0 0 25 50, 25 50, 0 -8, -50 -8, -50 0 z `, //OK
    11: `M 50 ${(valor * 3) / 4} c 0 0 25 -50, 25 -50, 0 8, -50 8, -50 0 z`, //OK
    12: `M ${(valor * 3) / 4} 50 c 0 0 -50 25, -50 25, 8 0, 8 -50, 0 -50 z`, //OK
  };

  let linha = {
    1: `M ${valor / 2 + 25} 50 c 0 0 ${valor / 2 - 30} 0, ${
      valor / 2 - 30
    } 0 z`, //
    2: `M 50 ${valor / 2 + 25} c 0 0 0 ${valor / 2 - 30}, 0 ${
      valor / 2 - 30
    } z`, //
    3: `M ${valor / 2 - 25} 50 c 0 0 ${-(valor / 2 - 30)} 0, ${-(
      valor / 2 -
      30
    )} 0 z`, //
    4: `M 50 ${valor / 2 - 25} c 0 0 0 ${-(valor / 2 - 30)}, 0 ${-(
      valor / 2 -
      30
    )} z`, //
    5: `M ${valor - 25} 50 c 0 0 ${-(valor / 2 - 25)} 0, ${-(
      valor / 2 -
      25
    )} 0 z`, //OK
    6: `M 50 ${valor - 25} c 0 0 0 ${-(valor / 2 - 25)}, 0 ${-(
      valor / 2 -
      25
    )} z`, //OK
    7: `M 25 50 c 0 0 ${valor / 2 - 25} 0, ${valor / 2 - 25} 0 z`, //OK
    8: `M 50 25 c 0 0 0 ${valor / 2 - 25}, 0 ${valor / 2 - 25} z`, //OK
    9: `M ${(valor * 3) / 4} 50 c 0 0 ${-(valor / 2 - 25)} 0, ${-(
      valor / 2 -
      25
    )} 0 z`, //OK
    10: `M 50 ${(valor * 3) / 4} c 0 0 0 ${-(valor / 2 - 25)}, 0 ${-(
      valor / 2 -
      25
    )} z`, //OK
    11: `M 50 ${valor / 4} c 0 0 0 ${valor / 2 - 25}, 0 ${valor / 2 - 25} z`, //OK
    12: `M ${valor / 4} 50 c 0 0 ${valor / 2 - 25} 0, ${valor / 2 - 25} 0 z`, //OK
  };

  let x = props.x || "0px";
  let y = props.y || "0px";

  return (
    <svg
      height={svgheight}
      width={svgwidth}
      style={{
        transform: `translateX(${x}) translateY(${y}) scale(${valor / 300})`,
      }}
    >
      <path fill="black" d={ponta[direcao]} />
      <path
        stroke="black"
        strokeWidth="9"
        strokeLinejoin="round"
        d={linha[direcao]}
      />
    </svg>
  );
};

export default Seta;
