import React, { useState } from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

import { Flex } from "@chakra-ui/react";
import { Login } from "./Login";
import { Balances } from "./Balances";
import { Drop } from "./Drop";
import { CurrentDrops } from "./CurrentDrops";
import { DropDetails } from "./DropDetails";
import { Layout } from "./Layout";
import { Explore } from "./Explore";
import ROUTES from "./routes";

import dropsQuery from "./response.json";

const PortalRouter = () => {
  const { path } = useRouteMatch();

  const [yourNftDrops, setYourNftDrops] = useState(dropsQuery);

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
        <Route path={`${path}${ROUTES.BALANCES}`} exact>
          <Layout>
            <Balances
              yourNftDrops={yourNftDrops}
              setYourNftDrops={setYourNftDrops}
            />
          </Layout>
        </Route>
        <Route path={`${path}${ROUTES.NEW_DROP}`} exact>
          <Layout>
            <Drop
              yourNftDrops={yourNftDrops}
              setYourNftDrops={setYourNftDrops}
            />
          </Layout>
        </Route>
        <Route path={`${path}${ROUTES.CURRENT_DROPS}`} exact>
          <Layout>
            <CurrentDrops />
          </Layout>
        </Route>
        <Route path={`${path}${ROUTES.DROP_DETAILS}`}>
          <Layout>
            <DropDetails />
          </Layout>
        </Route>
        <Layout withMenu={false}>
          <Route path={`${path}${ROUTES.EXPLORE}`}>
            <Explore />
          </Route>
        </Layout>
        <Redirect to={`${path}${ROUTES.LOGIN}`} />
      </Switch>
    </Flex>
  );
};

export default PortalRouter;
