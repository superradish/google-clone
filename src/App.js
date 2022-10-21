
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Search from './Search'

function App() {
  return (
    <div className="app">
      <Router>
           <Routes>
        <Route path={'/'} exact element={<Home />} />
        <Route
          path={'/'}
          exact element={<Search />}
        />
        
      </Routes>
      </Router> 
    </div>
  );
}

export default App;