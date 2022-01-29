import logo from "./logo.svg";
import "./App.css";
import Ensaios from "./Components/Ensaios";
import Navbar from "./Components/Navbar";
import ElementoDiferencial from "./Components/ElementoDiferencial";
import CanvasEsquerdo from "./Components/CanvasEsquerdo";
import DiagramaMohrCoulomb from "./Components/DiagramaMohrCoulomb";

let propriedades = { sigmax: 500, sigmay: -50, tauxy: 500 };
let ensaios = { compr: 100, trac: 100 };

function App() {
  return (
    <div className="App" on>
      <Navbar />
      <Ensaios />
      <CanvasEsquerdo>
        <ElementoDiferencial propriedades={propriedades} />
      </CanvasEsquerdo>
      <DiagramaMohrCoulomb ensaios={ensaios} />
    </div>
  );
}

export default App;
