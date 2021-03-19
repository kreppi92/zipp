import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SplashView } from "./views";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/">
            <SplashView />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
