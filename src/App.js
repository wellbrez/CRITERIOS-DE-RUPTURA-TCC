import React, { useLayoutEffect, useState } from "react";

import "./App.css";
import BarraEnsaios from "./Components/BarraEnsaios";
import Navbar from "./Components/Navbar";
import ElementoDiferencial from "./Components/ElementoDiferencial";
import CanvasEsquerdo from "./Components/CanvasEsquerdo";
import CanvasDireito from "./Components/CanvasDireito";
import DiagramaMohrCoulomb from "./Components/DiagramaMohrCoulomb";
import BarraElemento from "./Components/BarraElemento";
import P5canvas from "./Components/P5canvas";



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

//Define os comandos que ficam ativos para cada modulo
const LAYOUT_ENSAIOS = 
{
  0:[true,true,true],
  1:[true,true,true],
  2:[true,true,false],
  3:[true,true,false],
  4:[false,true,false],
  5:[false,true,false],
  6:[false,true,false],
  7:[false,true,false],
}

function App() {
  const [ensaios, setEnsaios] = useState({ compr: 250, trac: 250, cis: 250 });
  const [propriedades, setPropriedades] = useState({
    sigmax: 1,
    sigmay: 1,
    tauxy: 1,
  });
  const [activeSketch,setActiveSketch] = useState(0);
  const [width, height] = useWindowSize();
  const sizescreen = Math.min(width / 100, height / 100);
  return (
    <div className="App">
      <CanvasEsquerdo>
        <ElementoDiferencial size={sizescreen} propriedades={propriedades} />
        <BarraElemento propriedades = {propriedades} onSetPropriedades={setPropriedades} />
      </CanvasEsquerdo>
      
      <CanvasDireito>
        <Navbar onSketchActivate={setActiveSketch}/>
        <P5canvas onSetEnsaios={setEnsaios} ensaios={ensaios} propriedades={propriedades} layout={LAYOUT_ENSAIOS[activeSketch]} activeSketch = {activeSketch}/>

        <BarraEnsaios ensaios = {ensaios} onSetEnsaios={setEnsaios} />
        
      </CanvasDireito>
      
    </div>
  );
}

export default App;
