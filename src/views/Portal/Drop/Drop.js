import React, { useState } from "react";

import { Heading } from "components";

import { Button, Flex } from "@chakra-ui/react";

import Name from "./Name";
import Upload from "./Upload";
import CoverArt from "./CoverArt";
import Bidding from "./Bidding";
import Review from "./Review";

const contents = [Name, Upload, CoverArt, Bidding, Review];

const Drop = () => {
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
      <Component songDetails={songDetails} setSongDetails={setSongDetails} />
    );
  };

  return (
    <>
      <Heading fontSize={4} mb={2}>
        New Drop
      </Heading>
      <Flex mb={3} flexDirection="column">
        {getStepContent(current)}
      </Flex>
      {current !== contents.length - 1 && (
        <>
          {!!current && (
            <Button
              size="large"
              onClick={() =>
                current === contents.length - 1
                  ? setCurrent(0)
                  : setCurrent(current - 1)
              }
            >
              Back
            </Button>
          )}
          <Button
            size="large"
            variant="solid"
            onClick={() =>
              current === contents.length - 1
                ? setCurrent(0)
                : setCurrent(current + 1)
            }
          >
            {contents.length - 2 === current ? "Submit" : "Next"}
          </Button>
        </>
      )}
    </>
  );
};

export default Drop;
