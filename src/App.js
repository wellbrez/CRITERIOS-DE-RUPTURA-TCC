import React, { useLayoutEffect, useState } from "react";

import "./App.css";
import BarraEnsaios from "./Components/BarraEnsaios";
import Navbar from "./Components/Navbar";
import ElementoDiferencial from "./Components/ElementoDiferencial";
import CanvasEsquerdo from "./Components/CanvasEsquerdo";
import CanvasDireito from "./Components/CanvasDireito";
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
  const [minsigmax,setminsigmax] = useState(-500);
  const [minsigmay,setminsigmay] = useState(-500);
  const [mintauxy,setmintauxy] = useState(-500);
  const [mintrac,setmintrac] = useState(0.001);
  const [mincompr,setmincompr] = useState(0.001);
  const [mincis,setmincis] = useState(0.001);
  const [maxsigmax,setmaxsigmax] = useState(500);
  const [maxsigmay,setmaxsigmay] = useState(500);
  const [maxtauxy,setmaxtauxy] = useState(500);
  const [maxtrac,setmaxtrac] = useState(500);
  const [maxcompr,setmaxcompr] = useState(500);
  const [maxcis,setmaxcis] = useState(500);
  let functminmax = 
  {
    sigmax:{min:setminsigmax,max:setmaxsigmax},
    sigmay:{min:setminsigmay,max:setmaxsigmay},
    tauxy:{min:setmintauxy,max:setmaxtauxy},
    compr:{min:setmincompr,max:setmaxcompr},
    trac:{min:setmintrac,max:setmaxtrac},
    cis:{min:setmincis,max:setmaxcis},
  }
  let minmax = 
  {
    sigmax:{min:minsigmax,max:maxsigmax},
    sigmay:{min:minsigmay,max:maxsigmay},
    tauxy:{min:mintauxy,max:maxtauxy},
    compr:{min:mincompr,max:maxcompr},
    trac:{min:mintrac,max:maxtrac},
    cis:{min:mincis,max:maxcis},
  }
  const [ensaios, setEnsaios] = useState({ compr: 50, trac: 20, cis: 16 });
  const [propriedades, setPropriedades] = useState({
    sigmax: -15,
    sigmay: 15,
    tauxy: 0,
  });
  const [activeSketch,setActiveSketch] = useState(0);
  const [width, height] = useWindowSize();
  const sizescreen = Math.min(width / 100, height / 100);
  if(activeSketch==0||activeSketch==1)
  {
    if(maxtrac!=ensaios.compr)
    {setmaxtrac(ensaios.compr)}
    if(mincis!=ensaios.compr/(ensaios.compr/ensaios.trac+1))
    {setmincis(ensaios.compr/(ensaios.compr/ensaios.trac+1))}
    if(maxcis!=ensaios.trac)
    {setmaxcis(ensaios.trac)}
  }
  else if(activeSketch==2 ||activeSketch==3)
  {
    if(maxtrac!=ensaios.compr)
    {
      setmaxtrac(ensaios.compr);
    }
  }
  return (
    <div className="App">
      <CanvasEsquerdo>
        <ElementoDiferencial size={sizescreen} propriedades={propriedades} />
        <BarraElemento minmax={minmax} functminmax={functminmax} propriedades = {propriedades} onSetPropriedades={setPropriedades} />
      </CanvasEsquerdo>
      
      <CanvasDireito>
        <Navbar onSketchActivate={setActiveSketch}/>
        <P5canvas onSetEnsaios={setEnsaios} ensaios={ensaios} propriedades={propriedades} layout={LAYOUT_ENSAIOS[activeSketch]} activeSketch = {activeSketch}/>

        <BarraEnsaios minmax={minmax} functminmax={functminmax} sketch={activeSketch} ensaios = {ensaios} onSetEnsaios={setEnsaios} />
        
      </CanvasDireito>
      
    </div>
  );
}

export default App;
