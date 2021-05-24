import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from "./Component/Navbar/Navbar"
import Home from './Component/Langing/Landing'
import C from './Component/Question/Subject/C'
import Admin from './Component/Admin/Admin'
import Error from './Error'


function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar />

<Switch>
  <Route path="/" exact component={Home} />
  <Route path="/question/:subject" exact component={C} />
  <Route path="/admin" exact component={Admin} />
  <Route  component={Error} />
</Switch>
</BrowserRouter>

    </div>
  );
}

export default App;


