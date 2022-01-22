import React, { useState } from "react";
import style from "./ElementoDiferencial.module.css";
const ElementoDiferencial = (props) => {
  const [rotacao, setRotacao] = useState(0);
  const [ativo, setAtivo] = useState(false);
  const [centro, setCentro] = useState([0, 0]);
  const mouseDownHandler = (e) => {
    e.preventDefault();
    setAtivo(true);
    setCentro([
      e.target.parentElement.parentElement.clientWidth / 2,
      e.target.parentElement.parentElement.clientHeight / 2,
    ]);
    let [xini, yini] = [e.pageX - centro[0], e.pageY - centro[1]];
    if (e.touches) {
      [xini, yini] = [e.touches[0].pageX, e.touches[0].pageY];
    }
  };

  const mouseUpHandler = (e) => {
    e.preventDefault();
    setAtivo(false);
  };

  const mouseMoveHandler = (e) => {
    e.preventDefault();
    if (ativo) {
      let [xini, yini] = [e.pageX - centro[0], e.pageY - centro[1]];
      if (e.touches) {
        [xini, yini] = [
          e.touches[0].pageX - centro[0],
          e.touches[0].pageY - centro[1],
        ];
      }

      if (-yini > 0) {
        setRotacao(Math.atan(xini / -yini) + (3 * Math.PI) / 2);
      } else if (-yini < 0) {
        setRotacao(Math.atan(xini / -yini) + Math.PI / 2);
      }
    }
  };

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
  document.documentElement.style.setProperty("--sigmax", propriedades.sigmax);
  document.documentElement.style.setProperty("--sigmay", propriedades.sigmay);
  document.documentElement.style.setProperty("--tauxy", propriedades.tauxy);
  document.documentElement.style.setProperty(
    "--rotacao",
    `${((rotacao * 180) / Math.PI).toFixed(2)}deg`
  );
  return (
    <div
      className={style.elemento}
      onMouseMove={mouseMoveHandler}
      onMouseUp={mouseUpHandler}
      onTouchMove={mouseMoveHandler}
      onTouchEnd={mouseUpHandler}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div
        className={style.controller}
        onMouseDown={mouseDownHandler}
        onTouchStart={mouseDownHandler}
      ></div>
      <div className={style.quadrado}></div>
    </div>
  );
};
export default ElementoDiferencial;
