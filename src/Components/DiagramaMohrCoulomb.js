import React, { useState } from "react";
import style from "./DiagramaMohrCoulomb.module.css";

const DiagramaMohrCoulomb = (props) => {
  let [BezierCurve, setBezier] = useState(``);

  let size = 300;
  let compr = props.ensaios.compr;
  let trac = props.ensaios.trac;
  let [min, max] = [compr, trac];

  let scale = size / (min + max);
  [min, max] = [scale * min, scale * max];

  //let min = props.propriedades.min;
  //let max = props.propriedades.max;
  let coords = [
    { x: 0, y: -min },
    { x: +min, y: -max },
    { x: max, y: 0 },
    { x: 0, y: max },
    { x: -max, y: min },
    { x: -min, y: 0 },
  ];
  let bezier = coords.map(
    (val) => `c 0 0, ${val.x} ${val.y}, ${val.x} ${val.y} `
  );
  bezier[0] = `M ${0 + (size + 40 - max - min) / 2} ${
    size - (size - 40 - max - min) / 2
  } ${bezier[0]} `;
  bezier = bezier.join("");
  return (
    <svg className={style.white} width={size + 40} height={size + 40}>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#606c88", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#3f4c6b", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path stroke="black" fill="url(#grad1)" stroke-height="5px" d={bezier} />
      <path stroke="black" d={`M ${0} ${max + 20} l ${max + min + 40} ${0}`} />
      <path stroke="black" d={`M ${min + 20} ${0} l ${0} ${max + min + 40}`} />
      <text x={min + 25} y={size + 35}>
        {`${-compr}MPa`}
      </text>
      <text x="0" y={max + 35}>
        {`${-compr}MPa`}
      </text>
      <text x={min + 25} y={max + 15}>
        {`0`}
      </text>
      <text x={size - 35} y={15}>
        {`${trac}MPa`}
      </text>
    </svg>
  );
};

export default DiagramaMohrCoulomb;
