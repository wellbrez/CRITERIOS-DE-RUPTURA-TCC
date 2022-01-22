import React, { useState } from "react";
import style from "./CanvasEsquerdo.module.css";
const CanvasEsquerdo = (props) => {
  return <div className={style.canvas}>{props.children}</div>;
};

export default CanvasEsquerdo;
