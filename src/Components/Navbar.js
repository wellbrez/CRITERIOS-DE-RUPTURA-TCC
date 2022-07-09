import React, {useState} from "react";
import Guia from "./Guia";
import Seletor from "./Seletor";
import style from "./Navbar.module.css";
const Navbar = (props) => {
  let [selectedBtn,setSelectedBtn] = useState("0");
  let [selectedMode,setSelectedMode] = useState("0");
  function selectMode(num)
  {
    setSelectedMode(num);
    props.onSketchActivate(Number(selectedBtn)*2+Number(num));
  }
  function selectBtn(num)
  {
    let mode = Number(selectedMode);
    if(num==="2"||num==="3") 
    {
      setSelectedMode("1");
      mode = 1;
    }
    setSelectedBtn(num);
    props.onSketchActivate(Number(num)*2+mode);
  }
  
  return (
    <nav className={style.nav}>
      <Seletor className={style.horizontal}>
        <Guia selected={selectedBtn==="0"} tagid="0" onSelect ={selectBtn}>MOHR-COULOMB</Guia>
        <Guia selected={selectedBtn==="1"} tagid="1" onSelect ={selectBtn}>MÁXIMA TENSÃO NORMAL</Guia>
        <Guia selected={selectedBtn==="2"} tagid="2" onSelect ={selectBtn}>MÁXIMA TENSÃO DE CISALHAMENTO</Guia>
        <Guia selected={selectedBtn==="3"} tagid="3" onSelect ={selectBtn}>MÁXIMA ENERGIA DE DISTORÇÃO</Guia>
      </Seletor>
      <Seletor className={style.vertical}>
        <Guia selected={selectedMode==="0"} visible ={selectedBtn==="0"||selectedBtn==="1"}tagid="0" onSelect ={selectMode}>Círculo de Mohr</Guia>
        <Guia selected={selectedMode==="1"} tagid="1" onSelect ={selectMode}>Área segura</Guia>
      </Seletor>
    </nav>
  );
};
export default Navbar;
