import React, { useState } from "react";
import Botao from "./Botao.js"
const Guia = (props) => {
  return <li><Botao visible = {props.visible} selected = {props.selected} tagid={props.tagid} onSelect = {props.onSelect}>{props.children}</Botao></li>;
};

export default Guia;
