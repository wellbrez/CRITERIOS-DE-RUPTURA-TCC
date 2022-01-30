import React, { useState } from "react";
import style from "./Slider.module.css";
const Slider = (props) => {
  function changeHandler(e) {
    e.preventDefault();
    let max = Number(props.max);
    let min = Number(props.min);
    let value = Number(e.target.value);
    if (Number.isNaN(Number(e.target.value))) {
      value = min;
    }
    if (value > max) value = max;
    if (value < min) value = min;
    props.onChange(value);
    setVal(value);
  }
  let titulo = props.titulo || "";
  let sufixo = props.sufixo || "";
  let min = Number(props.min);
  let max = Number(props.max);
  const [val, setVal] = useState((max + min) / 2);

  return (
    <div className={style.slider}>
      <label>{`${Math.round(min)}${sufixo}`}</label>
      <label>{`${Math.round(max)}${sufixo}`}</label>
      <label>{titulo}</label>
      <input value={Math.round(val * 100) / 100} onChange={changeHandler} />
      <input
        className={style.sl}
        type="range"
        min={min}
        max={max}
        step="0.001"
        value={val}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Slider;
