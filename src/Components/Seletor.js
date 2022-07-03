import React, { useState } from "react";

const Seletor = (props) => {
  return <ul className={props.className}>{props.children}</ul>;
};
export default Seletor;
