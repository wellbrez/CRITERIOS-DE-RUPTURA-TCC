import React from "react";
import Guia from "./Guia";
import Seletor from "./Seletor";
import style from "./Navbar.module.css";
const Navbar = (props) => {
  return (
    <nav className={style.nav}>
      <Seletor>
        <Guia>Mohr-Coulomb</Guia>
        <Guia>Máxima tensão de cisalhamento</Guia>
        <Guia>Máxima tensão normal</Guia>
        <Guia>Máxima energia de distorção</Guia>
      </Seletor>
    </nav>
  );
};
export default Navbar;
