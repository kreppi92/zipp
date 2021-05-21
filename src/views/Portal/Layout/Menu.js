import React from "react";
import { UserProfile } from "components";
import { Link } from "react-router-dom";
import { Box, Stack, Text, Divider, Icon, HStack } from "@chakra-ui/react";
import { MotionBox } from "./motion";

const MENU_ITEM_HEIGHT = 48 + 8;

const Menu = ({ menus, selected, setSelected }) => {
  const index = menus.findIndex(
    (menuItem) => menuItem.label === selected.label
  );

  return (
    <>
      <Box lineHeight="1rem" color="white" my="2">
        <Text
          px="3"
          fontSize="xs"
          fontWeight="semibold"
          textTransform="uppercase"
          letterSpacing="widest"
          color="gray.500"
          mb="3"
        >
          Your profile
        </Text>
        <UserProfile name="DJ Khaled" email="djkhaled@gmail.com" />

        <Divider borderColor="whiteAlpha.400" my={4} />

        <Text
          px="3"
          fontSize="xs"
          fontWeight="semibold"
          textTransform="uppercase"
          letterSpacing="widest"
          color="gray.500"
          mb="3"
        >
          Navigation
        </Text>
      </Box>
      <Box position="relative">
        {menus.length > 0 && (
          <MotionBox
            height="12"
            width="full"
            rounded="lg"
            position="absolute"
            initial={{
              y: index * MENU_ITEM_HEIGHT,
              backgroundColor: selected.bg,
            }}
            animate={{
              y: index * MENU_ITEM_HEIGHT,
              backgroundColor: selected.bg,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          />
        )}
        <Stack
          color="whiteAlpha.600"
          direction="column"
          spacing={2}
          position="relative"
        >
          {menus.map((menuItem) => {
            const { label, icon, route } = menuItem;
            return (
              <Box
                key={label}
                padding={4}
                borderRadius="lg"
                color={label === selected[0] ? "white" : "whiteAlpha.600"}
                lineHeight="1rem"
                transitionProperty="background-color"
                transitionDuration="180ms"
                _hover={
                  menuItem !== selected[0] && {
                    bg: "whiteAlpha.400",
                  }
                }
                cursor="pointer"
                onClick={() => {
                  setSelected(menuItem);
                }}
                as={Link}
                to={`/portal${route}`}
              >
                <HStack alignItems="center" userSelect="none">
                  <Icon as={icon} icon="minus" />
                  <Text>{label}</Text>
                </HStack>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </>
  );
};

export default Menu;
