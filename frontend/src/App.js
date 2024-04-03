import { Outlet, Link } from 'react-router-dom';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <h1>The App</h1>
     <Outlet/>
    </div>
  );
}

export default App;
