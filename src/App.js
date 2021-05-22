import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from "./Component/Navbar/Navbar"
import Home from './Component/Langing/Landing'
import C from './Component/Question/Subject/C'

function App() {
  return (
    <div className="App">
<Navbar />
<BrowserRouter>
<Switch>
  <Route path="/" exact component={Home} />
  <Route path="/c" exact component={C} />

</Switch>
</BrowserRouter>

    </div>
  );
}

export default App;


