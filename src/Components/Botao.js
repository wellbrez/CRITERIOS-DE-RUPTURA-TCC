import React, { useState } from "react";
import style from "./Botao.module.css"
const Botao= (props) => {
  function selectHandler()
  {
    props.onSelect(props.tagid);
  }
  
  let cn = style.btn;
  if (props.selected) cn+=" "+style.btnc;
  return <button onClick = {selectHandler} className={cn}>{props.children}</button>;
};

export default Botao;
