import React from "react";
import { Link } from "react-router-dom";
import { Heading, MusicCard } from "components";
import { Button, Flex } from "@chakra-ui/react";

const Review = ({ songDetails }) => {
  return (
    <>
      <Heading fontSize={2} mb={2}>
        CONGRATS! You have submitted your NFT
      </Heading>
      <Flex justifyContent="center" alignItems="center" minHeight={300}>
        <MusicCard {...songDetails} />
      </Flex>
      <Button size="large" to="/portal/balances" as={Link}>
        Home
      </Button>
    </>
  );
};

export default Review;
