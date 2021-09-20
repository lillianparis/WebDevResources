import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Stlye
import "./App.css";

//Pages
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Resources from "./Pages/Resources";
import Notes from "./Pages/Notes";
import goodreads from "./Pages/goodreads"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/resources" component={Resources} />
      <Route exact path="/notes" component={Notes} />
      <Route exact path="/goodreads" component={goodreads} />
    </Router>
  );
}

export default App;
