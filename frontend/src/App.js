import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Scrible</h1>
     <Link to="/signup"><button>signup</button></Link>
     <Link to="/login"><button>login</button></Link>
     <Link to="/logout"><button>logout</button></Link>
     <Outlet/>
    </div>
  );
}

export default App;
