import React, { useState } from "react";

import "./App.css";
import BarraEnsaios from "./Components/BarraEnsaios";
import Navbar from "./Components/Navbar";
import ElementoDiferencial from "./Components/ElementoDiferencial";
import CanvasEsquerdo from "./Components/CanvasEsquerdo";
import CanvasDireito from "./Components/CanvasDireito";
import DiagramaMohrCoulomb from "./Components/DiagramaMohrCoulomb";
import BarraElemento from "./Components/BarraElemento";

function App() {
  const [ensaios, setEnsaios] = useState({ compr: 250, trac: 250, cis: 250 });
  const [propriedades, setPropriedades] = useState({
    sigmax: 0,
    sigmay: 0,
    tauxy: 0,
  });

  return (
    <div className="App" on>
      <Navbar />
      <CanvasEsquerdo>
        <BarraElemento onSetPropriedades={setPropriedades} />
        <ElementoDiferencial propriedades={propriedades} />
      </CanvasEsquerdo>
      <CanvasDireito>
        <BarraEnsaios onSetEnsaios={setEnsaios} />
        <DiagramaMohrCoulomb ensaios={ensaios} />
      </CanvasDireito>
    </div>
  );
}

export default App;
