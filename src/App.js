import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Splash, Portal } from "./views";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import ROUTES from "./routes";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path={ROUTES.PORTAL}>
            <Portal />
          </Route>
          <Route path={ROUTES.HOME}>
            <Splash />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
};

export default App;
