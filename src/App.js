
import './App.css';
import Navigation from './Components/Navigation';

import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app" align="center">
        <Navigation></Navigation>
      </div>
    </Router>
  );
}

export default App;
