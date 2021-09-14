import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Stlye
import "./App.css";

//Pages
import Landing from "./Pages/Landing";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/about" component={About}/>
    </Router>
  );
}

export default App;
