import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './componentes/compartidos/Layout';
import NoEnContrado from "./componentes/compartidos/NoEncontrado";
import Lista from './componentes/lista/Lista'
import Detalles from './componentes/nueva/Detalles'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<Lista />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/nueva" element={<Detalles />} />
      </Route>
      <Route path="*" element={<NoEnContrado />} />
    </Routes>
  );
}

export default App;
