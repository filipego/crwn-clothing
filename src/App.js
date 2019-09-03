import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Hats" component={HatsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
