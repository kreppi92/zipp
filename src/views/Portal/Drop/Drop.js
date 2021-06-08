import React, { useState } from "react";

import { Heading, Step } from "components";

import { Box, Button, Flex, HStack } from "@chakra-ui/react";

import Name from "./Name";
import Upload from "./Upload";
import CoverArt from "./CoverArt";
import Bidding from "./Bidding";
import Review from "./Review";

const contents = [Name, Upload, CoverArt, Bidding, Review];

const Drop = ({ yourNftDrops, setYourNftDrops }) => {
  const [current, setCurrent] = useState(0);
  const [songDetails, setSongDetails] = useState({
    title: "",
    artistUsername: "DJ Khaled",
    image:
      "https://yt3.ggpht.com/qKy5HqzeUF23RmG40z6U9G1UqNrBf5v-PUXauXm18I5aEDyik0XbitT2XQyZrjoW6HNGtiyYbow=s900-c-k-c0x00ffffff-no-rj",
  });

  const getStepContent = (step) => {
    const Component = contents[step];
    return (
      <Component
        songDetails={songDetails}
        setSongDetails={setSongDetails}
        yourNftDrops={yourNftDrops}
        setYourNftDrops={setYourNftDrops}
      />
    );
  };

  return (
    <>
      <Heading fontSize={4} mb={2}>
        New Drop
      </Heading>
      <HStack as="ol" listStyleType="none" spacing="0" mb={6}>
        {contents.map((component, index) => (
          <Step isCurrent={current === index}>{component.name}</Step>
        ))}
      </HStack>
      <Flex mb={3} flexDirection="column" minHeight={400}>
        {getStepContent(current)}
      </Flex>
      {current !== contents.length - 1 && (
        <>
          <Button
            size="lg"
            variant="solid"
            my={3}
            onClick={() =>
              current === contents.length - 1
                ? setCurrent(0)
                : setCurrent(current + 1)
            }
          >
            {contents.length - 1 === current ? "Submit" : "Next"}
          </Button>
        </>
      )}
      {!!current && (
        <Button
          size="lg"
          variant="outline"
          onClick={() =>
            current === contents.length - 1
              ? setCurrent(0)
              : setCurrent(current - 1)
          }
        >
          Back
        </Button>
      )}
    </>
  );
};

export default Drop;
