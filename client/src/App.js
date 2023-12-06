import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Landing from './Views/Landing/Landing';
import Details from './Views/Details/Details';
import Home from './Views/Home/Home';
import Create from './Views/Create/Create';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <div>
        <Switch>
        <Route exact path={"/landing"} component={Landing}></Route>
        <Route path={"/"} component={Navbar}></Route>
      </Switch>
      </div>
      <div>
        <Switch>
          <Route path={"/details/:id"} component={Details}></Route>
          <Route path={"/home"} component={Home}></Route>
          <Route path={"/create"} component={Create}></Route>
      </Switch>
      </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
