
import './App.css';


//import Home from './components/home.js';
import Register from './components/Register.js';
//import CreateTrip from './components/CreateTrip.js';
//import CancelTrip from './components/Cancel_Trip';
//import DiscoverTrip from './components/Discover_Trip';
import Login from './components/Login.js';
import Welcome from './components/Welcome.js';
import Logout from './components/Logout';

import { Route, Switch } from 'react-router-dom'
function App() {


  return (
    <div className="App">
    
    <Switch>
        <Route exact path = "/" component = {Login} /> 
        <Route path = "/Register" component = {Register} />
        <Route path = "/welcome" component = {Welcome} />
        <Route path = "/logout" component = {Logout} />
        
        <Route component = {Error} />
      </Switch>      
    
    </div>
  );
}

export default App;
