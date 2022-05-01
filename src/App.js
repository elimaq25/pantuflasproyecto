import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import Catalogo from './components/paginas/Catalogo';
import Pedidos from './components/paginas/Pedidos';
 

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
     </Router>
      
    </div>
  );
}

export default App;
