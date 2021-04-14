
import './App.css';


//import Home from './components/home.js';
import Register from './components/Register.js';
//import CreateTrip from './components/CreateTrip.js';
//import CancelTrip from './components/Cancel_Trip';
//import DiscoverTrip from './components/Discover_Trip';
import Login from './components/Login.js';
import Welcome from './components/Welcome.js';

import { Route, Switch } from 'react-router-dom'
function App() {


  return (
    <div className="App">
    
    <Switch>
        <Route exact path = "/" component = {Login} /> 
        <Route path = "/register" component = {Register} />
        <Route path = "/welcome" component = {Welcome} />
        <Route component = {Error} />
      </Switch>      
    
    </div>
  );
}

export default App;
