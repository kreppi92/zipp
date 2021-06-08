import React from "react";
import { Heading } from "components";
import { Flex, Input } from "@chakra-ui/react";

const Name = ({ songDetails, setSongDetails }) => {
  return (
    <>
      <Flex minHeight={300} justifyContent="center" flexDirection="column">
        <Heading fontSize={2} mb={2}>
          What is your song's name?
        </Heading>
        <Input
          bg="white"
          placeholder="Enter song name"
          onChange={(e) =>
            setSongDetails({ ...songDetails, title: e.target.value })
          }
        />
      </Flex>
    </>
  );
};

export default Name;
