import './App.css';
import Encabezamiento from './componentes/Encabezamiento';
import Pie from './componentes/Pie';
import Principal from './componentes/Principal';

function App() {
  return (
    <div className="App">
      <Encabezamiento></Encabezamiento>
      <Principal></Principal>
      <Pie></Pie>
    </div>
  );
}

export default App;
