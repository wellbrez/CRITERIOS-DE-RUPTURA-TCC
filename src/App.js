import logo from "./logo.svg";
import "./App.css";
import Ensaios from "./Components/Ensaios";
import Navbar from "./Components/Navbar";
import ElementoDiferencial from "./Components/ElementoDiferencial";
import CanvasEsquerdo from "./Components/CanvasEsquerdo";

let propriedades = { sigmax: 50, sigmay: -50, tauxy: 50 };

function App() {
  return (
    <div className="App">
      <Navbar />
      <Ensaios />
      <CanvasEsquerdo>
        <ElementoDiferencial propriedades={propriedades} />
      </CanvasEsquerdo>
    </div>
  );
}

export default App;
