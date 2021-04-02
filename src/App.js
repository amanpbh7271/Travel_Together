
import './App.css';


import Home from './components/home.js';
import Register from './components/register.js';
import Create_trip from './components/Create_Trip.js';

function App() {
  return (
    <div className="App">
      <Home/>
   
      <Create_trip/>
    </div>
  );
}

export default App;
