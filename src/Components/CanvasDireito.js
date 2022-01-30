import React, { useState } from "react";
import style from "./CanvasDireito.module.css";
const CanvasDireito = (props) => {
  return <div className={style.canvas}>{props.children}</div>;
};

export default CanvasDireito;
