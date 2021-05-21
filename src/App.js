import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from "./Component/Navbar/Navbar"
import Home from './Component/Langing/Landing'

function App() {
  return (
    <div className="App">
<Navbar />
<BrowserRouter>
<Switch>
  <Route path="/" component={Home} />
</Switch>
</BrowserRouter>

    </div>
  );
}

export default App;


