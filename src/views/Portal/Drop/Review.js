import React from "react";
import { Link } from "react-router-dom";
import { Heading, MusicCard } from "components";
import { Button, Flex } from "@chakra-ui/react";

const Review = ({ songDetails }) => {
  return (
    <>
      <Heading fontSize={2} mb={2}>
        Review your NFT for submission
      </Heading>
      <Flex justifyContent="center" alignItems="center" minHeight={400}>
        <MusicCard {...songDetails} />
      </Flex>
      <Button to="/portal/balances" as={Link}>
        Submit
      </Button>
    </>
  );
};

export default Review;
