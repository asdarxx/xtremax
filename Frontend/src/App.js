import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Map from './Components/Map/Map';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Dashboard/>
      <Menu/>
      <Map/>
    </div>
  );
}

export default App;
