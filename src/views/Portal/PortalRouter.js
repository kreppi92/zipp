import React from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

import { Flex } from "@chakra-ui/react";
import { Login } from "./Login";
import { Balances } from "./Balances";
import { Drop } from "./Drop";
import { CurrentDrops } from "./CurrentDrops";
import { DropDetails } from "./DropDetails";
import { Layout } from "./Layout";
import ROUTES from "./routes";

const PortalRouter = () => {
  const { path } = useRouteMatch();
  console.log(`${path}${ROUTES.DROP_DETAILS}`);
  return (
    <Flex
      flexGrow={1}
      bg="offblack"
      minHeight="100%"
      pb={3}
      flexDirection="column"
    >
      <Switch>
        <Route path={`${path}${ROUTES.LOGIN}`} exact>
          <Login />
        </Route>
        <Layout>
          <Switch>
            <Route path={`${path}${ROUTES.BALANCES}`} exact>
              <Balances />
            </Route>
            <Route path={`${path}${ROUTES.NEW_DROP}`} exact>
              <Drop />
            </Route>
            <Route path={`${path}${ROUTES.CURRENT_DROPS}`} exact>
              <CurrentDrops />
            </Route>
            <Route path={`${path}${ROUTES.DROP_DETAILS}`}>
              <DropDetails />
            </Route>
          </Switch>
        </Layout>
        <Redirect to={`${path}${ROUTES.LOGIN}`} />
      </Switch>
    </Flex>
  );
};

export default PortalRouter;
