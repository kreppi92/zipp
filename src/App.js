import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SplashView } from "./views";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <SplashView />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
