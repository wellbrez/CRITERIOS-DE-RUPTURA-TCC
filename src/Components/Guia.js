import React, { useState } from "react";
import Botao from "./Botao.js"
const Guia = (props) => {
  return <li><Botao selected = {props.selected} tagid={props.tagid} onSelect = {props.onSelect}>{props.children}</Botao></li>;
};

export default Guia;
