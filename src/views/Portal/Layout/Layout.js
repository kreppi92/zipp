import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Text, NavMenu } from "components";
import { Flex, Box, HStack } from "@chakra-ui/react";
import Menu from "./Menu";
import ZippAnimation from "components/assets/ZippAnimation";
import { MotionFlex } from "./motion";
import ROUTES from "../routes";
import {
  BsFillGrid1X2Fill,
  BsFillLayersFill,
  BsFillPlusSquareFill,
} from "react-icons/bs";

const MAXWIDTH = 1024;

const Layout = ({ children, withMenu }) => {
  const menus = [
    {
      label: "Balances",
      route: ROUTES.BALANCES,
      bg: "#F6AD55",
      icon: BsFillGrid1X2Fill,
    },
    {
      label: "New Drop",
      route: ROUTES.NEW_DROP,
      bg: "#68D391",
      icon: BsFillPlusSquareFill,
    },
    {
      label: "Current Drops",
      route: ROUTES.CURRENT_DROPS,
      bg: "#63B3ED",
      icon: BsFillLayersFill,
    },
  ];

  const [selected, setSelected] = useState(menus[0]);

  return (
    <>
      <Flex justifyContent="center">
        <HStack width={MAXWIDTH} py={1}>
          <HStack mr={14} alignItems="center">
            <ZippAnimation width={50} height={50} light />
            <Text fontFamily="Space mono" fontSize={5} color="white" pb={1}>
              zipp
            </Text>
          </HStack>

          <NavMenu.Desktop />
        </HStack>
      </Flex>
      <Flex
        flexGrow={1}
        alignItems="center"
        position="relative"
        direction="column"
      >
        <Flex
          width="100%"
          direction="column"
          backgroundImage="url(https://static.billboard.com/files/media/dj-khaled-bb14-2017-feat-fskg-billboard-1548-compressed.jpg)"
          backgroundPosition="center"
          position="relative"
          minHeight={350}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            zIndex={1000}
            flexGrow={1}
            width="100%"
            height="100%"
            direction="column"
          >
            {/* <Heading color="white">Welcome to your dashboard,</Heading>
            <Heading color="white">DJ Khaled</Heading> */}
          </Flex>
          {/* Overlays */}
          <Flex
            position="absolute"
            width="100%"
            height="100%"
            backgroundImage="radial-gradient(ellipse at top right,
              rgba(63, 211, 184, 0) 30%, rgba(63, 211, 184, 1) 100%)"
          />
          <Flex
            width="100%"
            height="100%"
            position="absolute"
            backgroundImage="radial-gradient(ellipse at bottom left,
                rgba(215, 152, 255, 0) 30%, rgba(215, 152, 255, 1) 100%)"
          />
          <Flex
            position="absolute"
            width="100%"
            height="100%"
            bg="offblack"
            opacity={0.3}
          />
          {/* End Overlays */}
        </Flex>
        <Flex
          flexDirection="row"
          minWidth={MAXWIDTH}
          minHeight={800}
          mt={-20}
          zIndex={1000}
        >
          {withMenu && (
            <Flex minWidth="250px" direction="column" bg="white">
              <MotionFlex
                width="254px"
                bg="#17181C"
                height="100%"
                p="4"
                flexDirection="column"
                overflow="hidden"
                animate="254px"
              >
                <Menu
                  setSelected={setSelected}
                  selected={selected}
                  menus={menus}
                />
              </MotionFlex>
            </Flex>
          )}
          <Flex p={8} m={0} flexGrow={1} bg="offwhite" direction="column">
            {children}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

Layout.defaultProps = {
  withMenu: true,
};

export default Layout;
