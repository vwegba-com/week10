
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import { Switch,Route,Link} from "react-router-dom";

function App() {
  return (  
    <div className="App">
      <nav className="navig">
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
      <h1>FRONTEND DEVELOPMENT</h1>
      <Switch>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>

      </Switch>
        
    </div>
  );
}

export default App;
