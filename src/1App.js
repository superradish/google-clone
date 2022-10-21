import React from 'react';
import { render } from "react-dom";
import Home from "./Home";
import Search from "./search"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {


    return (
        
<div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/search" element={<Search/>}>
          </Route>
        </Routes>
      </Router>
    </div>
    
    );
    }

export default App;
