import React, { useLayoutEffect, useState } from "react";

import "./App.css";
import BarraEnsaios from "./Components/BarraEnsaios";
import Navbar from "./Components/Navbar";
import ElementoDiferencial from "./Components/ElementoDiferencial";
import CanvasEsquerdo from "./Components/CanvasEsquerdo";
import CanvasDireito from "./Components/CanvasDireito";
import DiagramaMohrCoulomb from "./Components/DiagramaMohrCoulomb";
import BarraElemento from "./Components/BarraElemento";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function App() {
  const [ensaios, setEnsaios] = useState({ compr: 250, trac: 250, cis: 250 });
  const [propriedades, setPropriedades] = useState({
    sigmax: 0,
    sigmay: 0,
    tauxy: 0,
  });
  const [width, height] = useWindowSize();
  const sizescreen = Math.min(width / 100, height / 100);
  return (
    <div className="App">
      <Navbar />
      <CanvasEsquerdo>
        <ElementoDiferencial size={sizescreen} propriedades={propriedades} />
      </CanvasEsquerdo>
      <BarraEnsaios onSetEnsaios={setEnsaios} />
      <CanvasDireito>
        <DiagramaMohrCoulomb ensaios={ensaios} />
      </CanvasDireito>
      <BarraElemento onSetPropriedades={setPropriedades} />
    </div>
  );
}

export default App;
