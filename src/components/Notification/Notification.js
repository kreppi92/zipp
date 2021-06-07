import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { NotificationStructure } from "./NotificationStructure";
import { NotificationButton } from "./NotificationButton";
import { GiPartyPopper } from "react-icons/gi";

export const Notification = ({ title, description, icon }) => (
  <Box
    as="section"
    pt="8"
    pb="20"
    px={{ base: "4", md: "8" }}
    bg={useColorModeValue("gray.50", "inherit")}
  >
    <Flex direction="row-reverse">
      <NotificationStructure
        icon={icon}
        primaryAction={
          <NotificationButton colorScheme="blue">View</NotificationButton>
        }
        secondaryAction={<NotificationButton>Close</NotificationButton>}
      >
        <Stack spacing="1">
          <Heading as="h3" fontSize="md">
            {title}
          </Heading>
          <Text fontSize="sm">{description}</Text>
        </Stack>
      </NotificationStructure>
    </Flex>
  </Box>
);

Notification.defaultProps = {
  icon: GiPartyPopper,
  title: "Notification",
  description: "Something was triggered!",
};
