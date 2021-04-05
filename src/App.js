
import './App.css';


import Home from './components/home.js';
//import Register from './components/register.js';
//import CreateTrip from './components/CreateTrip.js';
//import CancelTrip from './components/Cancel_Trip';
import DiscoverTrip from './components/Discover_Trip';

function App() {
  return (
    <div className="App">
      <Home/>
      
      <DiscoverTrip/>
    </div>
  );
}

export default App;
